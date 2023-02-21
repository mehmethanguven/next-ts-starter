import { headerNavLinks } from 'data'
import { Logo } from '../Logo'
import NavItem from '../nav/NavItem'

export const DesktopMenu = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="mx-auto hidden max-w-5xl items-center justify-center md:flex md:flex-row md:justify-start">
        <div>
          <Logo />
        </div>

        <div className="flex h-16 items-center md:ml-12 md:space-x-8">
          {(headerNavLinks || []).map((item, id) => (
            <NavItem key={id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
