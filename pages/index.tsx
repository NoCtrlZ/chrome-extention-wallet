import React from 'react';
import Route from '../constants/route';
import Link from 'next/link';

interface AppState {
  path: string;
}

export default class Index extends React.Component<undefined, AppState> {
  render() {
    return (
      <div>
        <h1>Hello Next.js 👋</h1>
        <Link href={Route().about}>
          <a>About</a>
        </Link>
      </div>
    );
  }
}
