import { phoneData } from "../../data/data";
import PropTypes from "prop-types";

const Body = () => {
  const ReceivedMessage = ({ message, className }) => <p className={`received-message ${className}`}>{message}</p>;

  const SentMessage = ({ message, className }) => <p className={`sent-message ${className}`}>{message}</p>;

  const SentImages = ({ data }) => (
    <div className="sent-images slide-top3">
      {data[0].conversation.images.map((img, key) => (
        <img src={img} alt={img} key={key} />
      ))}
    </div>
  );

  const ServicesMessage = ({ data }) => (
    <div className="services-container slide-top5">
      {data.services.map((service, key) => (
        <div className="services-bubble" key={key}>
          <div>
            <input className="radio-btn" type="radio" name={service.service} />
            <label htmlFor={service.service}>{service.service}</label>
          </div>
          <span>{service.price}</span>
        </div>
      ))}
    </div>
  );

  ReceivedMessage.propTypes = { message: PropTypes.any.isRequired };
  SentMessage.propTypes = { message: PropTypes.any.isRequired };
  SentImages.propTypes = { data: PropTypes.any };
  ServicesMessage.propTypes = { data: PropTypes.any.isRequired };

  return (
    <div className="phone-body">
      <div className="received-messages-container">
        <ReceivedMessage className={"slide-top1"} message={phoneData[0].conversation.sender[0][0]} />
        <ReceivedMessage className={"slide-top2"} message={phoneData[0].conversation.sender[0][1]} />
      </div>
      <div className="sent-messages-container">
        <SentImages data={phoneData} />
        <SentMessage className={"slide-top3"} message={phoneData[0].conversation.recipient[0]} />
        <SentMessage className={`slide-top4`} message={phoneData[0].conversation.recipient[1]} />
      </div>
      <div className="received-messages-container">
        <ReceivedMessage className={'slide-top5'} message={phoneData[0].conversation.sender[1]} />
      </div>
      <ServicesMessage data={phoneData[0]} />
    </div>
  );
};

export default Body;
