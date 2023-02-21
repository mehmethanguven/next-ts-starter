import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        width={0}
        height={0}
        sizes="100vh"
        src="/images/logo.svg"
        alt=""
        className="h-16 w-auto scale-50 "
      />
    </Link>
  )
}
