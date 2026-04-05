import React from "react";
import TopCards from "./components/TopCards";
import Charts from "./components/Charts";
import OrderTable from "./components/OrderTable";

// Dummy data
const topCardsData = [
  { title: "Total Orders", value: 120 },
  { title: "Pending Orders", value: 25 },
  { title: "Completed Orders", value: 95 },
  { title: "Total Revenue", value: "Rs 250,000" },
];

const salesData = [
  { date: "2026-04-01", total: 1000 },
  { date: "2026-04-02", total: 1500 },
  { date: "2026-04-03", total: 2000 },
];

const topProducts = [
  { name: "Shirt", units: 50 },
  { name: "Jeans", units: 30 },
  { name: "Shoes", units: 20 },
  { name: "Shoes", units: 10 },
  { name: "Shoes", units: 5 },
];

const orders = [
  {
    id: "ORD001",
    customer: { name: "Ali" },
    status: "Pending",
    total: 2000,
    date: "2026-04-01",
  },
  {
    id: "ORD002",
    customer: { name: "Sara" },
    status: "Completed",
    total: 1500,
    date: "2026-04-02",
  },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 md:ml-64">
      {" "}
      {/* md:ml-64 to offset sidebar */}
      <TopCards data={topCardsData} />
      <Charts salesData={salesData} topProducts={topProducts} />
      <OrderTable orders={orders} />
    </div>
  );
};

export default AdminDashboard;
