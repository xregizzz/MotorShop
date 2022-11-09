import { Routes, Route } from "react-router-dom"
import { Homepage } from '../pages/HomePage'
import Product from "../pages/Product"
import ProfileViewUser from "../pages/ProfileViewUser"
import ProfileViewAdmin from "../pages/ProfileViewAdmin"


const Router = () => {
    return (
        <>
        <Routes>
            <Route element={<Homepage/> } path='/'/>
            <Route element={<Product/> } path='/product-page/:id'/>
            <Route element={<ProfileViewUser/>} path="/profile-user/:name"/>
            <Route element={<ProfileViewAdmin/>} path="/profile-admin/:name"/>


        </Routes>
        </>
    )
}

export default Router