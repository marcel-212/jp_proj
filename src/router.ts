import { createBrowserRouter } from "react-router";
import Navbar from "./layout/Navbar";
import Home from './layout/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Navbar,
        children: [
            { index: true, Component: Home }
        ]
    }
])