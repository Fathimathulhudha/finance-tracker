import { useState } from "react";
import { addTransaction } from "../services/transactionService";

const TransactionForm = ({ refresh }) => {
  const [formData, setFormData] = useState({
    amount: "",
    category: "Food",
    type: "expense",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addTransaction(formData);

      setFormData({
        amount: "",
        category: "Food",
        type: "expense",
        date: "",
        note: "",
      });

      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700 text-white">
      
         <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Add Transaction
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Track your income and expenses in real time
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
              <div className="md:col-span-1">
          <label className="text-xs text-slate-400">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="₹ 0.00"
            required
            className="mt-1 w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

           <div>
          <label className="text-xs text-slate-400">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-1 w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
       <div>
          <label className="text-xs text-slate-400">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Salary</option>
            <option>Other</option>
          </select>
        </div>

           <div>
          <label className="text-xs text-slate-400">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

            <div className="md:col-span-2">
          <label className="text-xs text-slate-400">Note</label>
          <input
            type="text"
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Add a short note..."
            className="mt-1 w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg transition active:scale-[0.98]"
        >
          + Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;