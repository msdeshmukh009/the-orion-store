import "./input.css";

const Input = ({ type, placeholder, label, required, defaultValue, showError, helperText, disabled, changeHandler, name }) => {
  return (
    <div className="input-grp">
      <input
        className="form-field"
        type={type || "text"}
        placeholder={placeholder}
        value={defaultValue}
        required={required}
        disabled={disabled}
        onChange={changeHandler}
        name={name}
      />
      <label className={required ? "form-label form-label-required" : "form-label "}>{label}</label>
      <div className="txt-message text-danger">{showError && helperText}</div>
    </div>
  );
};

export { Input };
