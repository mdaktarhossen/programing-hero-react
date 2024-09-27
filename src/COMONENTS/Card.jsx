import CardItems from "./CardItems";

export default function Card() {
  let name = ["Md akter", "Md akbar", "Md asif"];
  let img = [
    "https://cdn2.free-power-point-templates.com/articles/wp-content/uploads/2020/08/pixlr-x.png",
    "https://cdn2.free-power-point-templates.com/articles/wp-content/uploads/2020/08/pixlr-x.png",
    "https://cdn2.free-power-point-templates.com/articles/wp-content/uploads/2020/08/pixlr-x.png",
    "https://cdn2.free-power-point-templates.com/articles/wp-content/uploads/2020/08/pixlr-x.png",
  ];
  let tel = ["01111", "111", "111"];
  let email = ["Md@gg.gmail.com", "aa@gg.gmail.com", "aa@gg.gmail.com"];
  return (
    <>
      <div>
        <CardItems name={name} img={img} tel={tel} email={email} idx={0} />
        <CardItems name={name} img={img} tel={tel} email={email} idx={1} />
        <CardItems name={name} img={img} tel={tel} email={email} idx={2} />
      </div>
    </>
  );
}
