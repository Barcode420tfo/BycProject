const Button = ({ title, buttonType = "solid", href = "#", className = "" }) => {
  const variantClass =
    buttonType === "outline" ? "button button-outline" : "button button-solid";

  return (
    <a className={`${variantClass} ${className}`.trim()} href={href}>
      {title}
    </a>
  );
};

export default Button;
