const ExpendButton = () => {

  return <>
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <style jsx scoped>{`
    .navbar-toggle {
      float: left;
      height: 38px;
      padding: 11px 10px;
      margin-top: 9px;
      position: relative;
      margin-right: 15px;
      margin-bottom: 8px;
      background-color: transparent;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .navbar-toggle .icon-bar {
      display: block;
      width: 22px;
      height: 2px;
      border-radius: 1px;
      background-color: #888;
    }

    `}</style>
  </>
}

export default ExpendButton