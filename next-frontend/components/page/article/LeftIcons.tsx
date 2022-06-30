import { faQrcode, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"
import { Portal } from 'react-portal'

const LeftIcons: FC<{ likes: number, paid: number }> = ({ likes, paid }) => {
  return <Portal node={document && document.getElementById('portal')}>
    <div className="cc" style={{
      position: 'relative',
      height: 0
    }}>
      <div style={{
        position: 'absolute',
        width: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <ul style={{
          width: 72,
          marginLeft: '-72px',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
        }}>
          <li>
            <b>
              <FontAwesomeIcon icon={faThumbsUp} />
            </b>
            <span>{likes}赞</span>
          </li>
          <li>
            <b>
              赏
            </b>
            <span>{paid}赞赏</span>
          </li>
          <li>
            <b>
              <FontAwesomeIcon icon={faQrcode} />
            </b>
            <span>更多好文</span>
          </li>
        </ul>
      </div>
      <style jsx scoped>{`
      

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        row-gap: 5px;
        color: #969696;
      }

      li b {
        font-weight: normal;
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        line-height: 60px;
        font-size: 28px;
        background: #fff;        
      }

      `}</style>
    </div>
  </Portal>
}


export default LeftIcons