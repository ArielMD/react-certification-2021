import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GlobalContext } from '../../providers/Global';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { currentUser } = useContext(GlobalContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser) {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
