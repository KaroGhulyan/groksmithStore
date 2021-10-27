import React from 'react';
import { StoreConsumer } from '../store-context/store-context';

const WithStoreService = () => (Wrapped) => {
  return (props) => (
    <StoreConsumer>
      {(storeService) => <Wrapped {...props} storeService={storeService} />}
    </StoreConsumer>
  );
};

export default WithStoreService;
