import nft from "../assets/images/image-equilibrium.jpg";

function Card_picture() {
  return (
    <picture className="card_picture">
      <img src={nft} alt="nft equilibrium image" ></img>
    </picture>
  );
}

export default Card_picture;
