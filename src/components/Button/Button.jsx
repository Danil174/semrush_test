const Button = ({className, text, ...restProps}) => {
  return (
    <button type="button" className={className} {...restProps}>
      {text}
    </button>
  )
};

export default Button;
