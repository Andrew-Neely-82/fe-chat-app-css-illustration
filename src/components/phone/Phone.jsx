import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Header from "./Header";
import Body from "./Body";

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
        <div className="camera-cutout" />

        <Header data={phoneData}/>
        <Body />
        <div className="message-box">
          <input type="text" placeholder="Type a message..." />
          <button>
            <NavigateNextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
