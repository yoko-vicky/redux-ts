import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
