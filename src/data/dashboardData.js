// Sample data structure for the analytics dashboard

export const kpiData = {
  netRevenue: { value: 12.08, unit: 'M', label: 'Net Revenue' },
  totalProductCost: { value: 6.54, unit: 'M', label: 'Total Product Cost' },
  profit: { value: 5.54, unit: 'M', label: 'Profit' },
  totalCustomers: { value: 18.48, unit: 'K', label: 'Total Customers' },
  revenuePerCustomer: { value: 653, unit: '$', label: 'Revenue per Customers' },
  totalOrderQuantity: { value: 60, unit: 'K', label: 'Total Order Quantity' }
};

export const secondaryKpis = {
  costPerCustomer: { value: 935, unit: '$', label: 'Cost per Customer' },
  profitPerCustomer: { value: 654, unit: '$', label: 'Profit per Customer' },
  itemPerTransaction: { value: 2.88, unit: '', label: 'Item per Transaction' },
  revenuePerSale: { value: 1061, unit: '$', label: 'Revenue per Sale' },
  costPerSale: { value: 625, unit: '$', label: 'Cost per Sale' }
};

export const revenueByCountry = [
  { name: 'United States', value: 9390000, color: '#3b82f6' },
  { name: 'Australia', value: 9060000, color: '#8b5cf6' },
  { name: 'United Kingdom', value: 3390000, color: '#eab308' },
  { name: 'Germany', value: 2760000, color: '#ef4444' },
  { name: 'France', value: 2540000, color: '#10b981' }
];

export const topSubcategories = [
  { name: 'Road Bikes', value: 13866632.72, color: '#dc2626' },
  { name: 'Mountain Bikes', value: 9952759.56, color: '#ea580c' },
  { name: 'Touring Bikes', value: 3844801.05, color: '#f59e0b' },
  { name: 'Bike Stands', value: 39591.00, color: '#84cc16' },
  { name: 'Bike Racks', value: 39360.00, color: '#22c55e' }
];

export const topProducts = [
  { name: 'Sport-100 Helmet, Bl', orders: 4210, revenue: 15000 },
  { name: 'AWC Logo Cap', orders: 2190, revenue: 2000 },
  { name: 'Mountain-200 Black,', orders: 1816, revenue: 4030000 },
  { name: 'Road Bottle Cage', orders: 1712, revenue: 2000 },
  { name: 'Mountain-100 Black,', orders: 211, revenue: 71000 }
];

export const revenueByQuarter = [
  { quarter: 'Q1', revenue: 2040000 },
  { quarter: 'Q2', revenue: 1800000 },
  { quarter: 'Q3', revenue: 3970000 },
  { quarter: 'Q4', revenue: 4370000 },
  { quarter: 'Q5', revenue: 5430000 }
];

export const categoryQuantityRevenue = [
  { category: 'Accessories', quantity: 15205, revenue: 28320000 },
  { category: 'Bikes', quantity: 8750, revenue: 70000 },
  { category: 'Clothing', quantity: 12100, revenue: 24000 },
  { category: 'Components', quantity: 9300, revenue: 18000 }
];
