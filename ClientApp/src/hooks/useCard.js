import React, { useState} from 'react';

function useCard(initialState) {
    const [infoCard, setCard] = useState(initialState);

    function AddCard(obj){
        console.log(infoCard)
        console.log(obj)
        setCard(obj);
    }

    return [infoCard, AddCard]
    
}

export default useCard;