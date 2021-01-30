import React from 'react';
import { LineChart, Line, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    {
       uv: 0, pv: 2400, amt: 2400,
    },
    {
       uv: 1800, pv: 1398, amt: 2210,
    },
    {
       uv: 2000, pv: 9800, amt: 2290,
    },
    {
       uv: 2780, pv: 3908, amt: 2000,
    },
    {
       uv: 1890, pv: 4800, amt: 2181,
    },
    {
       uv: 2390, pv: 3800, amt: 2500,
    },
    {
       uv: 3490, pv: 4300, amt: 2100,
    },
    {
      uv: 3990, pv: 6300, amt: 1100,
   },
   {
      uv: 6690, pv: 3300, amt: 3100,
   },
  ];
const CustomLineChart = () => {
    return (
       <ResponsiveContainer width="100%" height={110}>
         <LineChart data={data}>
               <CartesianGrid horizontal={false} strokeWidth="3" />
               <Line type="linear" dataKey="uv" stroke="#B9181E" strokeWidth="4" dot={false} />
         </LineChart>
        </ResponsiveContainer>
    )
}

export default CustomLineChart;
