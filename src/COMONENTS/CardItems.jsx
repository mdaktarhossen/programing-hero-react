import "../index.css";

export default function CardItems({ name, img, tel, email, idx }) {
  return (
    <>
      <div className="card">
        <h1 className="heading">My Contract </h1>
        <div className="top">
          <h2 className="name">{name[idx]}</h2>
          <img className="circle-img" src={img[idx]} alt="" />
        </div>
        <div className="bottom">
          <p className="info">{tel[idx]}</p>
          <p className="info">{email[idx]}</p>
        </div>
      </div>
    </>
  );
}
