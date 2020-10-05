import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IMGURL,IMGEXT } from 'config/api.js'
import { Label,Row,Col } from 'reactstrap'
import {  FetchWeatherListAction } from '../../../../actions/weatherActions'

class WeatherItem extends Component {

  componentDidUpdate() {
    const data = this.props
    if(data!=null ){
    this.props.fetchWeatherList(data.weather[0].coord)
    }
  }
  render () {
   
    const { weather } = this.props
    const today=new Date()
    const url=weather[0] !=null ? `${IMGURL}${weather[0].weather[0].icon}${IMGEXT}` : ''
    return (
      <>
      {weather.length > 0 && 
      <div className="title">
      <Row>
        <Col md={7}>
          <Label className="font-weight-bold font-size-big">{today.toLocaleDateString('en-us',{month:'short'})}  {today.toLocaleDateString('en-us',{day:'numeric'})}, {today.toLocaleString('en-us', {weekday:'long'})} ,{today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Label><br/>
          <Label className="font-weight-bold"><h2>{weather[0].name},{weather[0].sys.country}</h2></Label><br/> 
          <Row>
            <Col md={4}>
                  <img src={url} height="100px"/> 
            </Col>
            <Col md={8}>
            <h1>{weather[0].main.temp.toFixed(0)} °C</h1>
            </Col>
          </Row>
          <Label className="font-weight-bold font-size-big">Feels Like {weather[0].main.feels_like}°C {weather[0].weather[0].description}</Label><br/>
         
          
        </Col>
       <Col md={5}>
       <Label><b>Min :</b>  {weather[0].main.temp_min} °C</Label><br/>
       <Label><b>Max :</b>  {weather[0].main.temp_max} °C</Label><br/>
       <Label><b>Pressure :</b>  {weather[0].main.pressure} hPa</Label><br/>
       <Label><b>Humidity :</b>  {weather[0].main.humidity} %</Label><br/>
       <Label><b>Wind Speed :</b>  {weather[0].wind.speed} m/s</Label><br/>
       </Col>
      </Row></div> }
      
      </>
    )
  }
}


const mapStateToProps=(state)=>{ //store.getState()
  return{
      weather: state.weather
  }
}

function mapDispatchToProps (dispatch) {

  return {
    fetchWeatherList: (coord) => {
        dispatch(FetchWeatherListAction(coord))
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherItem)
