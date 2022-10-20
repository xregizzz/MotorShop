import { GlobalStyle } from "./styles/global";

import car1 from "../src/assets/car1.png";
import car2 from "../src/assets/car2.png";
import car3 from "../src/assets/car3.png";
import car5 from "../src/assets/car5.png";
import car6 from "../src/assets/car6.png";
import car7 from "../src/assets/car7.png";
import car8 from "../src/assets/car8.png";
import car9 from "../src/assets/car9.png";
import car10 from "../src/assets/car10.png";
import car11 from "../src/assets/car11.png";
import car12 from "../src/assets/car12.png";
import ContainerCards from "./components/ContainerCard";
import ContainerAuction from "./components/ContainerAuction";
import Button from "./components/Button";

function App() {
  const arrayCars = [
    {
      img: car1,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car2,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car3,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },

    {
      img: car5,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car6,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car7,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car8,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car9,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car10,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car11,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car12,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
  ];

  const arrayAuction = [
    {
      timer: "01:58:00",
      img: car7,
      title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Rodrigo Tavares",
      KM: "0 KM",
      year: "2013",
      value: "R$ 100.500,00",
    },
    {
      timer: "01:58:00",
      img: car5,
      title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Rodrigo Tavares",
      KM: "0 KM",
      year: "2013",
      value: "R$ 78.500,00",
    },
    {
      timer: "01:58:00",
      img: car3,
      title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Tiago",
      KM: "0 KM",
      year: "2013",
      value: "R$ 78.500,00",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <ContainerAuction arrayTorender={arrayAuction} />
      <ContainerCards typeCard={"Carros"} arrayToRender={arrayCars} />
      <ContainerCards typeCard={"Motos"} arrayToRender={arrayCars} />
      <div>
        <h1>Teste</h1>
        <div>
          <Button>Teste Azul</Button>
          <Button whiteSchema>Teste Branco</Button>
        </div>
      </div>
    </>
  );
}

export default App;
