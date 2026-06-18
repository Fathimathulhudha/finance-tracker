const InsightCard = ({ insight }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-xl text-white mb-6">

      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="flex items-center justify-between mb-4 relative z-10">
        <h2 className="text-lg font-semibold tracking-tight">
          Smart Insight
        </h2>

        <span className="text-[10px] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
          AI Generated
        </span>
      </div>

      <p className="text-slate-300 leading-relaxed relative z-10">
        {insight}
      </p>

      <div className="mt-4 text-xs text-slate-500 relative z-10">
        Based on your recent spending activity
      </div>
    </div>
  );
};

export default InsightCard;