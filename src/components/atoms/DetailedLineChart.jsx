import React from 'react';
import { LineChart, Line, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

const DetailedLineChart = () => {
    return (
       <ResponsiveContainer width="100%" height={110}>
         <LineChart data={data}>
               <CartesianGrid horizontal={false} strokeWidth="3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
               <Line type="linear" dataKey="uv" stroke="#B9181E" strokeWidth="4" dot={false} />
         </LineChart>
        </ResponsiveContainer>
    )
}

export default DetailedLineChart;
