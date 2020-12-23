import { classNames } from "css-hash";

function CardHeader(props) {
  const { children, className = "" } = props;
  const nProps = Object.assign({}, props, {
    className: classNames(
      `flex flex-row justify-between items-center`,
      `uppercase`,
      `font-bold`,
      `text-blue-dark`,
      `border-b`,
      `p-4`,
      `bg-gray-100`,
      "rounded-t",
      className
    ),
  });
  return <div {...nProps}>{children}</div>;
}

function CardBody(props) {
  const { children, className = "", paddingless = false } = props;
  const nProps = Object.assign({}, props, {
    className: classNames(
      `${paddingless ? "" : "p-6"}`,
      `flex flex-col`,
      className
    ),
  });
  delete nProps.paddingless;

  return <div {...nProps}>{children}</div>;
}

function CardFooter(props) {
  const { children, className = "", align } = props;
  let justify = "";

  switch (align) {
    case "left":
      justify = "start";
      break;
    case "center":
      justify = "center";
      break;
    case "right":
      justify = "end";
      break;
    default:
      justify = "start";
  }

  const nProps = Object.assign({}, props, {
    className: classNames(
      `flex flex-row`,
      `justify-${justify}`,
      `border-t`,
      `bg-gray-100`,
      "rounded-b",
      className
    ),
  });

  return <div {...nProps}>{children}</div>;
}

function Card(props) {
  const { children, className = "" } = props;

  const nProps = Object.assign({}, props);

  delete nProps.children;
  delete nProps.className;

  return (
    <div
      className={classNames(
        `bg-white`,
        `rounded`,
        `shadow`,
        `border`,
        className
      )}
      {...nProps}
    >
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
