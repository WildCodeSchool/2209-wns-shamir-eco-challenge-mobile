import Card from "./Card";
import Players from "./Players";

export default interface Challenge {
  id: number;
  name: string;
  image: string;
  playersList: Players[];
  startDate: Date;
  endDate: Date;
  ecoGestures: Card[];
}
