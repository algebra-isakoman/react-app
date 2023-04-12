import Toggle from "./toggle";

const Card2 = () => {
  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__img--secondary"
          src="https://source.unsplash.com/random/?lion"
          alt="card hero image"
        />
        <div>
          <div className="card__title--secondary">GameWeek 17</div>
          <div>Premier league</div>
        </div>
      </div>
      <div className="card__body">
        <div>
          <div className="card__body__title">Winning price</div>
          <div className="card__body__desc">Signed BVB Jersey</div>
        </div>
        <div className="card__tag">
          <div>14</div>
          <div>Days</div>
        </div>
      </div>
      <div className="card__footer--secondary">
        <div>
          <div className="card__footer__label">Game points</div>
          <div className="card__footer__value">1000</div>
        </div>
        <div>
          <div className="card__footer__label">Game entries</div>
          <div className="card__footer__value">1452</div>
        </div>
        <div>
          <div className="card__footer__label">Reminder</div>
          <div className="card__toggle">
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
