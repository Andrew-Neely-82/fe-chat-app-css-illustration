import PropTypes from "prop-types";

export const SentImages = ({ data }) => (
  <div className="sent-images slide-top3">
    {data[0].conversation.images.map((img, key) => (
      <img src={img} alt={img} key={key} />
    ))}
  </div>
);
SentImages.propTypes = { data: PropTypes.any };
