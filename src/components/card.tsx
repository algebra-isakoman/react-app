import Button from "./button";
type CardProps = {
  title: string;
};
const Card = ({ title }: CardProps) => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src="https://source.unsplash.com/random/?meditation"
          alt="card hero image"
        />
      </div>
      <div className="card__title">{title}</div>
      <div className="card__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </div>
      <div className="card__footer">
        <Button color="green" value="OK" />
        <Button value="Cancel" />
      </div>
    </div>
  );
};

export default Card;
