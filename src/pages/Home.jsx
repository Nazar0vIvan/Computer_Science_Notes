import { useLoaderData } from "react-router-dom";
import { getCards } from "../../api/cards";
import { CardsList } from "../components/CardsList";

function Home() {
  const cards = useLoaderData();
  return (
    <div className="home">
      <CardsList cards={cards} />
    </div>
  );
}

async function loader({ request: { signal } }) {
  return await getCards({ signal });
}

export const homeRoute = {
  element: <Home />,
  loader,
};
