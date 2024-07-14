import PropTypes from "prop-types";

export const ReceivedMessage = ({ message, className }) => <p className={`received-message ${className}`}>{message}</p>;
ReceivedMessage.propTypes = { message: PropTypes.any.isRequired, className: PropTypes.string.isRequired };
