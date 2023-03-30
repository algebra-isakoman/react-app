import IconLeft from "../assets/icon-left";
import IconRight from "../assets/icon-right";

const Pagination = () => {
  return (
    <div className="pagination">
      <span className="pagination__arrow pagination__arrow--first">
        <IconLeft />
      </span>
      <div className="pagination__item">1</div>
      <div className="pagination__item">2</div>
      <div className="pagination__item">3</div>
      <div className="pagination__item">4</div>
      <span className="pagination__arrow pagination__arrow--last">
        <IconRight />
      </span>
    </div>
  );
};

export default Pagination;
