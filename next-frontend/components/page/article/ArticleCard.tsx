
import Link from "next/link"
import { FC } from "react"
import { IArticle } from "../../../def"

const ArticleCard: FC<{ article: IArticle }> = ({ article }) => {
  return <div className="card">
    <Link href={`/article?id=${article._id}`}><a>{article.title}</a></Link>
    <p>阅读{' '} {article.reads}</p>
    <style jsx scoped>{`
    .card a {
      display: block;
      font-size: 14px;
      line-height: 22px;
      color: #2d2d2d;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: nowrap;
      width: 228px;
    }

    .card p {
      font-size: 12px;
      color: #969696;
      margin: 0;
    }
    `}</style>
  </div>
}


export default ArticleCard