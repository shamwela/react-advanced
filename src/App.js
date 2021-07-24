import React, { Component } from 'react'
import MoviePage from './context/MoviePage'
import UserContext from './context/userContext'

export default class App extends Component {
  state = {
    currentUser: { name: 'Sha' },
  }

  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <MoviePage />
      </UserContext.Provider>
    )
  }
}
