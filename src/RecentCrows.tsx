import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

import { useCrowBuckets } from './hooks/useCrowBuckets';

function RecentCrows() {
  const crowBuckets = useCrowBuckets();
  console.log('crowBuckets', crowBuckets);

  return (
    <>
      <h3>Crows in recent times:</h3>
      <BarChart width={800} height={600} data={crowBuckets}>
        <XAxis dataKey="identifier" />
        <YAxis />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </>
  );
}

export default RecentCrows;
