import React from 'react';
import DogList from '../components/Dog/DogList/DogList';
import DogHatico from '../components/Dog/DogHatico/DogHatico';
import DogPatron from '../components/Dog/DogPatron/DogPatron';

import { Routes, Route, Link } from 'react-router-dom';

export default function Dog() {
  return (
    <div>
      <h3>Dog page</h3>
      <DogList />

      <nav>
        <li>
          <Link to={`/patron`}>Patron</Link>
        </li>
        <li>
          <Link to={`/hatico`}>Hatico</Link>
        </li>
      </nav>

      <Routes>
        <Route path={`/patron`} element={<DogPatron />} />
        <Route path={`/hatico`} element={<DogHatico />} />
      </Routes>
    </div>
  );
}
