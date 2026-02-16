import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const KPICard = ({ label, value, unit, trend, isLarge = false }) => {
  const formattedValue = unit === '$' 
    ? `$${value.toLocaleString()}`
    : unit === 'M' 
    ? `$${value}M` 
    : unit === 'K'
    ? `${value}K`
    : value.toLocaleString();

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 ${isLarge ? 'col-span-1' : ''}`}>
      <div className="flex flex-col">
        <span className="text-sm text-gray-600 mb-2">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-blue-600">{formattedValue}</span>
          {trend && (
            <span className={`flex items-center text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              {Math.abs(trend)}%
            </span>
          )}
        </div>
        {isLarge && (
          <div className="mt-4 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded"></div>
        )}
      </div>
    </div>
  );
};

export default KPICard;
