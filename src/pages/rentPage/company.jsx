import React from 'react';
import { GetRent } from '../../api';

import { useLoaderData , defer , Await} from 'react-router-dom';
import Componet from './rentCard';
export async function companyLoading(){
    return defer({rent: GetRent()})
}
/*
* 1. you should get the functin in api file
* 2. and contain as function 
* 3. do same thing in company file
*/ 
function layoutFunc(data){
    return (
        <div className='grid'>
            {data.company.map((e)=> <Componet {...e} key={e.id} h={0} />)}
        </div>
    )
}

export default function Tickets(){
    const data = useLoaderData();
    return(
        <section className='plane'>
            <h2 className="title"  style={{marginTop:'20px'}}>company plane</h2>
        <div className="container" >
        <React.Suspense fallback={<div className="loadings"></div>}>
            <Await resolve={data.rent}>{layoutFunc}</Await>
          </React.Suspense>
        </div>
        </section>
    )
}