import { useEffect, useState } from "react";

import {
  getTransactions,
  getSummary,
  getChartData,
  getInsight,
} from "../services/transactionService";

import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import ExpenseChart from "../components/ExpenseChart";
import Filters from "../components/Filters";
import InsightCard from "../components/InsightCard";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({});
  const [chartData, setChartData] = useState([]);
  const [insight, setInsight] = useState("");

  const [category, setCategory] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");

  const loadData = async () => {
    try {
      const [t, s, c, i] = await Promise.all([
        getTransactions(),
        getSummary(),
        getChartData(),
        getInsight(),
      ]);

      setTransactions(t.data);
      setSummary(s.data);
      setChartData(c.data);
      setInsight(i.data.insight);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredTransactions = transactions.filter((t) => {
    const categoryMatch =
      category === "All" || t.category === category;

    const dateMatch =
      !selectedDate || t.date.slice(0, 10) === selectedDate;

    return categoryMatch && dateMatch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">

  
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              Finance Tracker
            </h1>
            <p className="text-xs text-slate-500">
              Personal financial intelligence dashboard
            </p>
          </div>

          <div className="text-xs text-slate-400">
            Live Dashboard
          </div>

        </div>
      </div>
     
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
     
        <SummaryCards summary={summary} />
       
        <div className="grid lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-1">
            <TransactionForm refresh={loadData} />
          </div>

          <div className="lg:col-span-2">
            <ExpenseChart data={chartData} />
          </div>

        </div>
      
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
          <Filters
            category={category}
            setCategory={setCategory}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>

             <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">
            <TransactionList transactions={filteredTransactions} />
          </div>

          <div className="lg:col-span-1">
            <InsightCard insight={insight} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;