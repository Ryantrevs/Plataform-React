import React, { useState} from 'react';

function useScope(initialState) {
    const [Scope, setScope] = useState(initialState);

    function AddScope(obj){
        console.log(Scope)
        setScope(obj);
    }

    function AddScopeToList(obj){
        console.log(obj);
        setScope([...Scope,obj]);
    }

    return [Scope, AddScope, AddScopeToList]
    
}

export default useScope;