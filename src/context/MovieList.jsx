import React, { Component } from 'react'
import UserContext from './userContext'

export default class MovieList extends Component {
  static contextTypes = UserContext

  componentDidMount() {
    console.log('context', this.context)
  }

  render() {
    return (
      <UserContext.Consumer>
        {(currentUser) => <div>Movie List... {currentUser.name}</div>}
      </UserContext.Consumer>
    )
  }
}
