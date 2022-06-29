import Link from 'next/link'
import Search from './Search'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCompass, faCrown, faFont, faMobileScreen } from '@fortawesome/free-solid-svg-icons'

const MenuSearch = () => {
  const { pathname } = useRouter();

  return <>
    <ul className="nav">
      <li className="tab active">
        <Link href="/"><a className={pathname == "/" ? "active" : ""}>
          <span className="menu-text">首页</span>
          <i><FontAwesomeIcon className='icon' icon={faCompass} /></i>
        </a></Link>
      </li>
      <li className="tab ">
        <a id="web-nav-app-download-btn" className="app-download-btn" >
          <span className="menu-text">下载App</span>
          <i><FontAwesomeIcon className='icon' icon={faMobileScreen} /></i>
        </a>
      </li>
      <li className="tab ">
        <a >
          <span className="menu-text">会员</span>
          <i><FontAwesomeIcon className='icon' icon={faCrown} /></i>
        </a>
      </li>
      <li className="tab ">
        <a >
          <span className="menu-text">IT技术</span>
          <i><FontAwesomeIcon className='icon' icon={faCode} /></i>
        </a>
      </li>
      <li className="search">
        <Search />
      </li>
    </ul>
    <style jsx scoped>{`
      .nav li {
        float: left;
        margin-right: 10px;
        line-height: 20px;
      }      
      .nav li a {
        height: 56px;
        line-height: 26px;
        padding: 15px;
        color: #333;
        display: block;
        box-sizing: border-box;
      }
      .nav li a:hover {
        background-color: #f5f5f5;
      }      
      .nav li a.active,.nav li a.active:hover {
        color: #ea6f5a;
        background: none;
      }
      .nav:after {
        content: '';
        clear: both;
      }
    `}</style>
  </>
}
export default MenuSearch