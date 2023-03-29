import IconLightbulb from "../assets/icon-lightbulb";

const Tags = () => {
  return (
    <div>
      <div className="tag">
        <span className="tag__label">Tag 1</span>
        <IconLightbulb />
      </div>
      <div className="tag">
        <span className="tag__label">Tag 2</span>
        <IconLightbulb />
      </div>
      <div className="tag">
        <span className="tag__label">Tag 3</span>
        <IconLightbulb />
      </div>
    </div>
  );
};

export default Tags;
