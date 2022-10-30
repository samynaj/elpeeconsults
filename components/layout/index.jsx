import React from 'react'
import './index.module.scss'
import Footer from '../Footer'
import Header from '../Header'

const Index = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                { 
                    children
                }
            </div>
            <Footer />
        </div>
    )
}

export default Index