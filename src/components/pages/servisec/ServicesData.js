import Car from "../../../assets/images/Car.png"
import Car2 from "../../../assets/images/Car2.png"
import Plane from "../../../assets/images/Plane.png"
import Plane2 from "../../../assets/images/Plane2.png"
import Train from "../../../assets/images/Train.png";
import Train2 from "../../../assets/images/Train2.png";
import truck from "../../../assets/icons/truck.svg";
import plane from "../../../assets/icons/plane.svg";
import train from "../../../assets/icons/train.svg";

export const ServicesData = [
  {
    id: "1",
    title: "ТРАНСПОРТНЫЕ ПЕРЕВОЗКИ",
    duration: "от 3 до 7 дней",
    imageFront: Car,
    imageBack: Car2,
    icon: truck,
  },
  {
    id: "2",
    title: "АВИА ПЕРЕВОЗКИ",
    duration: "от 1 до 3 дней",
    imageFront: Plane,
    imageBack: Plane2,
    icon: plane,
  },
  {
    id: "3",
    title: "ЖЕЛЕЗНО-ДОРОЖНЫЕ ПЕРЕВОЗКИ",
    duration: "от 2 до 5 дней",
    imageFront: Train,
    imageBack: Train2,
    icon: train,
  },
];
