import React, { useMemo, useState } from "react";
import spacetime from "spacetime";
import TimezoneSelect, { allTimezones } from "react-timezone-select";

const SelectCountries = () => {
  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [datetime, setDatetime] = useState(spacetime.now());

  useMemo(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.goto(tzValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tz]);

  return (
    <div className="App">
      <div className="timezone--wrapper">
        <TimezoneSelect
          value={tz}
          onChange={setTz}
          labelStyle="altName"
          timezones={{
            ...allTimezones,
            "America/Lima": "Pittsburgh",
            "Europe/Berlin": "Frankfurt",
          }}
        />
      </div>
    </div>
  );
};

export default SelectCountries;
