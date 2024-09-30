import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router'
import NewLetter from './newLetter'
import IsLoggin from '../context'
export default function Layout(){
    let isDefault = true;
    if (localStorage.getItem("dark") !== null || undefined) {
        isDefault = JSON.parse(localStorage.getItem("dark"));
    }
    let [darkMode , setDarkMode] = useState(isDefault)
    return(
        <IsLoggin>
        <Header
        dark={[darkMode , setDarkMode]}
        
        />
        <Outlet context={darkMode}/>
        <NewLetter />
        <Footer/>
        </IsLoggin>
    )
}