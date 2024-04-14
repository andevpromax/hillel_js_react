import React, { useState } from 'react';
import SelectRegion from './SelectRegion';
import SelectCountry from './SelectCountry';
import Weather from './Weather';

export default function CountryWeather() {
  const [region, setRegion] = useState(null);
  const [capital, setCapital] = useState(null);

  console.log('region', region);
  console.log('capital', capital);

  return (
    <div className='container'>
      <SelectRegion liftRegion={(value) => setRegion(value)} />

      {region ? (
        <>
          <hr />
          <SelectCountry
            region={region}
            liftCapital={(value) => setCapital(value)}
          />
        </>
      ) : null}

      {capital ? (
        <>
          <hr />
          <Weather capital={capital} />
        </>
      ) : null}
    </div>
  );
}
