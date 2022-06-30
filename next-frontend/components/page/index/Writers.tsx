import useAsyncLoading from "use-async-loading"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { IWriter, loadWriters } from "../../../def"

const Writers = () => {
  let [loading, writers, error, dispatch] = useAsyncLoading([] as IWriter[], loadWriters)

  return <div className="writers">
    <div className="head">
      <span>推荐作者</span>
      <a onClick={() => dispatch(loadWriters)}><FontAwesomeIcon icon={faArrowsRotate} /> 换一批</a>
    </div>
    {loading
      ? <div>loading...</div>
      : <ul>
        {writers.map(x => <li className="" key={x._id}>
          <img src={x.image} />
          <div className="r">
            <div className="follow">
              <span>{x.name}</span>
              <a>+关注</a>
            </div>
            <div className="info">写了{(x.words / 1000).toFixed(1)}k字{` · ${(x.likes / 1000).toFixed(1)}`}喜欢</div>
          </div>
        </li>)}
      </ul>}
    <style jsx scoped>{`
    .writers img {
      border: 1px solid #ddd;
      border-radius: 50%;
      width: 48px;
      height: 48px;
    }

    .writers .head {
      font-size: 14px;
      color: #969696;
      dispaly: flex;
      justify-content: space-between;
      display: flex;
    }

    .writers .head a {
      color: #969696;
    }

    .writers li {
      margin-top: 15px;
      display: flex;      
      column-gap: 5px;
    }

    .writers li .r {
      flex-grow: 1
    }

    .writers .follow {      
      display: flex;      
      justify-content: space-between;
      color: #333;
      font-size: 14px;
    }

    .writers .follow a {   
      color: #42c02e;
    }

    .writers .info {
      font-size: 12px;
      color: #969696;
      margin-top: 7px;
    }
  
  `}</style>
  </div>

}

export default Writers