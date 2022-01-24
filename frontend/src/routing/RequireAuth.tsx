import {ReactElement, useContext} from "react";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../App";

export default function RequireAuth({children} : {children: ReactElement<any, any>}) {
const {token} = useContext(AuthContext)
    return token ? children: <Navigate to="/login"/>
}