import {redirect} from "react-router-dom"

export default async function autoReq(){
    let isLogined = JSON.parse(localStorage.getItem('isLoggedIn'));
    console.log(isLogined)
    if (!isLogined) {
        throw redirect("/login?message=You must log in first.")
    }
    return null
}