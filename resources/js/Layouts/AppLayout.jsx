import Navbar from "@/Components/Navbar";
import React from "react";

export default function App({ children }){
    return (
        <html data-theme="bumblebee">
        <Navbar/>
        {children}
        </html>
    );
}