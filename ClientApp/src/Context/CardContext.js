import React,{useContext, useState} from 'react';

const CardContext = React.createContext({
    id:"",
    title:"",
    describe:"",
    percentage:0,
    conclude:false
});

export default CardContext;