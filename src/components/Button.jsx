import "../styles/button.css";

const Button = ({text, type}) => {
  return (
    <button className={type}>{text}</button>
  )
}

export default Button