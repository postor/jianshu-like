import Logo from '../top-bar/Logo'
import MenuSearch from './menu-search/MenuSearch'

const TopBar = () => {
  return <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
    <Logo />
    <MenuSearch />

  </div>
}
export default TopBar