import React from "react"
import Navbar from "../components/Navbar/index.jsx"
import Footer from "../components/Footer/index.jsx"

export default function Layout({children}) {

    return (
        <>
            <div className="text-red-600">
                <marquee behavior="alternate" direction="" scrollamount="10">
                    <span className={"text-red-600"}>Sayt test rejimida ishlayabdi</span>
                </marquee>
            </div>
            <Navbar/>
            <main className={""}>
                {children}
            </main>
            <Footer/>
        </>
    )
}