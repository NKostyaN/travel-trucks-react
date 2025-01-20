const ImageCard = ({ card, imageClicked }) => {
  const handleClick = (data) => {
    imageClicked(data);
  };
  return (
    <div>
      <img
        src={card.thumb}
        alt="Truck photo"
        onClick={() => handleClick(card)}
      />
    </div>
  );
};

export default ImageCard;
