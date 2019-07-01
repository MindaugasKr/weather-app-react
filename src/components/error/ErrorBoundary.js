import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  // componentDidCatch(error, info) {
  // }

  render() {
    return this.state.hasError ? 
      (
        <div style={{height: '100vh', position: 'relative'}}>
          <h1 style={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            fontWeight: 100}}>
            {this.props.message}
          </h1>
        </div>
      )
      :
      this.props.children
  }
}
