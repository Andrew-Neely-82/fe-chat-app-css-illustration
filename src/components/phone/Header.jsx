import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "../../assets/avatar.jpg";
import PropTypes from "prop-types";

const Header = ({ data }) => {
  Header.propTypes = { data: PropTypes.object.isRequired };

  return (
    <div className="contact-header">
      <div className="contact-info-container">
        <KeyboardArrowLeftIcon />
        <img src={Avatar} alt="Samuel Green" />
        <div className="container-name-status">
          <span className="contact-name">{data[0].sender}</span>
          <span className="contact-status">{data[0].status}</span>
        </div>
      </div>
      <div className="more-section">
        <MoreVertIcon fontSize="small" />
      </div>
    </div>
  );
};

export default Header;
