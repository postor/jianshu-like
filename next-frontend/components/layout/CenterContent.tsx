const CenterContent = ({ children }) => {
  return <div className="cc">{children}
    <style jsx scoped>{`
    .cc {
      width: 960px;
      margin: 0 auto;
    }

    @media screen and (max-width: 1080) {
      .cc {
        width: 750px;
      }
    }

    `}</style>
  </div>
}

export default CenterContent