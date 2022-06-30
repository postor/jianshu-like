import { FC } from "react"
import { IArticle } from "../../../def"
import IconNum from "./IconNum"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faComment, faGem, faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

const ArticleCard: FC<{ article: IArticle }> = ({ article }) => {
  let {
    _id,
    title,
    desc,
    author,
    rating,
    comments,
    like,
    paid,
    image,
  } = article
  return <div className="card">
    <div>
      <h2><Link href={`/article?id=${_id}`} ><a>{title}</a></Link></h2>
      <p>{desc}</p>
      <div className="info">
        <IconNum
          icon={<FontAwesomeIcon icon={faGem} />}
          num={rating}
          color="#ea6f5a"
        />
        <div>{author}</div>
        <IconNum
          icon={<FontAwesomeIcon icon={faComment} />}
          num={comments}
        />
        <IconNum
          icon={<FontAwesomeIcon icon={faHeart} />}
          num={like}
        />
        <IconNum
          icon={<FontAwesomeIcon icon={faAward} />}
          num={paid}
        />
      </div>
    </div>
    <div className="thumb">
      <Link href={`/article?id=${_id}`} ><a>
        <img src={image} />
      </a></Link>
    </div>
    <style jsx scoped>{`
    .card {
      position: relative;
      width: 100%;
      margin: 0 0 15px;
      padding: 15px 2px 20px 0;
      border-bottom: 1px solid #f0f0f0;
      word-wrap: break-word;
      display: flex;
      justify-content: space-around;
    }
    
    .card h2 a {
      font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }

    .card p {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }

    .thumb {
      flex-direction: column;
      justify-content: center;
    }

    .thumb img {
      width: 150px;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }


    .info {
      display: flex;      
      column-gap: 10px;
      color: #b4b4b4;
      font-size: 12px;
      font-weight: 400;
    }

    `}</style>
  </div>
}

export default ArticleCard