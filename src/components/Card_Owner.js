import owner from "../assets/images/image-avatar.png";

function Card_owner() {
  return (
    <figure className="card_owner">
      <picture className="card_owner_img">
        <img src={owner} alt="Jules Wyvern" />
      </picture>
      <figcaption>
        <p className="card_owner_content">
          Creation of{" "}
          <a href="#" className="card_owner_link">
            Jules Wyvern
          </a>
        </p>
      </figcaption>
    </figure>
  );
}

export default Card_owner;
