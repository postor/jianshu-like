import { FC } from "react"
import useAsyncLoading from "use-async-loading"
import { IArticle, IWriter, loadAuthorArticles } from "../../../def"
import Link from "next/link"
import ArticleCard from "./ArticleCard"


const AuthorArticles: FC<{ author: IWriter }> = ({ author }) => {
  let [loading, articles] = useAsyncLoading([] as IArticle[], async () => await loadAuthorArticles(author._id))

  return <div className="author-articles">
    <div className="info">
      <img src={author.image} />
      <div className="r">
        <div className="name">
          <span>{author.name}</span>
          <a className="follow">关注</a>
        </div>
        <div className="money">总资产{author.money}</div>
      </div>
    </div>
    {loading
      ? <div>loading...</div>
      : articles.length
        ? <ul>
          {articles.map(x => <li key={x._id}>
            <ArticleCard article={x} />
          </li>)}
        </ul>
        : <div>没有作品</div>}
    <style jsx scoped>{`
      .author-articles {
        margin-left: 10px;
        padding: 10px;
        background: #fff;
      }

      li {
        padding: 0 0 10px;
      }      

      .info {
        display: flex;
        column-gap: 6px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
      }

      .info .name {
        font-size: 16px;
        font-weight: 500;
        color: #404040;
      }

      .info .name a {
        color: #ec7259;
        background-color: #fff;
        font-size: 12px;
        padding: 2px 9px;
        border-radius: 50px;
        border: 1px solid #ec7259;
        margin-left: 10px;
      }

      .info .money {
        color: #969696;
        font-size: 12px;
        display: flex;
        column-gap: 6px;
        margin-top: 7px;
      }

      .info img {
        border-radius: 50%;
        border: 1px solid #eee;
        min-width: 50px;
        min-height: 50px;
        width: 50px;
        height: 50px;
      }
    `}</style>
  </div>
}


export default AuthorArticles