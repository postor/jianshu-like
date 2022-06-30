import axios from "axios"

export interface IArticle {
  _id: string,
  title: string,
  desc: string,
  author: string,
  rating: number,
  comments: number,
  like: number,
  paid: number,
  content: string,
  image: string,
  updated: number,
  words: number,
}

export interface IWriter {
  _id: string,
  name: string,
  image: string,
  words: number,
  likes: number,
}

export async function loadWriters(): Promise<IWriter[]> {
  let res = await axios.get(apiPath('/api/user/random'))
  return res.data|| []
}



export async function loadArticles(pageSize = 20, updated = new Date().getTime()): Promise<IArticle[]> {
  let res = await axios.get(apiPath('/api/article'), {
    params: {
      pageSize,
      fields: [
        '_id',
        'title',
        'desc',
        'author',
        'rating',
        'comments',
        'like',
        'paid',
        'image',
        'updated',].join(','),
      sort: '-updated',
      query: JSON.stringify({ updated: { $lt: updated } })
    }
  })
  return res.data.rows || []
}


function apiPath(path: string) {
  return (process.env.API_BASE || 'http://localhost:3000') + path
}