import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import '../styles/index.scss'
import LayoutStyles from './Layout.module.scss'

export default function Layout(props) {
    return (
        <div className={LayoutStyles.container}>
            <Header />
            <div className={LayoutStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}