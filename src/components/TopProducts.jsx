import React from 'react';

const TopProducts = ({ data }) => {
  const formatCurrency = (value) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(2)}K`;
    return `$${value}`;
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Top 5 Products by order & sales</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Product Name</th>
              <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700">Orders</th>
              <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-sm">{product.name}</td>
                <td className="py-3 px-2 text-sm text-right">{product.orders.toLocaleString()}</td>
                <td className="py-3 px-2 text-sm text-right font-semibold">{formatCurrency(product.revenue)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
