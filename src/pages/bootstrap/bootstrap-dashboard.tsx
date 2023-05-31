import { ProgressBar, Table } from "react-bootstrap";
import { frontendRazred } from "../../data/frontendRazred";

const BootstrapDashboard = () => {
  return (
    <>
      <div className="bootstrap__tab__content">
        <div className="bootstrap__grid">
          <div className="bootstrap__card">
            <div className="bootstrap__head">
              <div className="bootstrap__text--big">45</div>
              <div className="bootstrap__text--right">
                <div className="bootstrap__text--md">Ovo je neki tekst</div>
                <div className="bootstrap__text--sub">
                  Koji nešto obješnjava
                </div>
              </div>
            </div>
            <ProgressBar animated now={45} />
          </div>
          <div className="bootstrap__card">Graf</div>
        </div>
        <div className="bootstrap__card bootstrap__card--mt">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Height</th>
                <th>Hobby</th>
              </tr>
            </thead>
            <tbody>
              {frontendRazred.map((row, index) => {
                if (index > 6) return;

                return (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.lastName}</td>
                    <td>{row.height}cm</td>
                    <td>{row.hobby}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export default BootstrapDashboard;
