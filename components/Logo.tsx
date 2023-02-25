import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        width={0}
        height={0}
        sizes="100vh"
        src="/images/logo.png"
        alt=""
        className="h-auto w-auto scale-75"
      />
      <span>Merkezsoft</span>
    </Link>
  )
}
