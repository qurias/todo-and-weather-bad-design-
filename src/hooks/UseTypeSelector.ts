import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypeSelector;
