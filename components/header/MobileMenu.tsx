import clsx from 'clsx'
import { headerNavLinks } from 'data'
import React, { useState } from 'react'
import { Logo } from '../Logo'
import NavItem from '../nav/NavItem'

type Props = {
  scroll: boolean
}

const MobileMenu = ({ scroll }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={clsx(
          'relative mx-auto flex items-center justify-between  space-y-4 px-4 md:hidden',
          scroll && 'z-50  bg-white shadow-lg'
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
      <div className="absolute top-0 right-0 z-50 flex justify-end">
        <div
          className={clsx(
            'flex min-h-screen w-[18rem] flex-col items-start justify-start space-y-4 rounded-l-lg bg-white p-8 shadow-lg',
            open ? '' : 'hidden'
          )}
        >
          {(headerNavLinks || []).map((item, id) => (
            <NavItem key={id} {...item} close={() => setOpen(false)} />
          ))}
        </div>
        <div
          className={clsx(
            'absolute right-4 top-8 md:hidden',
            !open && 'hidden'
          )}
        >
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
    </>
  )
}

export default MobileMenu
