import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `1000px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.lon }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lon }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    const { lon , lat }= this.props
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        lon={ lon } lat={ lat } 
      />
    )
  }
}

export default MyFancyComponent
/* eslint-disable no-undef */
/* global google */
// import React, { Component } from 'react'

// export default class MyFancyComponent extends Component {
//   componentDidMount () {
//     new google.maps.Map(this.map, {
//       zoom: 12,
//       center: {
//         lat: this.props.lat,
//         lng: this.props.lon
//       }
//     })
//   }

//   render () {
//     return (
//       <div ref="map" />
//     )
//   }
// }
// import React, { Component } from 'react'
// import { withGoogleMap,withScriptjs,GoogleMap, Marker } from "react-google-maps"

// const MyMapComponent  = withScriptjs(withGoogleMap((props) => {

//     return (
//       <GoogleMap
//         defaultZoom={12}
//         defaultCenter={{ lat: props.lat, lng: props.lon }}
//       >
//       {/* {this.props.isMarkerShown && <Marker position={{ lat: this.props.lat, lng: this.props.lon }} />} */}
//       <Marker position={{ lat: props.lat, lng: props.lon }} />
//       </GoogleMap>
//     )
// } ))

// export default MyMapComponent
