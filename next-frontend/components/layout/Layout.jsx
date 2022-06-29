import CenterContent from './CenterContent'
import TopBar from './top-bar/TopBar'


const Layout = ({ children }) => {
  return <div style={{
    paddingTop: 56,
    position: 'relative'
  }}>
    <TopBar />
    <CenterContent>{children}</CenterContent>
  </div>
}
export default Layout