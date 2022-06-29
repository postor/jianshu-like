import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont, faPenFancy } from '@fortawesome/free-solid-svg-icons'

const RightBar = () => {
  return <div className='right-bar'>
    <a className="style-mode-btn"><FontAwesomeIcon icon={faFont} /></a>
    <a className="btn log-in" id="sign_in" >登录</a>
    <a className="btn sign-up" id="sign_up" >注册</a>
    <a className="btn write-btn" >
      <FontAwesomeIcon icon={faPenFancy} />写文章
    </a>
    <style jsx scoped>{`
    .right-bar {
      position: absolute;
      top: 0;
      right: 0;
      height: 56px;
    }
    
    .btn {
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      white-space: nowrap;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857;
      border-radius: 4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    } 
    
    .write-btn {
      width: 100px;
      height: 40px;
      line-height: 24px;
      margin: 8px 12px 0;
      border-radius: 20px;
      font-size: 15px;
      color: #fff;
      background-color: #ea6f5a;
    }

    .sign-up {
      width: 80px;
      height: 38px;
      line-height: 24px;
      margin: 9px 5px 0 15px;
      border: 1px solid rgba(236,97,73,.7);
      border-radius: 20px;
      font-size: 15px;
      color: #ea6f5a;
      background-color: transparent;
    }
    
    .log-in {
      color: #969696;
      margin: 11px 6px 0 10px;
      font-size: 15px;
    }

    .style-mode-btn {
      line-height: 20px;
      padding: 17px 10px;
      font-size: 20px;
      color: #969696;
    }

    `}</style>
  </div>
}
export default RightBar