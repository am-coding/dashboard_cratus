import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }
];

const COLORS = ['#7B080F', '#B9181E', '#CA5359'];


const CustomPieChart = () => {
    return (
        <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
        //   cx={0}
        //   cy={0}
          labelLine={false}
          outerRadius={80}
          blendStroke 
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>      
      </PieChart>
      </ResponsiveContainer>
    );
  }

export default CustomPieChart;

