import { faGem } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"
import ReactMarkdown from "react-markdown"
import { IArticle, IWriter, loadArticle } from "../def"
import IconNum from '../components/page/index/IconNum'
import LeftIcons from "../components/page/article/DLeftIcons"
import AuthorArticles from "../components/page/article/AuthorArticles"
import RecommandArticles from "../components/page/article/RecommandArticles"

const Article: FC<{ article: IArticle, author: IWriter }> = ({ article, author }) => {

  return <div className="with-side-content">
    <div className="main-content">
      <h1>{article.title}</h1>
      <div className="info">
        <img src={author.image} />
        <div className="r">
          <div className="name">
            <span>{author.name}</span>
            <a className="follow">关注</a>
          </div>
          <div className="post">
            <IconNum color="#ec7259" icon={<FontAwesomeIcon icon={faGem} />} num={article.rating} />
            <span>{new Date(article.updated).toLocaleString()}</span>
            <IconNum icon={<span>字数</span>} num={article.words} />
            <IconNum icon={<span>阅读</span>} num={article.reads} />
          </div>
        </div>
      </div>
      <ReactMarkdown children={article.content} />
      <LeftIcons likes={article.like} paid={article.paid} />
    </div>
    <div className="side-content">
      <AuthorArticles author={author} />
      <div style={{ height: 10 }}></div>
      <RecommandArticles />
    </div>
    <style jsx global>{`
    body {
      background: #f9f9f9;
    }

    .main-content {
      background: #fff;
      padding: 0 10px;
    }

    `}</style>
    <style jsx scoped>{`
      h1 {
        font-size: 30px;
        font-weight: 700;
        word-break: break-word;
        margin-top: 32px;
      }

      .info {
        display: flex;
        column-gap: 6px;
        
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

      .info .post {
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


export async function getServerSideProps({ query }) {
  return {
    props: await loadArticle(query.id)
  }
}

export default Article