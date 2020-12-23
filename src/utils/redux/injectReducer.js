import React from 'react';

import store from './store';

const injectReducer = (key, reducer) => (WrappedComponent) => {
  const Extended = (props) => {
    store.injectReducer(key, reducer);
    return <WrappedComponent {...props} />;
  };
  return Extended;
};

export default injectReducer;
