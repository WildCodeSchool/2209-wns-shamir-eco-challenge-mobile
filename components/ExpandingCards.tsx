import * as React from "react";
import "../style.css";

interface Card {
  id: number;
  url: string;
  title: string;
  text: string;
}

interface Props {
  data: Array<Card>;
}


const ExpandingCards = ({ data }: Props) => {
  const [activeId, setActiveId] = React.useState<number>(1);

  const onClick = (id: number) => setActiveId(id);

  return (
    <div className="container">
      {data.map((card) => (
        <div
          key={card.id}
          className={`panel ${activeId === card.id ? "active" : ""}`}
          onClick={() => onClick(card.id)}
          style={{ backgroundImage: `url(${card.url})` }}
        >
          <h3>{card.title}</h3>
          {activeId === card.id ? (
            <div className="text">
              <p>{card.text}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
