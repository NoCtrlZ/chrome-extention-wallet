import React from "react"
import Top from "../components/Top"
import About from "../components/About"

interface AppProps {}

interface AppState {
  path: string
}

export default class Index extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      path: '/'
    }
  }

  setPath(path: string): void {
    this.setState({path: path})
  }

  render() {
    const { path } = this.state
    return (
      <div>
        <h1>Hello Next.js 👋</h1>
        <p onClick={() => this.setPath("/")}>Top</p>
        <p onClick={() => this.setPath("/about")}>About</p>
        <p>{path}</p>
        {path === '/' ? <Top /> : <About />}
      </div>
    )
  }
}
