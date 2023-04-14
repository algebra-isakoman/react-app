import { NavLink } from "react-router-dom";
import IconClose from "../assets/icon-close";
import Button from "../components/button";
import CardGrid from "../components/card-grid";
import CardGrid2 from "../components/card-grid-2";
import FlexExe from "../components/flex-exe";
import Input from "../components/input";
import Pagination from "../components/pagination";
import Tags from "../components/tags";
import TransformExe from "../components/transform-exe";

const Exe = () => {
  return (
    <>
      <div className="container">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="container--component">
          <h2>Input</h2>
          <Input label="" />
          <Input
            label="Last name"
            rounded={true}
            validation="Ovo je validacija"
          />
        </div>
        <div className="container--component">
          <h2>Button</h2>
          <Button value="Animate me" animate={true} icon={<IconClose />} />
        </div>
        <div className="container--component">
          <h2>Tags</h2>
          <Tags />
        </div>
        <div className="container--component">
          <h2>Pagination</h2>
          <Pagination />
        </div>
        <div className="container--component">
          <h2>Transfom property exercise</h2>
          <TransformExe />
        </div>
        <div className="container--component">
          <h2>Flex exercise</h2>
          <FlexExe />
        </div>
        <div className="container--component">
          <h2>Responsive grid</h2>
          <CardGrid />
        </div>
        <div className="container--component">
          <h2>Responsive grid 2</h2>
          <CardGrid2 />
        </div>
      </div>
    </>
  );
};
export default Exe;
