import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { useProducts } from '../../hooks/products';
import StoreService from '../../services/store-service';
import { StoreContext } from '../store-context';


const WithStoreService = (Component:FC) => {
  const StoreServiceComponent = ({ ...props }) => {
    
    const storeService = new StoreService();
    const history = useHistory();
    const products = useProducts();

    return (
      <StoreContext.Provider value={{ products, storeService }}>
        <Component {...props} />;
      </StoreContext.Provider>
    );
  };

  return StoreServiceComponent;
};

export default WithStoreService;
