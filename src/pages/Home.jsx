import { Link, useLoaderData } from "react-router-dom";
import { Card } from "../components/Card";
import { getCards } from "../../api/cards";

function CardsList() {
  const cards = useLoaderData();
  return (
    <div className="cards-list">
      {cards.map((card) => {
        const { cardId, title, desc, icon, path } = card;
        return (
          <Link key={cardId} to={path}>
            <Card title={title} desc={desc} icon={icon} />
          </Link>
        );
      })}
    </div>
  );
}

async function loader({ request: { signal } }) {
  return await getCards({ signal });
}

export const homeRoute = {
  element: <CardsList />,
  loader,
};
