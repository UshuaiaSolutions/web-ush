import React, { useContext, useMemo } from "react";
import {
  getTimeZones,
  convertOffsetInMinutesToString,
} from "./BookMeetingFunc";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";

const SelectCountries = ({ data, func }) => {
  const timeZones = useMemo(getTimeZones, []);

  const { text } = useContext(TranslationContext);

  return (
    <>
      <label htmlFor="country" className="label-form mb-8">
        {text.HOME.BOOK_MEETING.FORM.COUNTRY} *
      </label>
      <select
        name="country"
        id="country"
        className="select-form txt-destacados-alta-mobile texto-regular"
        onChange={(e) => {
          func({ ...data, country: e.target.value });
        }}
        value={data.country ? data.country : ""}
      >
        <option value="" disabled="disabled"></option>
        {timeZones
          ?.filter((e) => e.countryName !== "Falkland Islands")
          ?.map((e) => {
            const title = e.countryName + " / " + e.mainCities[0];
            return (
              <option value={e.name} key={e.name}>
                {convertOffsetInMinutesToString(e.rawOffsetInMinutes) +
                  " : " +
                  title}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default SelectCountries;
