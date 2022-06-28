import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return <Link href="/">
    <a style={{
      position: 'absolute',
      top: 0,
      left: 0
    }}>
      <Image
        src="/images/logo.png"
        width={100}
        height={56}
        alt="Nav logo" />
    </a>
  </Link>
}
export default Logo