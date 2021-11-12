import React, { FC } from 'react';
import { useUser } from '../../hooks/user';
import StoreService from '../../services/store-service';
import { StoreContext } from '../store-context';


const WithStoreService = (Component:FC) => {
  const StoreServiceComponent = ({ ...props }) => {
    
    const storeService = new StoreService();
    const user = useUser(1)
    console.log(user);
    
    return (
      <StoreContext.Provider value={{ user, storeService }}>
        <Component {...props} />;
      </StoreContext.Provider>
    );
  };

  return StoreServiceComponent;
};

export default WithStoreService;
