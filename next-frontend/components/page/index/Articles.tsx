
import { FC, useCallback, useEffect, useState } from "react"
import useAsyncLoading from "use-async-loading"
import { IArticle, loadArticles } from "../../../def"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"

const OFFSET_HEIGHT = 500


const Articles: FC<{ list: IArticle[] }> = ({ list }) => {
  let [loading, articles, error, dispatch] = useAsyncLoading(list)
  let [nomore, setNomore] = useState(list.length < 20)

  let loadMore = useCallback(() => {
    const pageSize = 10
    dispatch(async (articles) => {
      let loaded = await loadArticles(pageSize, articles[articles.length - 1].updated)
      if (loaded.length < pageSize) setNomore(true)
      return [
        ...list,
        ...loaded
      ]
    })
  }, [])

  useEffect(() => {
    if (loading || nomore || (typeof window === 'undefined')) return
    let throttle = 500, throttleTime = new Date().getTime()
    let cb = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - OFFSET_HEIGHT) {

        if (new Date().getTime() - throttleTime < throttle) return
        throttleTime = new Date().getTime()
        loadMore()
      }
    }
    window.addEventListener('scroll', cb)
    return () => window.removeEventListener('scroll', cb)
  }, [loading, nomore])

  return <div>
    {articles.map(x => <ArticleCard key={x._id} article={x} />)}
    {loading
      ? <Loading />
      : nomore
        ? <div className="center" >没有更多文章了</div>
        : <div className="center" ><a onClick={() => loadMore()}>加载更多</a></div>}
  </div>
}

export default Articles