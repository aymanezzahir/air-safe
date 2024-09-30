import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Error(){
    let err = useRouteError();
    console.log(err)
    return (
        <h1>there are error {err.message}</h1>
    )
}