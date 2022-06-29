import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Search = () => {
  return <div className="search">
    <input type="text"
      name="q" id="q" placeholder="搜索"
      className="search-input" />
    <a className="search-btn" >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </a>
    <style jsx scoped>{`
      .search {
        float: left;
        position: relative;
        padding-top: 7px;
      }
      .search-input {
        padding: 0 40px 0 20px;
        height: 38px;
        font-size: 14px;
        border: 1px solid #eee;
        border-radius: 40px;
        background: #eee;
        
      }

      .search-btn {
        position: absolute;
        right: 14px;
        top: 17px;
      }

      .search-btn,.search-input {
        transition: all .5s;
        -moz-transition: width .5s;
        -webkit-transition: width .5s;
        -o-transition: width .5s;
        transition-delay: .1s;
        -moz-transition-delay: .1s;
        -webkit-transition-delay: .1s;
        -o-transition-delay: .1s;
      }
    `}</style>
  </div>
}
export default Search