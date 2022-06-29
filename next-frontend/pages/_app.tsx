import Layout from '../components/layout/Layout'
import "./app.css"

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}


export default MyApp