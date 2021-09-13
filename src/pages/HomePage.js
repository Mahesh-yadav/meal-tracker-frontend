import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
  const history = useHistory();
  console.log(history);
  return <div>HomePage</div>;
}
