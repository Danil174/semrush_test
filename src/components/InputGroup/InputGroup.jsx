import './InputGoup.css';

const InputGoup = (props) => {
  const {name, isRequired, type, labelText, data} = props;
  return (
    <label className="input-group">
      <span className="label">{labelText}</span>
      <input type={type} id={name} {...data} required={isRequired} />
    </label>
  );
}

export default InputGoup;
