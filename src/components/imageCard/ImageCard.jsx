const ImageCard = ({ pic, description }) => {
  return (
    <div>
      <img src={pic.urls.small} alt={pic.description} />
      <p>{description}</p>
    </div>
  );
};

export default ImageCard;
