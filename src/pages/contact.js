import React from "react"
import Layout from "../components/Layout"
import MyForm from '../components/MyForm'
import ContactStyles from '../styles/Contact.module.scss'
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <Layout>
      <div className={ContactStyles.content}>
      <Helmet>
                <title>Contato | Mateus S. Souza</title>
            </Helmet>
        <h2>
          Entre em contato
        </h2>
        <MyForm />
      </div>

    </Layout>
  )
}