import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

import { FetchWeatherAction } from '../../actions/weatherActions'

class SearchWeather extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
  }

  onInputChange = event => this.setState({ term: event.target.value })

  onFormSubmit = event => {
    event.preventDefault()

    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render () {
    return (
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange } />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  //return bindActionCreators({ fetchWeather }, dispatch)
  return {
    fetchWeather: (city) => {
        dispatch(FetchWeatherAction(city))
        //dispatch(fetchWeatherListAction(city))
    }
    }
}

export default connect(null, mapDispatchToProps)(SearchWeather)
