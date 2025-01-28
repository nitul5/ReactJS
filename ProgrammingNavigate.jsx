import React from 'react';
import { useNavigate } from 'react-router-dom'; // importing useNavigate hook

export function OrderDone(){
    const navigate = useNavigate(); // storing useNavigate() function in a variable as we know, it is a top level function

    return(
        <>
        <button onClick={()=> navigate('/order-summary')}>Place-Order</button> //navigate('We have to specify in which page we want to navigate by clicking on that button')
        </>
    )
}
