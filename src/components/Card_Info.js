import coin from "../assets/images/icon-ethereum.svg";
import clock from "../assets/images/icon-clock.svg";

function Card_info() {
  return (
    <div className="card_info">
      <a href="#" className="card_info_title">
        Equilibrium #3429
      </a>
      <p className="card_info_content">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="card_info_data">
        <div className="data">
          <img src={coin} arial-hidden="true" />
          <span className="data_content data_price">0.041 eth</span>
        </div>
        <div className="data">
          <img src={clock} arial-hidden="true" />
          <span className="data_content data_day">3 days left</span>
        </div>
      </div>
    </div>
  );
}

export default Card_info;
