import { AdContainer } from "./styled";
import car7 from "../../assets/car7.png";
import Button from "../../components/Button";
import UserAdvertiser from "../../components/UserAdvertiser";
import { Header } from "../../components/Header";
import { useState } from "react";
import ModalImage from "../../components/modalImage";
import { useNavigate } from "react-router-dom";


const Product = () => {
  const [imageSelected, setImageSelected] = useState("");

  const [OpenModalImage, setOpenModalImage] = useState(false);
  const openCloseModalImage = () => setOpenModalImage(!OpenModalImage);
  const navigate = useNavigate();

  return (
    <>
      {OpenModalImage && (
        <ModalImage image={imageSelected} openClose={openCloseModalImage} />
      )}

      <Header />
      <AdContainer>
        <div className="blue-bg"></div>
        <div className="container">
          <div className="left-col">
            <section className="showcase-img box">
              <figure
                onClick={() => {
                  openCloseModalImage();
                  setImageSelected(car7);
                }}
              >
                <img src={car7} alt="Imagem do veículo" />
              </figure>
            </section>

            <section className="showcase-vehicle-info box">
              <h6>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h6>
              <div className="info ">
                <div className="btn">
                  <Button
                    style={{ margin: "0 12px 0 0" }}
                    className="brandOpacity"
                  >
                    2013
                  </Button>
                  <Button className="brandOpacity">0 KM</Button>
                </div>
                <span>R$ 4000.000,00</span>
              </div>
              <Button className="brand1">Comprar</Button>
            </section>

            <section className="description box">
              <h6>Descrição</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                iure ea eius laborum delectus cupiditate corporis quo eaque
                voluptas nam aut illo officia magnam, quod excepturi fugit nobis
                quis necessitatibus?
              </p>
            </section>

            <section className="comments box">
              <h6>Comentários</h6>
              <ul>
                <li>
                  <UserAdvertiser color={"blue"} userName={"Jeferson Bruno"} />
                  <span className="time-passed"> • &nbsp; há 3 dias</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem minima distinctio esse in, fuga mollitia molestias
                    reprehenderit magnam vel alias velit labore, aperiam illo
                    ipsam ex molestiae praesentium, similique non?
                  </p>
                </li>

                <li>
                  <UserAdvertiser color={"blue"} userName={"Jeferson Bruno"} />
                  <span className="time-passed"> • &nbsp; há 3 dias</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem minima distinctio esse in, fuga mollitia molestias
                    reprehenderit magnam vel alias velit labore, aperiam illo
                    ipsam ex molestiae praesentium, similique non?
                  </p>
                </li>

                <li>
                  <UserAdvertiser color={"blue"} userName={"Jeferson Bruno"} />
                  <span className="time-passed"> • &nbsp; há 3 dias</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem minima distinctio esse in, fuga mollitia molestias
                    reprehenderit magnam vel alias velit labore, aperiam illo
                    ipsam ex molestiae praesentium, similique non?
                  </p>
                </li>

                <li>
                  <UserAdvertiser color={"blue"} userName={"Jeferson Bruno"} />
                  <span className="time-passed"> • &nbsp; há 3 dias</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem minima distinctio esse in, fuga mollitia molestias
                    reprehenderit magnam vel alias velit labore, aperiam illo
                    ipsam ex molestiae praesentium, similique non?
                  </p>
                </li>
              </ul>
            </section>
          </div>

          <div className="col-right">
            <section className="gallery box">
              <h6>Fotos</h6>
              <ul>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car7);
                    }}
                  >
                    <img src={car7} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car7);
                    }}
                  >
                    <img src={car7} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car7);
                    }}
                  >
                    <img src={car7} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car7);
                    }}
                  >
                    <img src={car7} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car7);
                    }}
                  >
                    <img src={car7} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car7);
                    }}
                  >
                    <img src={car7} alt="Imagem da galeria" />
                  </figure>
                </li>
              </ul>
            </section>

            <section className="owner box">
              <div className="ownerNameInitials">JE</div>
              <h6>Jeferson Bruno</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <Button
                isBig
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/profile-user/:name/");
                }}
              >
                Ver todos anúncios
              </Button>
            </section>
          </div>
        </div>
      </AdContainer>
    </>
  );
};

export default Product;
