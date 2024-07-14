import Header from "./Header";

const Phone = () => {
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

  return (
    <div className="phone">
      <div className="phone-screen">
        <Header />
      </div>
      {/* <div>
        {phoneData[0].conversation.sender[0].map((el, index) => (
          <span key={index}>{el}</span>
          ))}
          </div>
          <div>
          {phoneData[0].conversation.sender[1].map((el, index) => (
            <span key={index}>{el}</span>
            ))}
            </div> */}
    </div>
  );
};

export default Phone;
