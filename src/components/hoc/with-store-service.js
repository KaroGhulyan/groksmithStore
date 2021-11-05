import React from 'react';
import { useProducts } from '../../hooks/products';
import StoreService from '../../services/store-service';
import { StoreContext } from '../store-context';



const WithStoreService = (Component) => {
  
  const StoreServiceComponent = ({ ...props }) => {
    const storeService = new StoreService();
    const token = JSON.parse(localStorage.getItem('token'));
    const products = useProducts();
    
 
    return (
      <StoreContext.Provider value={{products,storeService}}>
        <Component {...props} />;
      </StoreContext.Provider>
    );
  };
  
  return StoreServiceComponent;
};

export default WithStoreService;
