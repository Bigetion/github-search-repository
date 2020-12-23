import { classNames } from "css-hash";

function Input(props) {
  const { className, size = "md", rounded, shadowed, fullWidth } = props;

  const nProps = Object.assign({}, props);
  delete nProps.className;
  delete nProps.size;
  delete nProps.rounded;
  delete nProps.shadowed;
  delete nProps.fullWidth;

  return (
    <input
      className={classNames(
        fullWidth && "w-full",
        rounded && "rounded",
        shadowed && "shadow-lg",
        `text-${size}`,
        "focus:outline-none",
        "focus:shadow-outline",
        "py-2",
        "px-4",
        className
      )}
      {...nProps}
    />
  );
}

export default Input;
