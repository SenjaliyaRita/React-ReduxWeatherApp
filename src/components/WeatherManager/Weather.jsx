import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import WeatherList from '../WeatherManager/WeatherList/WeatherList.jsx'
import SearchWeather from './SearchWeather.jsx'
import WeatherItem from '../WeatherManager/WeatherList/WeatherItem/WeatherItem.jsx'

export default class Weather extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
        <SearchWeather />
        <br/>
        <br/>
        <WeatherItem />
        </Col>
        <Col  md={6}>
        <br/>
        <br/>
        <WeatherList />
        </Col>
      </Row>
    )
  }
}
