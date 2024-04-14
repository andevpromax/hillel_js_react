import React from 'react';
import { useParams } from 'react-router-dom';

export default function CatName() {
  const params = useParams();
  console.log('params', params);

  return <div>CatName: {params.catName}</div>;
}
