import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { data } from "../../../data/chartData";

const cartMargins = {
  top: 10,
  right: 30,
  left: 0,
  bottom: 0,
};

const areaData = [
  {
    key: "uv",
    color: "#8884d8",
  },
  {
    key: "pv",
    color: "#82ca9d",
  },
  {
    key: "amt",
    color: "#ffc658",
  },
];

const DashboardGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data} margin={cartMargins}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        {areaData.map((area) => {
          return (
            <Area
              key={area.key}
              type="monotone"
              dataKey={area.key}
              stackId="1"
              stroke={area.color}
              fill={area.color}
            />
          );
        })}
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default DashboardGraph;
