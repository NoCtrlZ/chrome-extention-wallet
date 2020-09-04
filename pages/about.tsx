import React from "react"
import Route from "../constants/route"
import Link from "next/link";

interface AppProps {}

interface AppState {
  path: string
}

export default class Index extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <h1>Hello About 👋</h1>
        <Link href={Route().index}>
         <a>Top</a>
        </Link>
      </div>
    )
  }
}
