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
        <Button />
        <Tags />
        <Pagination />
      </div>
    </div>
  );
};

export default App;
