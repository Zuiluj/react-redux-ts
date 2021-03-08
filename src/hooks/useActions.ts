import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

// A hook to condense a long line of dispatching a single action using only one actionCreator
export const useActions = () => {
    // Get access to dispatch func
    const dispatch = useDispatch();

    // Bind defined action creators so that dispatch call can be called directly
    // technical: everytime we call the bound actionCreators, the return value
    // from them will automatically be taken and provided to dispatch
    return bindActionCreators(actionCreators, dispatch);
};
