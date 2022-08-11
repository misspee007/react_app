import "../styles/button.css";

const Button = ({children, type, onClick}) => {
  return (
    <button className={type} onClick={onClick}>{children}</button>
  )
}

export default Button