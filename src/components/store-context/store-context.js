import React,{createContext}from 'react';

const { Provider:StoreProvider, Consumer:StoreConsumer } = createContext();

export { StoreProvider, StoreConsumer };
