import EcoGesture from "./EcoGesture";
import Player from "./Player";

export default interface Challenge {
  id: number;
  name: string;
  image: string;
  players: Player[];
  startDate: string;
  endDate: string;
  challengeStatus: string;
  gestures: EcoGesture[];
}
