import React from 'react';
import { regions } from '../../services/countryService';

export default function SelectRegion({ liftRegion }) {
  return (
    <label>
      Choose region:
      <select onChange={(e) => liftRegion(e.target.value)}>
        {regions.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
