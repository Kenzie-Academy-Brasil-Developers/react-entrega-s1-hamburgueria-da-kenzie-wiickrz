import "./style.css";
const variants = {
  primary: "green__button",
  secondary: "gray__button",
  remove: "remove__button",
};

const Button = ({ children, variant, fullWidth, onClick }) => {
  const fullWidthClass = fullWidth ? "fullWidth" : "";
  const classes = `buttonDefault ${variants[variant]} ${fullWidthClass}`;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
