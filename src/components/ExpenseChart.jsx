import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = [
  "#60A5FA", 
  "#34D399", 
  "#FBBF24",
  "#F87171", 
  "#A78BFA", 
  "#38BDF8", 
];

const ExpenseChart = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 shadow-xl text-white mb-6">

        <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Spending Breakdown
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Category-wise expense distribution
          </p>
        </div>

        <div className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
          Live analytics
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              innerRadius={60}
              paddingAngle={3}
              stroke="none"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data?.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

          <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {data?.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center gap-2 text-xs text-slate-300"
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseChart;