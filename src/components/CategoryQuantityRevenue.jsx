import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const CategoryQuantityRevenue = ({ data }) => {
  const formatValue = (value) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(2)}K`;
    return value;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="font-semibold mb-2">{payload[0].payload.category}</p>
          <p className="text-blue-600">Quantity: {payload[0].value.toLocaleString()}</p>
          <p className="text-green-600">Revenue: {formatValue(payload[1].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Revenue By Quantity & Product Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" tickFormatter={formatValue} />
          <YAxis yAxisId="right" orientation="right" stroke="#10b981" tickFormatter={formatValue} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="quantity" fill="#3b82f6" name="Quantity" radius={[8, 8, 0, 0]} />
          <Bar yAxisId="right" dataKey="revenue" fill="#10b981" name="Revenue" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryQuantityRevenue;
