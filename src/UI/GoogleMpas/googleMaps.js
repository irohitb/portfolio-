import GoogleMapReact from 'google-map-react';

import React, { Component } from 'react';
import "./googleMaps.css"


const AnyReactComponent = ({ text }) => <div>{ text }</div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 25.249557, lng: 51.474382 },
    zoom: 11
  }

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: { lat: 25.249557, lng: 51.474382 },
      map,
      title: 'Hello World!'
    });
  }

render() {
    return (
        <div style={{ height: '425px', width: '100%' }}>
        <GoogleMapReact

        bootstrapURLKeys={{ key: 'AIzaSyAGGARfcMXYYlndVue3rq3PY09TBFA0IfU' }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}>
          <div className="mapmarker">
          <AnyReactComponent
            lat={ 25.249557 }
            lng={ 51.474382}
        
          />
          
              </div>
        </GoogleMapReact>
      </div>
    )
  }
}

