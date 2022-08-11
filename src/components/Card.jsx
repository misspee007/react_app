import "../styles/card.css";

const Card = ({ icon, title, copy }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={icon} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
};

export default Card;
