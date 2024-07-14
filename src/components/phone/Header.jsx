import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "../../assets/avatar.jpg";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Header = ({ data }) => {
  Header.propTypes = { data: PropTypes.object.isRequired };

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
