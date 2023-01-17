import Card_info from "./Card_Info";
import Card_owner from "./Card_Owner";
import Card_picture from "./Card_Picture";

function Card() {
  return (
    <main className="card">
      <h1>NFT Preview Card Component</h1>
      <Card_picture />
      <Card_info />
      <Card_owner />
    </main>
  );
}

export default Card;
