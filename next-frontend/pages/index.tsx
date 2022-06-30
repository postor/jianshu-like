import { useState } from "react"
import Articles from "../components/page/index/Articles"
import { IArticle, loadArticles } from "../def"

const Index = ({ list }) => {
  return <div className="with-side-content">
    <div className="main-content">
      <Articles list={list}/>
    </div>
    <div className="side-content">
      side
    </div>
  </div>
}

Index.getInitialProps = async () => {
  let list = await loadArticles()
  return { list }
}

export default Index