import { phoneData } from "../../data/data";
import PropTypes from "prop-types";

const Body = () => {
  const ReceivedMessage = ({ message }) => <p className="received-message">{message}</p>;
  const SentMessage = ({ message }) => <p className="sent-message">{message}</p>;
  const SentImages = ({ data }) => (
    <div className="sent-images">
      {data[0].conversation.images.map((img, key) => (
        <img src={img} alt={img} key={key} />
      ))}
    </div>
  );

  ReceivedMessage.propTypes = { message: PropTypes.any.isRequired };
  SentMessage.propTypes = { message: PropTypes.any.isRequired };
  SentImages.propTypes = { data: PropTypes.any };

  return (
    <div className="phone-body">
      <div className="received-messages-container">
        <ReceivedMessage message={phoneData[0].conversation.sender[0][0]} />
        <ReceivedMessage message={phoneData[0].conversation.sender[0][1]} />
      </div>
      <div className="sent-messages-container">
        <SentImages data={phoneData} />
        <SentMessage message={phoneData[0].conversation.recipient[0]} />
        <SentMessage message={phoneData[0].conversation.recipient[0]} />
        <SentMessage message={phoneData[0].conversation.recipient[1]} />
      </div>
      <div className="received-messages-container">
        <ReceivedMessage message={phoneData[0].conversation.sender[1]} />
      </div>
    </div>
  );
};

export default Body;
