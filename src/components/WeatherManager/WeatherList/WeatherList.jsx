import React, { Component } from 'react'
import { connect } from 'react-redux'
import  WeatherDay from './WeatherItem/WeatherDay.jsx'

class WeatherList extends Component {

  render () {
    const { weatherList} = this.props
    
    return (
      <>
      {weatherList.length>0 && 
       weatherList[0].map((weather,index) => (
         <WeatherDay key={index} weather={{weather}}/>
      ))
      }
      </>
    )
  }
}

const mapStateToProps=(state)=>{ //store.getState()
  return{
    weatherList: state.weatherList,
  }
}

export default connect(mapStateToProps)(WeatherList)
