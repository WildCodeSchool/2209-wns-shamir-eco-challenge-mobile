import * as React from "react";
import ExpandingCards from "../../components/ExpandingCards";

import Challenge from "../../interfaces/Challenge";

interface Props {
  data: Array<Challenge>;
}

export default function Challenges({ data }: Props) {
  const [activeId, setActiveId] = React.useState<number>(1);
  const [showEcoGesture, setShowEcoGesture] = React.useState<Boolean>(false);

  const handleEcoGesture = (event: any) => {
    event.preventDefault();
    setShowEcoGesture((current) => !current);
  };
  const onClick = (id: number) => setActiveId(id);
  return (
    <div>
      <p>Challenges Page</p>
      {data.map((challenge) => (
        <div
          key={challenge.id}
          className={`panel ${activeId === challenge.id ? "active" : ""}`}
          onClick={() => onClick(challenge.id)}
          style={{ backgroundImage: `url(${challenge.image})` }}
        >
          <h3>{challenge.name}</h3>
          <button onClick={handleEcoGesture}>
            Voir les éco gestes à réaliser
          </button>
          {showEcoGesture === true ? (
            <ExpandingCards data={challenge.ecoGestures} />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}
