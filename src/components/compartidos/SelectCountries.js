import React, { useMemo } from "react";
import {
  getTimeZones,
  convertOffsetInMinutesToString,
} from "./BookMeetingFunc";

const SelectCountries = ({ data, func }) => {
  const timeZones = useMemo(getTimeZones, []);

  return (
    <select
      className="select-form txt-destacados-alta-mobile texto-regular"
      onChange={(e) => {
        func({ ...data, country: e.target.value });
      }}
    >
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
  );
};

export default SelectCountries;
