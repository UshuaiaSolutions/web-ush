import getDay from "date-fns/getDay";
import { rawTimeZones } from "@vvo/tzdb";

export function getTimeZones() {
  // Sort timezones according to time offset.
  const timeZones = rawTimeZones.sort((tzA, tzB) => {
    const offsetDiff = tzA.rawOffsetInMinutes - tzB.rawOffsetInMinutes;

    if (offsetDiff === 0) {
      if (tzA.countryName === tzB.countryName) {
        if (tzA.mainCities[0] < tzB.mainCities[0]) {
          return -1;
        } else {
          return 1;
        }
      } else if (tzA.countryName < tzB.countryName) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return offsetDiff;
    }
  });

  return timeZones;
}

export function convertOffsetInMinutesToString(offsetInMinutes) {
  const absValue = Math.abs(offsetInMinutes);
  const hour = Math.floor(absValue / 60);
  const minute = absValue % 60;
  const plusMinus = offsetInMinutes >= 0 ? "+" : "-";

  return (
    plusMinus +
    convertNumberToStringWithZeroPadding(hour) +
    ":" +
    convertNumberToStringWithZeroPadding(minute)
  );
}

function convertNumberToStringWithZeroPadding(num) {
  return ("0" + num).slice(-2);
}

export const handleChange = (id, value, setContactForm, contactForm) => {
  setContactForm({ ...contactForm, [id]: value });
};

export const handleSend = (contactForm, setShowSuccess, setContactForm) => {
  if (
    contactForm?.name?.length > 0 &&
    contactForm?.mail?.length > 0 &&
    contactForm?.country?.length > 0 &&
    contactForm?.company?.length > 0 &&
    contactForm?.date_reunion?.length > 0
  ) {
    setShowSuccess(true);
    setContactForm({});
  }
};

export const isWeekday = (date) => {
  const day = getDay(date);
  return day !== 0 && day !== 6;
};
