const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-xl p-6 text-white">
      
          <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Transactions
          </h2>
          <p className="text-slate-400 text-sm">
            Your latest financial activity
          </p>
        </div>

        <div className="text-xs text-slate-400">
          {transactions.length} records
        </div>
      </div>

      {transactions.length === 0 ? (
        <div className="text-center py-10 text-slate-400">
          No transactions found
        </div>
      ) : (
        <div className="space-y-3">

          {transactions.map((t) => {
            const isIncome = t.type === "income";

            return (
              <div
                key={t._id}
                className="flex items-center justify-between bg-slate-800/60 hover:bg-slate-800 transition rounded-xl p-4 border border-slate-700"
              >
              
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                 
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">
                      {t.category}
                    </span>

                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        isIncome
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {t.type}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400">
                    {new Date(t.date).toLocaleDateString()}
                  </div>

                  {t.note && (
                    <div className="text-sm text-slate-300 mt-1">
                      {t.note}
                    </div>
                  )}
                </div>

                <div
                  className={`text-lg font-semibold ${
                    isIncome ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isIncome ? "+" : "-"}₹{t.amount}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TransactionList;