import React from 'react';

import {
  Dots,
  Levels,
  Sentry,
  Spinner,
  Squares,
  Digital,
  Bounce,
  Windmill,
} from 'react-activity';

function Loader(props) {
  const { type = '', align = 'center' } = props;
  const nProps = Object.assign(
    {
      color: '#6059EE',
    },
    props,
  );
  delete nProps.type;
  delete nProps.align;

  const loaderType = {
    dots: <Dots {...nProps} />,
    levels: <Levels {...nProps} />,
    sentry: <Sentry {...nProps} />,
    spinner: <Spinner {...nProps} />,
    squares: <Squares {...nProps} />,
    digital: <Digital {...nProps} />,
    bounce: <Bounce {...nProps} />,
    windmill: <Windmill {...nProps} />,
  };

  let loader = <Dots {...nProps} />;
  if (loaderType[type.toLowerCase()]) {
    loader = loaderType[type.toLowerCase()];
  }
  return (
    <React.Fragment>
      <div style={{ width: '100%', textAlign: align }}>{loader}</div>
    </React.Fragment>
  );
}

export default Loader;
