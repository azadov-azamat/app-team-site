import React from "react"
import Navbar from "../components/Navbar/index.jsx"
import Footer from "../components/Footer/index.jsx"

export default function Layout({children}) {

    return (
        <>
            <Navbar/>
            <main className={""}>
                {children}
            </main>
            <Footer/>
        </>
    )
}