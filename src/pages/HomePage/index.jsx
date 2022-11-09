import { Main, SecundaryHeader } from "./styled";
import { H2Header, PHeader, ButtonHeader } from "./styled";

import { Header } from "../../components/Header";
import ContainerAuction from "../../components/ContainerAuction";
import ContainerCards from "../../components/ContainerCard";

import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import car7 from "../../assets/car7.png";
import car8 from "../../assets/car8.png";
import car9 from "../../assets/car9.png";
import car10 from "../../assets/car10.png";
import car11 from "../../assets/car11.png";
import car12 from "../../assets/car12.png";
import Button from "../../components/Button";
import { Footer } from "../../components/Footer";

export const Homepage = () => {
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
    <Main>
      <Header />
      <SecundaryHeader>
        <H2Header>
          <h2>Velocidade e experiência em um lugar feito para você</h2>
        </H2Header>
        <PHeader>
          <p>Um ambiente feito para você explorar o seu melhor</p>
        </PHeader>
        <ButtonHeader>
          <Button className="brand1">Leilão</Button>
          <Button className="brand1">Carros</Button>
          <Button className="brand1">Motos</Button>
        </ButtonHeader>
      </SecundaryHeader>

      <ContainerAuction arrayTorender={arrayAuction} />
      <ContainerCards arrayToRender={arrayCars} typeCard="Carros" />
      <ContainerCards arrayToRender={arrayCars} typeCard='Motos' />

      <Footer/>
    </Main>
  );
};
