import CenterContent from '../CenterContent'
import Logo from '../top-bar/Logo'
import MenuSearch from './menu-search/MenuSearch'
import RightBar from './right-bar/RightBar'
import ExpendButton from './ExpendButton'
const TopBar = () => {
  return <div className='top-bar' style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottom: '1px solid #f5f5f5',
    height: 55,
    background: '#fff',
  }}>
    <Logo />
    <CenterContent>
      <MenuSearch />
    </CenterContent>
    <RightBar />
    <ExpendButton />
  </div>
}
export default TopBar