import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "../../assets/avatar.jpg";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Header = ({ data }) => {
  Header.propTypes = { data: PropTypes.object.isRequired };

  const styling = { sx: { display: "flex", justifyContent: "center", alignItems: "center", width: "1rem !important", minWidth: 0, color: "white", borderRadius: "100%", p: 1, px: "1rem", m: 0 } };

  return (
    <div className="contact-header">
      <div className="contact-info-container">
        <Button variant="text" className="btn" {...styling}>
          <KeyboardArrowLeftIcon />
        </Button>

        <img src={Avatar} alt="Samuel Green" />
        <div className="container-name-status">
          <span className="contact-name">{data[0].sender}</span>
          <span className="contact-status">{data[0].status}</span>
        </div>
      </div>
      <MoreVertIcon fontSize="small" />
    </div>
  );
};

export default Header;
