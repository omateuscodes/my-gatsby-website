import React from "react"
import { Helmet } from "react-helmet";
import Footer from "../components/Footer"
import Header from "../components/Header"
import '../styles/index.scss'
import LayoutStyles from './Layout.module.scss'

export default function Layout(props) {
    return (
        <div className={LayoutStyles.container}>
            <Helmet>
                <title>Mateus S. Souza</title>
            </Helmet>
            <Header />
            <div className={LayoutStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}