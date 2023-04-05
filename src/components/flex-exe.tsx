import IconClose from "../assets/icon-close";
import IconEdit from "../assets/icon-edit";

const FlexExe = () => {
  return (
    <>
      <h4>First example</h4>
      <div className="flex flex--first">
        <div className="flex--first__left">
          <img
            src="https://source.unsplash.com/random/50x50/?phone"
            alt="exercise image"
          />
          <span>text</span>
        </div>
        <div>
          <IconEdit />
        </div>
      </div>

      <h4>Second example</h4>
      <div className="flex flex--second">
        <span>text</span>
        <IconClose />
      </div>

      <h4>Third example</h4>
      <div className="flex flex--third">
        <img src="https://source.unsplash.com/random/150x150/?tesla" alt="" />
        <span>text</span>
      </div>
    </>
  );
};

export default FlexExe;
