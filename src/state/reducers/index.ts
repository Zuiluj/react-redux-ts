import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
    repositories: repositoriesReducer,
});

export default reducers;

// Tell TypeScript that this is the type of data inside our redux store
export type RootState = ReturnType<typeof reducers>;
