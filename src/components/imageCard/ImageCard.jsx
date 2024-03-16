import css from "./ImageCard.module.css";
const ImageCard = ({ pic, openModal }) => {
  const handleClick = () => {
    openModal(pic.urls.regular);
  };
  return (
    <div className={css.wrapper}>
      <img
        onClick={handleClick}
        className={css.img}
        src={pic.urls.small}
        alt={pic.slug}
      />
      <div className={css.textWrapper}>
        <p>
          <strong>Likes:</strong>
          {pic.likes}
        </p>
        <p>
          <strong>Description:</strong>
          {pic.description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
