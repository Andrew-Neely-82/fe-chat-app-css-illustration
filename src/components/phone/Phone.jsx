import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { phoneData } from "../../data/data";
import Header from "./Header";
import Body from "./Body";

const Phone = () => {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="camera-cutout" />
        <Header data={phoneData} />
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
