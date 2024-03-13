export function Card({ title, desc, icon }) {
  return (
    <div style={{ position: "relative" }}>
      <div className={"overlay"} role="button"></div>
      <div className="card">
        <img className="card__icon" src={icon}></img>
        <div className="card__text-wrapper">
          <div className="card__text">
            <p className="card__title">{title}</p>
            <p className="card__desc">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
