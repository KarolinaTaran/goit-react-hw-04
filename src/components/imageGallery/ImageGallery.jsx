import ImageCard from "../imageCard/ImageCard";

const ImageGallery = ({ pics }) => {
  if (!Array.isArray(pics) || pics.length === 0) {
    return null;
  }

  return (
    <ul>
      {pics.map((pic) => (
        <li key={pic.id}>
          <div>
            <ImageCard pic={pic} description={pic.description} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
