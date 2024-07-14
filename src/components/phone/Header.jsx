import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "../../assets/avatar.jpg";
import { Button } from "@mui/material";

const Header = () => {
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
    <div className="contact-header">
      <div className="contact-info-container">
        <Button
          variant="text"
          className="btn"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "1rem !important",
            minWidth: 0,
            color: "white",
            borderRadius: "100%",
            p: 1,
            px: 2.5,
            m: 0,
          }}>
          <ArrowBackIosNewIcon />
        </Button>

        <img src={Avatar} alt="Samuel Green" />
        <div className="container-name-status">
          <span className="contact-name">{phoneData[0].sender}</span>
          <span className="contact-status">{phoneData[0].status}</span>
        </div>
      </div>
      <MoreVertIcon />
    </div>
  );
};
export default Header;
