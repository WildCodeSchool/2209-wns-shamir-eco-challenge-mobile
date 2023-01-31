import EcoGesture from "./EcoGesture";
import Player from "./Player";

export default interface Challenge {
  id: number;
  name: string;
  image: string;
  playersList: Player[];
  startDate: string;
  endDate: string;
  status: string;
  ecoGesturesList: EcoGesture[];
}
