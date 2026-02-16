import React, { useState, useEffect } from 'react';
import MetricCard from './components/MetricCard';
import RevenueByCountry from './components/RevenueByCountry';
import SubcategoryRevenue from './components/SubcategoryRevenue';
import TopProducts from './components/TopProducts';
import RevenueByQuarter from './components/RevenueByQuarter';
import RevenueByCategory from './components/RevenueByCategory';
import { Star } from 'lucide-react';

function App() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(data => {
        setDashboardData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching dashboard data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading dashboard...</div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-red-600">Error loading dashboard data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-gray-800">Data Analytics</h1>
            <div className="bg-yellow-400 px-4 py-1 rounded-full flex items-center gap-2">
              <Star className="w-5 h-5 fill-white text-white" />
              <span className="font-semibold text-gray-800">Featured</span>
            </div>
          </div>
        </div>

        {/* Top Metrics Row - Changed $ to £ */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <MetricCard 
            title="Net Revenue" 
            value={`£${(dashboardData.metrics.netRevenue / 1000000).toFixed(2)}M`}
            trend="up"
          />
          <MetricCard 
            title="Total Product Cost" 
            value={`£${(dashboardData.metrics.totalProductCost / 1000000).toFixed(2)}M`}
          />
          <MetricCard 
            title="Profit" 
            value={`£${(dashboardData.metrics.profit / 1000000).toFixed(2)}M`}
            trend="up"
          />
          <MetricCard 
            title="Total Customers" 
            value={dashboardData.metrics.totalCustomers.toLocaleString()}
          />
          <MetricCard 
            title="Revenue per Customer" 
            value={`£${dashboardData.metrics.revenuePerCustomer}`}
          />
          <MetricCard 
            title="Total Order Quantity" 
            value={dashboardData.metrics.totalOrderQuantity.toLocaleString()}
          />
        </div>

        {/* Second Metrics Row - Changed $ to £ */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <MetricCard 
            title="Cost per Customer" 
            value={`£${dashboardData.metrics.costPerCustomer}`}
          />
          <MetricCard 
            title="Profit per Customer" 
            value={`£${dashboardData.metrics.profitPerCustomer}`}
          />
          <MetricCard 
            title="Item per Transaction" 
            value={dashboardData.metrics.itemPerTransaction.toFixed(2)}
          />
          <MetricCard 
            title="Revenue per Sale" 
            value={`£${dashboardData.metrics.revenuePerSale.toLocaleString()}`}
          />
          <MetricCard 
            title="Cost per Sale" 
            value={`£${dashboardData.metrics.costPerSale}`}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <RevenueByCountry data={dashboardData.revenueByCountry} />
          <SubcategoryRevenue data={dashboardData.subcategoryRevenue} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <RevenueByCategory data={dashboardData.revenueByCategory} />
            <TopProducts data={dashboardData.topProducts} />
          </div>
          <RevenueByQuarter data={dashboardData.revenueByQuarter} />
        </div>

        {/* Footer Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Data Analytics Dashboard</h2>
              <p className="text-gray-600 mb-4">
                Real-time analytics dashboard for business intelligence. Visualizes complex datasets with
                interactive charts, custom reporting, and...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">React</span>
                <span className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">D3.js</span>
                <span className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Python</span>
                <span className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">PostgreSQL</span>
                <span className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">+1 more</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-700 font-medium flex items-center gap-2"
              >
                View Details
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;