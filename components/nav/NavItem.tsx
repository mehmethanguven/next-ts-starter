import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  title: string
  url: string
  className?: string
  close?: () => void
}

const NavItem = ({ title, url, className, close }: Props) => {
  const router = useRouter()
  return (
    <div
      className={clsx(
        'flex flex-col space-y-4 text-center md:text-left',
        className
      )}
    >
      <Link
        href={url}
        onClick={close}
        className={clsx(
          'hover:font-bold hover:text-strongCyan ',
          router.asPath === url && 'text-strongCyan'
        )}
        scroll={true}
      >
        {title}
      </Link>
    </div>
  )
}

export default NavItem
