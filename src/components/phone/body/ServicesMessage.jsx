import PropTypes from "prop-types";

export const ServicesMessage = ({ data }) => (
  <div className="services-container slide-top5">
    {data.services.map((service, key) => (
      <div className="services-bubble" key={key}>
        <div>
          <input className="radio-btn" type="radio" name={service.service} />
          <label htmlFor={service.service}>{service.service}</label>
        </div>
        <span>{service.price}</span>
      </div>
    ))}
  </div>
);

ServicesMessage.propTypes = { data: PropTypes.any.isRequired };
