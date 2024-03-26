import { useEffect } from "react";

export function Card({ title, desc, icon, code }) {
  return (
    <div className="card">
      <div className="card__title">
        <img className="card__title-icon" src={icon}></img>
        <p className="card__title-text" data-color-id={title}>
          {title}
        </p>
      </div>
      <p className="card__desc">{desc}</p>
      <div className="card__code">{code}</div>
    </div>
  );
}
