import React from 'react';
import Route from '../constants/route';
import Link from 'next/link';
import { Theme } from '@material-ui/core/styles';
import withStyles, {
  ClassNameMap,
  Styles,
} from '@material-ui/core/styles/withStyles';

interface AppProps {
  classes: ClassNameMap;
}

interface AppState {
  path: string;
}

class Index extends React.Component<AppProps, AppState> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.title}>Hello Next.js 👋</h1>
        <Link href={Route().about}>
          <a>About</a>
        </Link>
      </div>
    );
  }
}

const styles = () => ({
  title: {
    textAlign: 'center',
  },
});

export default withStyles(styles as Styles<Theme, any>)(Index);
