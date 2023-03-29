import iconLeft from "./../assets/icon-left.svg";
import iconRight from "./../assets/icon-right.svg";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__arrow">
        <img src={iconLeft} alt="previous page" />
      </div>
      <div className="pagination__item">1</div>
      <div className="pagination__item">2</div>
      <div className="pagination__item">3</div>
      <div className="pagination__item">4</div>
      <div className="pagination__arrow">
        <img src={iconRight} alt="next page" />
      </div>
    </div>
  );
};

export default Pagination;
