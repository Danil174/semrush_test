import Button from "../Button/Button.jsx";
import "./ButtonSubmit.css";

const ButtonSubmit = ({className, ...restProps}) => {
  return (
    <Button type="submit" className={`button-submit ${className}`} {...restProps}/>
  );
};

export default ButtonSubmit;
