import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample dashboard data
const dashboardData = {
  metrics: {
    netRevenue: 12080000,
    totalProductCost: 6540000,
    profit: 5540000,
    totalCustomers: 18480,
    revenuePerCustomer: 653,
    totalOrderQuantity: 60000,
    costPerCustomer: 935,
    profitPerCustomer: 654,
    itemPerTransaction: 2.88,
    revenuePerSale: 1061,
    costPerSale: 625
  },
  revenueByCountry: [
    { name: 'United States', value: 9390000 },
    { name: 'Australia', value: 9060000 },
    { name: 'United Kingdom', value: 3390000 },
    { name: 'Germany', value: 2400000 },
    { name: 'France', value: 1500000 }
  ],
  subcategoryRevenue: [
    { name: 'Road Bikes', value: 13962759.56 },
    { name: 'Mountain Bikes', value: 9952759.56 },
    { name: 'Touring Bikes', value: 3844801.05 },
    { name: 'Bike Stands', value: 39591.00 },
    { name: 'Bike Racks', value: 39360.00 }
  ],
  topProducts: [
    { name: 'Sport-100 Helmet, Bl', orders: 4210, sales: '0.15M' },
    { name: 'AWC Logo Cap', orders: 2190, sales: '0.02M' },
    { name: 'Mountain-200 Black,', orders: 1816, sales: '4.03M' },
    { name: 'Road Bottle Cage', orders: 1712, sales: '0.02M' },
    { name: 'Mountain-100 Black,', orders: 211, sales: '0.71M' }
  ],
  revenueByQuarter: [
    { quarter: 'Q1', value: 2040000 },
    { quarter: 'Q2', value: 3970000 },
    { quarter: 'Q3', value: 4370000 },
    { quarter: 'Q4', value: 5480000 }
  ],
  revenueByCategory: [
    { category: 'Bikes', revenue: 28320000, quantity: 15205 },
    { category: 'Components', revenue: 700000, quantity: 8500 },
    { category: 'Clothing', revenue: 240000, quantity: 12000 },
    { category: 'Accessories', revenue: 180000, quantity: 25000 }
  ]
};

// API endpoint
app.get('/api/dashboard', (req, res) => {
  res.json(dashboardData);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard API: http://localhost:${PORT}/api/dashboard`);
});