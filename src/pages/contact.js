import React from "react"
import Layout from "../components/Layout"
import MyForm from '../components/MyForm'
import ContactStyles from '../styles/Contact.module.scss'

export default function Contact() {
  return (
    <Layout>
      <div className={ContactStyles.content}>
        <h2>
          Entre em contato
        </h2>
        <MyForm />
      </div>

    </Layout>
  )
}