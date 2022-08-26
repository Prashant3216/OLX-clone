import {Route, Routes } from "react-router-dom";

import { HomePage } from "./HomePage";
import { LoginWithEmail } from "./LoginWithEmail";
import { LoginWithPhone } from "./LoginWithPhone";

export default function AllRoutes(){
    return (<Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/login_with_phone"} element={<LoginWithPhone/>}/>
        <Route path={"/login_with_email"} element={<LoginWithEmail/>}/>
    </Routes>)
}