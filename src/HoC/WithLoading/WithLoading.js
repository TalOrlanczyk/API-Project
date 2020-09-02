import React from 'react';
import LoadingComp from '../../Components/LoadingComp/LoadingComp';
function WithLoading(Component) {
  const WithLoadingComponent = ({ isLoading, ...props }) => {
    if (isLoading)  return <LoadingComp/>;
     return <Component {...props}/>;
  };
  return WithLoadingComponent;
}
export default WithLoading;