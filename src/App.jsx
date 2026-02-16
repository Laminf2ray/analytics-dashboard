import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import KPICard from './components/KPICard';
import RevenueByCountry from './components/RevenueByCountry';
import TopSubcategories from './components/TopSubcategories';
import TopProducts from './components/TopProducts';
import RevenuePerQuarter from './components/RevenuePerQuarter';
import CategoryQuantityRevenue from './components/CategoryQuantityRevenue';
import {
  kpiData,
  secondaryKpis,
  revenueByCountry,
  topSubcategories,
  topProducts,
  revenueByQuarter,
  categoryQuantityRevenue
} from './data/dashboardData';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DA</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Data Analytics</h1>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star size={14} fill="currentColor" />
                Featured
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
          <KPICard {...kpiData.netRevenue} isLarge />
          <KPICard {...kpiData.totalProductCost} isLarge />
          <KPICard {...kpiData.profit} isLarge />
          <KPICard {...kpiData.totalCustomers} />
          <KPICard {...kpiData.revenuePerCustomer} />
          <KPICard {...kpiData.totalOrderQuantity} />
        </div>

        {/* Secondary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <KPICard {...secondaryKpis.costPerCustomer} />
          <KPICard {...secondaryKpis.profitPerCustomer} />
          <KPICard {...secondaryKpis.itemPerTransaction} />
          <KPICard {...secondaryKpis.revenuePerSale} />
          <KPICard {...secondaryKpis.costPerSale} />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <RevenueByCountry data={revenueByCountry} />
          <TopSubcategories data={topSubcategories} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <CategoryQuantityRevenue data={categoryQuantityRevenue} />
          <TopProducts data={topProducts} />
        </div>

        <div className="grid grid-cols-1 mb-6">
          <RevenuePerQuarter data={revenueByQuarter} />
        </div>

        {/* Footer Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Data Analytics Dashboard</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Real-time analytics dashboard for business intelligence. Visualizes complex datasets with 
              interactive charts, custom reporting, and comprehensive data insights.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">D3.js</span>
              <span className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">Python</span>
              <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">PostgreSQL</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">+1 more</span>
            </div>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:border-gray-300 transition-colors font-semibold"
              >
                View Details →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
