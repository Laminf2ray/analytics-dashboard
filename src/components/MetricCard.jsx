import React from 'react';
import { TrendingUp } from 'lucide-react';

const MetricCard = ({ title, value, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="text-sm text-gray-600 mb-1">{title}</div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">{value}</div>
        {trend === 'up' && (
          <TrendingUp className="w-5 h-5 text-green-500" />
        )}
      </div>
      {trend === 'up' && (
        <div className="mt-2 h-1 bg-blue-600 rounded-full"></div>
      )}
    </div>
  );
};

export default MetricCard;