// eslint-disable-next-line react/prop-types
export default function Note({ title, des }) {
  return (
    <>
      <div className="note">
        <h3>{title}</h3>
        <p>{des}</p>
      </div>
    </>
  );
}
