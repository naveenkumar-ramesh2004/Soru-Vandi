import './Shimmer.css';
const Shimmer = () => {
  return (
    <div className="restaurant-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>

            <div className="shimmer-title"></div>

            <div className="shimmer-cuisine"></div>

            <div className="shimmer-details">
              <div className="shimmer-rating"></div>
              <div className="shimmer-time"></div>
              <div className="shimmer-cost"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;