import { ReceivedMessage } from "./body/ReceivedMessage";
import { ServicesMessage } from "./body/ServicesMessage";
import { SentMessage } from "./body/SentMessage";
import { SentImages } from "./body/SentImages";
import PropTypes from "prop-types";

const Body = ({ phoneData }) => {
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
        <ReceivedMessage className={"slide-top5"} message={phoneData[0].conversation.sender[1]} />
      </div>
      <ServicesMessage data={phoneData[0]} />
    </div>
  );
};

Body.propTypes = { phoneData: PropTypes.any.isRequired };

export default Body;
