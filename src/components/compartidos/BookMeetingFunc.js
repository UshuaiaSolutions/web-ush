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

const mandatory = ["name", "mail", "country", "company", "date_reunion"];

export const handleSend = (
  contactForm,
  setShowSuccess,
  setContactForm,
  setMissingFields
) => {
  let missing = [];

  mandatory?.map((e, i) => {
    if (e !== "date_reunion") {
      if (!(contactForm?.[e] && contactForm?.[e].length !== 0)) {
        missing.push(e);
      }
    } else {
      if (contactForm?.[e] !== Object(contactForm?.[e])) {
        missing.push(e);
      }
    }

    if (i === mandatory?.length - 1) {
      if (missing.length === 0) {
        setShowSuccess(true);
        setContactForm({});
        setMissingFields([]);
      } else {
        setMissingFields(missing);
      }
    }
    return missing;
  });
};

export const isWeekday = (date) => {
  const day = getDay(date);
  return day !== 0 && day !== 6;
};
