import React from 'react';
import { LineChart, Line, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    {
      name: '06:00', downloads: 100, data: 112,
    },
    {
      name: '09:00', downloads: 200, data: 130,
    },
    {
      name: '12:00', downloads: 300, data: 100,
    },
    {
      name: '15:00', downloads: 400, data: 290,
    },
    {
      name: '18:00', downloads: 500, data: 320,
    }, 
    {
      name: '21:00', downloads: 600, data: 590,
    },
  ];

const DetailedLineChart = () => {
    return (
       <ResponsiveContainer width="100%" height={220}>
         <LineChart data={data}>
               <CartesianGrid horizontal={false} strokeWidth="3" />
                <XAxis dx={5} tick={{fontSize: 11}} dy={10} axisLine={false} tickLine={false} dataKey="name" />
                <YAxis dx={-25} tick={{fontSize: 11}} dataKey="downloads" axisLine={false} tickLine={false} />
                <Tooltip />
                {/* <Legend /> */}
               <Line type="linear" dataKey="data" stroke="#B9181E" strokeWidth="4" dot={false} />
         </LineChart>
        </ResponsiveContainer>
    )
}

export default DetailedLineChart;
