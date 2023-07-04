import Switch from "./Switch";

const InputLabel = ({ children }) => {
  return (
    <header className="input-label">
      <label>{children}</label>
      <Switch />
    </header>
  );
};

export default InputLabel;
