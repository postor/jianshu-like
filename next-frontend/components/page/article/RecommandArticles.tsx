import { FC } from "react"
import useAsyncLoading from "use-async-loading"
import { IArticle, loadRecommandArticles } from "../../../def"
import ArticleCard from "./ArticleCard"


const RecommandArticles: FC = () => {
  let [loading, articles] = useAsyncLoading([] as IArticle[], async () => await loadRecommandArticles())

  return <div className="recommand-articles">
    <div className="head">
      推荐阅读
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
      .recommand-articles {
        margin-left: 10px;
        padding: 10px;
        background: #fff;
      }

      li {
        padding: 0 0 10px;
      }

      .head {
        line-height: 20px;
        height: 20px;
        font-size: 16px;
        font-weight: 500;
        border-left: 4px solid #ec7259;
        margin-bottom: 10px;
        padding-left: 8px;
      }

    `}</style>
  </div>
}


export default RecommandArticles