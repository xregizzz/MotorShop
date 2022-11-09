import Modal from "../modal";

const ModalImage = ({ image, openClose }) => {

  return (
    <>
      <Modal
        headerTitle={"Imagem do veículo"}
        closeModal={openClose}
        HeaderBody={
          <>
            <figure
              style={{
                width: "100%",
                backgroundColor: "var(--grey7)",
                height: "239px",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={image}
                alt=""
              />
            </figure>
          </>
        }
      />
    </>
  );
};
export default ModalImage;
