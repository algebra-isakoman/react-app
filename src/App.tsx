import Button from "./components/button";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Pagination from "./components/pagination";
import Tags from "./components/tags";

import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />

      <div className="container">
        <div className="container--component">
          <h2>Button</h2>
          <Button />
        </div>
        <div className="container--component">
          <h2>Tags</h2>
          <Tags />
        </div>
        <div className="container--component">
          <h2>Pagination</h2>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default App;
