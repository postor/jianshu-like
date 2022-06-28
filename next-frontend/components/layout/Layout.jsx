import CenterContent from './CenterContent'
import TopBar from './top-bar/TopBar'
CenterContent

const Layout = ({ children }) => {
  return <div style={{
    paddingTop: 56,
    position: 'relative'
  }}>
    <TopBar />
    <CenterContent>{children}</CenterContent>
    
    <style jsx global>{`html,body { margin:0;padding:0;}`}</style>
  </div>
}
export default Layout