import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import { Card } from "./Card";
import { getCards } from "../../api/cards";

export function CardsList() {
  const isResizing = useOutletContext();
  const cards = useLoaderData();
  return (
    <div className="cards-list">
      {cards.map((card) => {
        const { cardId, title, desc, icon, path } = card;
        return (
          <Link key={cardId} to={path} className={isResizing ? "disabled" : ""}>
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

export const cardsListRoute = {
  element: <CardsList />,
  loader,
};
