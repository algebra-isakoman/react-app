// import { Table } from "react-bootstrap";
import { frontendRazred } from "../../../data/frontendRazred";

const DashboardTable = () => {
  return (
    <>
      {/* <Table striped bordered hover size="sm">
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
      </Table> */}
    </>
  );
};

export default DashboardTable;
