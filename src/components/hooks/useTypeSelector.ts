import { RootState } from './../../reducers/index';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const  useTypeSelector:TypedUseSelectorHook<RootState> = useSelector