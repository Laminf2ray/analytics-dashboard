import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueByCategory = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue By Quantity & Product Category</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => {
              if (name === 'revenue') return [`£${(value / 1000000).toFixed(2)}M`, 'Revenue'];
              return [value.toLocaleString(), 'Quantity'];
            }} 
          />
          <Bar dataKey="revenue" fill="#3B82F6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
            <span className="text-sm text-gray-600">{item.category}</span>
            <div className="flex gap-4">
              <span className="text-sm font-semibold text-gray-800">
                £{(item.revenue / 1000000).toFixed(2)}M
              </span>
              <span className="text-sm text-gray-500">{item.quantity.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByCategory;