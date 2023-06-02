import DashboardTable from "./components/dashboard-table";
import DashboardGraph from "./components/graph";
import InfoCard from "./components/info-card";

const BootstrapDashboard = () => {
  return (
    <>
      <div className="bootstrap__tab__content">
        <div className="bootstrap__grid">
          <div className="bootstrap__card bootstrap__card--center">
            <InfoCard />
          </div>
          <div className="bootstrap__card">
            <DashboardGraph />
          </div>
        </div>
        <div className="bootstrap__card bootstrap__card--mt">
          <DashboardTable />
        </div>
      </div>
    </>
  );
};
export default BootstrapDashboard;
