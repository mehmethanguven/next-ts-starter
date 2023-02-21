import clsx from 'clsx'
import { headerNavLinks } from 'data'
import React, { useState } from 'react'
import { Logo } from '../Logo'
import NavItem from '../nav/NavItem'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={clsx(
          'mx-auto flex items-center justify-between space-y-4 bg-white px-4 shadow-lg md:hidden'
        )}
      >
        <Logo />
        <div className="md:hidden">
          <button
            id="menu-btn"
            type="button"
            onClick={() => setOpen(!open)}
            className={clsx(
              'hamburger z-40 block focus:outline-none md:hidden',
              open ? 'open' : ''
            )}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          'mx-auto flex flex-col items-center justify-center space-y-4 bg-white px-4  pb-4 shadow-lg',
          open ? '' : 'hidden'
        )}
      >
        {(headerNavLinks || []).map((item, id) => (
          <NavItem key={id} {...item} close={() => setOpen(false)} />
        ))}
      </div>
    </>
  )
}

export default MobileMenu
