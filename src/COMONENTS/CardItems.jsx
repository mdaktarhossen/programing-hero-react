import "../index.css";

// eslint-disable-next-line react/prop-types
export default function CardItems({ name, img, tel, email }) {
  return (
    <>
      <div className="card">
        <h1 className="heading">My Contract </h1>
        <div className="top">
          <h2 className="name">{name}</h2>
          <img className="circle-img" src={img} alt="" />
        </div>
        <div className="bottom">
          <p className="info">{tel}</p>
          <p className="info">{email}</p>
        </div>
      </div>
    </>
  );
}
