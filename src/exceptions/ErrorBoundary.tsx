import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { NotFoundException } from '@/exceptions/NotFoundException';
import { UnregisterCallback } from 'history';
import Error404 from '@/pages/Error404';

type State = {
  error: number | null;
};

type Props = RouteComponentProps & {
  children: React.ReactNode;
};

class ErrorBoundary extends Component<Props, State> {
  state = {
    error: null,
  };

  unregister: UnregisterCallback;

  componentDidMount(): void {
    const { history } = this.props;

    this.unregister = history.listen(() => {
      if (this.state.error !== null) {
        this.setState({ error: null });
      }
    });
  }

  componentWillUnmount = this.unregister;

  static getDerivedStateFromError(error: Error) {
    // Can be extended
    if (error instanceof NotFoundException) {
      return { error: 404 };
    }

    return { error: null };
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error === 404) {
      return <Error404 />;
    } else {
      return children;
    }
  }
}

export default withRouter(ErrorBoundary);
