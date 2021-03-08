import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useState } from 'react';

import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    // Once 'searchRepositories; is called, it will
    // dispatch the action.
    const { searchRepositories } = useActions();
    // consume state from redux store. Mind that this is
    // originally 'useSelector' hook but for TS to know
    // what is the structure of data that we have in
    // our store, we needed to create a custom hook
    // that 'RootState' that has a defined interface
    const { data, error, loading } = useTypedSelector(
        (state) => state.repositories
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Equivalent to:
        // dispatch(actionCreators.searchRepositories(term))
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error &&
                !loading &&
                data.map((name) => <div key={name}> {name} </div>)}
        </div>
    );
};

export default RepositoriesList;
