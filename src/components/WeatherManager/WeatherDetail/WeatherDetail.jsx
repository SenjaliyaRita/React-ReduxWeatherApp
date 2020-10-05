import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FetchWeatherDateListAction } from 'actions/weatherActions'
import { Row, Col, Label, Button } from 'reactstrap'
import { IMGURL,IMGEXT } from 'config/api.js'
import { timeConverter,average } from 'utils/constants'
import { Link } from 'react-router-dom'
import WeatherChart from '../WeatherChart/WeatherChart.jsx'
import MyFancyComponent from '../WeatherChart/Google-map.jsx'

export class WeatherDetail extends Component{

    componentDidMount() {
        const data = this.props.match.params
        if(data!=null ){
            const dayData={ city : data.city, dt: data.dt}
                this.props.fetchWeatherDateList(dayData)
        }
      }

      renderWeather (cityData) {
        console.log(cityData)
        const city = cityData.city.name
        const temp = cityData.list.map(weather => weather.main.temp)
        const pres = cityData.list.map(weather => weather.main.pressure)
        const humi = cityData.list.map(weather => weather.main.humidity)
        const { lat, lon } = cityData.city.coord
    
        return (
            <>
          <Row Key="4">
              <Col md={6}>
                    <h4>{city}</h4>
              </Col>
              <Col md={6}>
                    
              </Col>
          </Row>
          <Row key="5">
            <Col md={6}><MyFancyComponent lon={ lon } lat={ lat } /></Col>
            <Col md={6}>
        <h4> Temperature {average(temp)}(°C)</h4><br/>
                <WeatherChart data={ temp } color="red" width={ 180 } height={ 80 } units ="°C" /><br/>
                <h4> Pressure {average(pres)}(hpa)</h4><br/>
                <WeatherChart data={ pres } color="green" width={ 180 } height={ 80 } units="hPa" /><br/>
                <h4> Humidity {average(humi)}(%) </h4><br/>
                <WeatherChart data={ humi } color="blue" width={ 180 } height={ 80 } units="%" /></Col>
          </Row>
          </>
        )}
      


    render(){
        const data = this.props.match.params
        const {weatherDateList } = this.props
        //console.log(weatherDateList[0])
        const today=new Date(timeConverter(data.dt)) 
        return(
            <>
            <br/>
            <Row key="1">
                <Col md={11}> <h2>{today.toLocaleString('en-us',{weekday:'short',day: 'numeric',month:'short',year:'numeric'})}</h2> </Col>
                <Col className="align-right"><Link to="/weather">Back</Link> </Col>
            </Row>
            <Row>
                <Col>
                
                
            <Row key="2">
                <Col md={2}>

                </Col>
                <Col md={10}>
                        <Row key="2.1">
                        <Col md={3}>
                            <span><h3>Morning</h3></span>
                        </Col>
                        <Col md={3}>
                            <span><h3>AfterNoon</h3></span>
                        </Col>
                        <Col md={3}>
                            <span><h3>Evening</h3></span>
                        </Col>
                        <Col md={3}>
                            <span><h3>Night</h3></span>
                        </Col>
                        </Row>
                </Col>
            </Row>
            <Row key="3">
                <Col md={2} className="mt-50">
                        <Label><h4> Temperature</h4></Label><br/>
                        <Label><h4> Feels Like </h4></Label>
                </Col>
                <Col md={10}>
                    <Row key="3.1">
                    {weatherDateList.length>0 &&  weatherDateList[0].list.map((weather,index) => (
                    
                    (index % 2 == 0 &&
                    <Col md={3} Key={weather.dt}>
                        <Label><h5>{weather.main.temp.toFixed(0)} °C</h5></Label><br/>
                        <Label><h5>{weather.main.feels_like.toFixed(0)} °C</h5></Label><br/>
                        <img src={`${IMGURL}${weather.weather[0].icon}${IMGEXT}`} height="100px"/> <br/>
                        <Label>
                            <h2> {new Date(weather.dt_txt).toLocaleTimeString('en-us',{hour:'numeric',minute:'numeric'})} </h2>
                        </Label><br/>
                        
                    </Col>)
                        ))
                    }
                    </Row>
                </Col>
         </Row>
         </Col>
            </Row>
         <hr/>
            { weatherDateList.length > 0  &&  
                this.props.weatherDateList.map(this.renderWeather) 
            } 
            <hr/>
             <Link to="/weather">Back</Link> <br/>
            </>
        )
    }

}

const mapStateToProps=(state)=>{ //store.getState()
    return{
        weatherDateList: state.weatherDateList
    }
}

function mapDispatchToProps (dispatch) {
return {
    fetchWeatherDateList: (dayData) => {
        dispatch(FetchWeatherDateListAction(dayData))
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherDetail)