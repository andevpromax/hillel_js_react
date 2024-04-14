import React, { useEffect, useState } from 'react';
import { getCountriesRegion } from '../../services/countryService';

export default function SelectCountry({ region, liftCapital }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      let selectedRegion = await getCountriesRegion(region);
      console.log('selectedRegion', selectedRegion);
      setCountries(
        selectedRegion.map((item) => ({
          name: item.name.common,
          flag: item.flag,
          capital: item.capital ? item.capital[0] : ``,
        }))
      );
    })();
  }, [region]);

  return (
    <label>
      Choose country:
      <select onChange={(e) => liftCapital(e.target.value)}>
        {countries.map((item) => (
          <option key={item.name} value={item.capital}>
            {item.flag} {item.name}
          </option>
        ))}
        <option value='Ukraine'>Ukraine</option>
      </select>
    </label>
  );
}
