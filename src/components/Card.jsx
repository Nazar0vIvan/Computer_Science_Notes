export function Card({ title, desc, icon }) {
  return (
    <div style={{ position: "relative" }}>
      <div className="card">
        <img className="card__icon" src={icon}></img>
        <div className="card__text-container">
          <div className="card__text">
            <p className="card__title">{title}</p>
            <p className="card__desc">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
