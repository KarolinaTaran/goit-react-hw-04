import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, imgUrl, closeModal }) => {
  const customStyles = {
    content: {
      width: "fit-content",
      height: "auto",
      margin: "auto",
    },
  };
  return (
    <ReactModal
      style={customStyles}
      className={css.modalWrapper}
      onRequestClose={closeModal}
      isOpen={isOpen}
      onClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
    >
      <img className={css.img} src={imgUrl} alt="Large image" />
    </ReactModal>
  );
};

export default ImageModal;
