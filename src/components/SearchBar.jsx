import React, { Component } from 'react'
import './Patient.css'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataName: ''
    }
  }

  handleSearch (e) {
    this.setState({ username: e.target.value })
  }

  handleGoClick () {
    if (!this.props.isFetchingUser) {
      this.props.actions.fetchdata(this.state)
    }
  }

  render () {
    return (
      <div className='searchbar-container'>
        <form  onSubmit={e => e.preventDefault()}>
          <input 
            className='searchBarInput'
            type='text'
            size='70'
            placeholder='Recherche Docteur'
            onChange={this.handleSearch.bind(this)}
            value={this.state.data} />
          <button
            className="searchButton"
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar