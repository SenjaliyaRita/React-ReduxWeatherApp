import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IMGURL,IMGEXT } from 'config/api.js'
import { Row, Label, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { timeConverter } from 'utils/constants'

 class  WeatherDay extends Component {

  render(){
    const { weather }  = this.props.weather
    const { city } = this.props
    const today=weather !=null ?  new Date(timeConverter(weather.dt)) : new Date()
    const url=weather !=null ? `${IMGURL}${weather.weather[0].icon}${IMGEXT}` : ''
    return (
      <>
      {weather!=null &&
      
      <Link to={'/weather/' + weather.dt + '/'+ city }>
       <Row>
         <Col md={4} >
           <br/>
           <h3>{today.toLocaleString('en-us',{weekday:'short',day: 'numeric',month:'short'})}</h3>
        </Col>
        <Col md={2}>
            <img src={url} height="80px" className="center"/>
        </Col>
        <Col md={6}>
        <br/>
            <Label className="font-weight-bold"> {weather.weather[0].description} {' '} 
            {weather.temp.min.toFixed(0)} °C / {weather.temp.max.toFixed(0)} °C</Label>
       </Col>
       </Row>
       </Link>
    }
      
      </>
    )
  }
}
const mapStateToProps=(state)=>{ //store.getState()
  return{
    city: state.weather[0].name
  }
}

export default connect(mapStateToProps)(WeatherDay)

