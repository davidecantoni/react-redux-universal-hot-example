import React, {Component, PropTypes} from 'react';
import {GoogleMap, Marker} from 'react-google-maps';

export default class Map extends Component {
  static propTypes = {
    filters: PropTypes.object,
    projects: PropTypes.object,
    changeLat: PropTypes.func.isRequired,
    changeLng: PropTypes.func.isRequired
  }

  changed() {
    console.log(this.refs.map.getZoom());
    this.props.changeLat(this.refs.map.getCenter().lat());
    this.props.changeLng(this.refs.map.getCenter().lng());
  }

  render() {
    const {filters, projects} = this.props;
    return (
      <GoogleMap containerProps={{
        ...this.props,
        style: {
          height: '500px',
          width: '500px'
        },
      }}
      ref="map"
      defaultZoom={14}
      defaultCenter={{lat: filters.lat, lng: filters.lng}}
      onDragend={::this.changed}>
        {projects.res.map((marker, index) => {
          const ref = `marker_${index}`;
          return (
            <Marker key={ref}
              ref={ref}
              title={marker.title}
              position={{lat: marker.lat, lng: marker.long}} />
          );
        })}
      </GoogleMap>
    );
  }
}
