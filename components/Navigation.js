const { default: Link } = require("next/link")

const Navigation = props => {

  return (
    <div style={{
      height: "100px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}>
      <Link src="/index">public</Link>
      <Link src="/component">component</Link>
      <Link src="/server">server</Link>
      <Link src="/static">static</Link>
    </div>
  )
}

export default Navigation