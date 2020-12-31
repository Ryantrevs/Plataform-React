import React,{useContext} from 'react';

const ScopeContext = React.createContext([{
    titulo:"teste",
    id:"123",
    cards:[],
}]);



export default ScopeContext;