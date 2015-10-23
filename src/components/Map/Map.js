import React, {Component, PropTypes} from 'react';
import {GoogleMap, Marker} from 'react-google-maps';

export default class Map extends Component {
  static propTypes = {
    filters: PropTypes.object,
    projects: PropTypes.object,
    load: PropTypes.func.isRequired,
    changeZoom: PropTypes.func.isRequired,
    changeLat: PropTypes.func.isRequired,
    changeLng: PropTypes.func.isRequired
  }

  dragend() {
    this.props.changeLat(this.refs.map.getCenter().lat());
    this.props.changeLng(this.refs.map.getCenter().lng());
    this.props.load(this.props.filters);
  }

  zoomChanged() {
    this.props.changeZoom(this.refs.map.getZoom());
    this.props.load(this.props.filters);
  }

  render() {
    const {filters, projects} = this.props;
    return (
      <GoogleMap containerProps={{
        ...this.props,
        style: {
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: '0px',
          left: '0px'
        },
      }}
      ref="map"
      defaultZoom={filters.zoom}
      defaultCenter={{lat: filters.lat, lng: filters.lng}}
      onDragend={::this.dragend}
      onZoomChanged={::this.zoomChanged}>
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
