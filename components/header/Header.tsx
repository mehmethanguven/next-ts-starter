import MobileMenu from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import { useEffect, useState } from 'react'

const Header = () => {
  const [scroll, setScroll] = useState(false)

  const handleWindowScroll = () => {
    const height = window.scrollY
    const tresholdHeight = 50

    if (height > tresholdHeight) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)

    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return (
    <header>
      <DesktopMenu scroll={scroll} />
      <MobileMenu scroll={scroll} />
    </header>
  )
}
export default Header
