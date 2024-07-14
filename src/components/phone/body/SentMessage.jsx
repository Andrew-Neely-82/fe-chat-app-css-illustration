import PropTypes from "prop-types";

export const SentMessage = ({ message, className }) => <p className={`sent-message ${className}`}>{message}</p>;

SentMessage.propTypes = { message: PropTypes.any.isRequired, className: PropTypes.string.isRequired };
