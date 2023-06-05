import { ReactNode } from "react";
// import { Button, Tab, Tabs } from "react-bootstrap";
import BootstrapDashboard from "./bootstrap-dashboard";
import BootstrapGame from "./bootstrap-game";

type TabType = {
  label: string;
  component: ReactNode;
};

const tabData: TabType[] = [
  {
    label: "Dashboard",
    component: <BootstrapDashboard />,
  },
  {
    label: "Game",
    component: <BootstrapGame />,
  },
];

const Bootstrap = () => {
  return (
    <>
      <div className="container">
        <div className="bootstrap__head">
          <h1>Hello bootstrap</h1>
          {/* <Button variant="warning">Click me</Button> */}
        </div>
        <hr />
        {/* <Tabs defaultActiveKey={tabData[0].label}>
          {tabData.map((tab) => {
            return (
              <Tab key={tab.label} eventKey={tab.label} title={tab.label}>
                {tab.component}
              </Tab>
            );
          })}
        </Tabs> */}
      </div>
    </>
  );
};

export default Bootstrap;
