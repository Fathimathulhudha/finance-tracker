const SummaryCards = ({ summary }) => {
  const cards = [
    {
      title: "Total Income",
      value: `₹${summary.income || 0}`,
      delta: "↑",
      glow: "from-emerald-500/10",
      accent: "text-emerald-400",
      ring: "border-emerald-500/20",
    },
    {
      title: "Total Expense",
      value: `₹${summary.expense || 0}`,
      delta: "↓",
      glow: "from-rose-500/10",
      accent: "text-rose-400",
      ring: "border-rose-500/20",
    },
    {
      title: "Net Balance",
      value: `₹${summary.balance || 0}`,
      delta: "≈",
      glow: "from-indigo-500/10",
      accent: "text-indigo-400",
      ring: "border-indigo-500/20",
    },
    {
      title: "Top Category",
      value: summary.topCategory || "N/A",
      delta: "★",
      glow: "from-amber-500/10",
      accent: "text-amber-400",
      ring: "border-amber-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

      {cards.map((card) => (
        <div
          key={card.title}
          className={`
            relative overflow-hidden
            rounded-2xl
            border border-slate-700
            bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
            p-6
            shadow-xl
            hover:scale-[1.02]
            transition-all duration-300
          `}
        >
          <div
            className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${card.glow} blur-3xl rounded-full`}
          />

          <div className="flex items-center justify-between relative z-10 mb-4">
            <p className="text-sm text-slate-400 font-medium">
              {card.title}
            </p>

            <div
              className={`
                w-9 h-9
                rounded-xl
                flex items-center justify-center
                border ${card.ring}
                bg-slate-800
                text-sm
                ${card.accent}
                font-semibold
              `}
            >
              {card.delta}
            </div>
          </div>

         <h2 className="text-3xl font-semibold text-white relative z-10">
            {card.value}
          </h2>

          <p className="text-xs text-slate-500 mt-3 relative z-10">
            Live financial snapshot
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;