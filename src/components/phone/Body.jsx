import PropTypes from "prop-types";

const Body = () => {
  const phoneData = [
    {
      sender: "Samuel Green",
      status: "Available to Walk",
      conversation: {
        sender: [["That sounds great. I’d be happy with that.", "Could you send over some pictures of your dog, please?"], ["She looks so happy! The time we discussed works. How long shall I take her out for?"]],
        images: [],
        recipient: ["Here are a few pictures. She’s a happy girl!", "Can you make it?"],
      },
    },
  ];

  const ReceivedMessage = ({ message }) => <p className="received-message">{message}</p>;
  const SentMessage = ({ message }) => <p className="sent-message">{message}</p>;
  ReceivedMessage.propTypes = { message: PropTypes.string.isRequired };
  SentMessage.propTypes = { message: PropTypes.string.isRequired };
  
  return (
    <div className="phone-body">
      <ReceivedMessage message={phoneData[0].conversation.sender[0][0]} />

      <ReceivedMessage message={phoneData[0].conversation.sender[0][1]} />

      {/* images of dogs */}
      <SentMessage message={phoneData[0].conversation.recipient[0]} />
 
      <SentMessage message={phoneData[0].conversation.recipient[1]} />

      <ReceivedMessage message={phoneData[0].conversation.sender[1]} />
    </div>
  );
};
export default Body;
