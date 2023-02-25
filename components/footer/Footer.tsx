import { footerNavLinks, socialLinks } from 'data'
import { Logo } from '../Logo'
import NavItem from '../nav/NavItem'
import SocialItem from './SocialItem'

const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-900 py-4 shadow-lg">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between text-white md:flex-row">
          <div className="hidden md:block">
            <Logo />
          </div>

          {/* <!-- Container for Menus & Social --> */}
          <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
            {/* <!-- Menus --> */}
            <div className="grid max-w-lg grid-cols-1 space-y-4 pt-2 md:ml-24 md:grid-cols-3 md:gap-x-8 md:space-y-0">
              {/* <!-- Menu 1 --> */}
              {(footerNavLinks || []).map((item, id) => (
                <div key={id}>
                  <NavItem {...item} className="text-white" />
                </div>
              ))}
            </div>
            {/* <!-- Social Icons --> */}
            <div className="flex w-32 items-center justify-between py-1">
              {(socialLinks || []).map((item, id) => (
                <SocialItem key={id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
