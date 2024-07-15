import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReceivedMessage } from "./body/ReceivedMessage";
import { ServicesMessage } from "./body/ServicesMessage";
import { SentMessage } from "./body/SentMessage";
import { SentImages } from "./body/SentImages";

const Body = ({ phoneData }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentStep < 6) {
      // Show loading bubble
      const loadingTimer = setTimeout(() => {
        setIsLoading(true);
      }, 1000);

      const timings = [4000, 4000, 6000, 2000, 5000, 2000]
      // Show actual message
      const messageTimer = setTimeout(() => {
        setIsLoading(false);
        setCurrentStep((prevStep) => prevStep + 1);
      }, timings[currentStep]);

      return () => {
        clearTimeout(loadingTimer);
        clearTimeout(messageTimer);
      };
    }
  }, [currentStep]);

  const Loading = ({ style }) => {
    return (
      <div className="stage" style={style}>
        <div className="dot-pulse"></div>
      </div>
    );
  };

  Loading.propTypes = { style: PropTypes.object.isRequired };

  const loadingStyle = {};

  return (
    <div className="phone-body">
      <div className="received-messages-container">
        {currentStep === 0 && isLoading ? <Loading style={loadingStyle} /> : currentStep >= 1 ? <ReceivedMessage className={"slide-top1"} message={phoneData[0].conversation.sender[0][0]} /> : null}
        {currentStep === 1 && isLoading ? <Loading style={loadingStyle} /> : currentStep >= 2 ? <ReceivedMessage className={"slide-top2"} message={phoneData[0].conversation.sender[0][1]} /> : null}
      </div>
      <div className="sent-messages-container">
        {currentStep === 2 && isLoading ? (
          <Loading style={loadingStyle} />
        ) : currentStep >= 3 ? (
          <>
            <SentImages data={phoneData} />
            <SentMessage className={"slide-top3"} message={phoneData[0].conversation.recipient[0]} />
          </>
        ) : null}
        {currentStep === 3 && isLoading ? <Loading style={loadingStyle} /> : currentStep >= 4 ? <SentMessage className={"slide-top4"} message={phoneData[0].conversation.recipient[1]} /> : null}
      </div>
      <div className="received-messages-container">{currentStep === 4 && isLoading ? <Loading style={loadingStyle} /> : currentStep >= 5 ? <ReceivedMessage className={"slide-top5"} message={phoneData[0].conversation.sender[1]} /> : null}</div>
      {currentStep === 5 && isLoading ? <Loading style={loadingStyle} /> : currentStep >= 6 ? <ServicesMessage data={phoneData[0]} /> : null}
    </div>
  );
};

Body.propTypes = { phoneData: PropTypes.array.isRequired };

export default Body;
