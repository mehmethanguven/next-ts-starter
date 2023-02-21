import React, { ReactNode } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
