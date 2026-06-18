const Filters = ({
  category,
  setCategory,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-5 shadow-xl text-white mb-6">

      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Filters
          </h2>
          <p className="text-xs text-slate-400">
            Refine your transaction view
          </p>
        </div>

        <div className="text-xs text-slate-500">
          Active controls
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-400">
            Category
          </label>

          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none bg-slate-800 border border-slate-700 text-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="All">All Categories</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Salary">Salary</option>
              <option value="Other">Other</option>
            </select>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
              ▼
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-400">
            Date
          </label>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

      </div>

      <div className="flex flex-wrap gap-2 mt-4">

        {["All", "Food", "Travel", "Shopping", "Bills"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-3 py-1 text-xs rounded-full border transition ${
              category === item
                ? "bg-blue-600 text-white border-blue-500"
                : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
            }`}
          >
            {item}
          </button>
        ))}

      </div>
    </div>
  );
};

export default Filters;