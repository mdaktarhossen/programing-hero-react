import CardItems from "./CardItems";
import carrdDetails from "./CradDetails";

export default function Card() {
  function createCard(cardDetail) {
    return <CardItems key={cardDetail.id} name={cardDetail.name} img={cardDetail.imgURL} tel={cardDetail.phone} email={cardDetail.email} />;
  }
  return (
    <>
      <div>{carrdDetails.map(createCard)}</div>
    </>
  );
}
