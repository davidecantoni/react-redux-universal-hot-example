import React, {Component, PropTypes} from 'react';
import {GoogleMap, Marker, /*InfoWindow*/} from 'react-google-maps';

export default class Map extends Component {
  static propTypes = {
    map: PropTypes.object,
    projects: PropTypes.object,
    updateMap: PropTypes.func.isRequired,
    onUpdateMap: PropTypes.func.isRequired
  }

  //TODO: this logic should be handled on the api
  agg(km) {
    const sizes = [5000, 1250, 156, 39.1, 4.89, 1.22, 0.153, 0.038, 0.004];

    let level = 0;
    let base = 1000;
    sizes.map((item, index) => {
      const temp2 = km / item - 8;
      if (Math.abs(temp2) < base) {
        base = Math.abs(temp2);
        level = index + 1;
      }
    });
    return level;
  }

  calculate() {
    const bounds = this.refs.map.getBounds();
    const distance = google.maps.geometry.spherical.computeDistanceBetween(bounds.getNorthEast(), bounds.getSouthWest());

    this.props.updateMap({
      lat: this.refs.map.getCenter().lat(),
      lng: this.refs.map.getCenter().lng(),
      zoom: this.refs.map.getZoom(),
      distance: distance / 2000,
      agg: this.agg(distance / 1000)
    });

    // trigger parent action
    this.props.onUpdateMap();
  }

  render() {
    const {map, projects} = this.props;
    return (
      <GoogleMap containerProps={{
        ...this.props,
        style: {
          height: 'calc(100% - 55px)',
          width: '100%',
          position: 'absolute',
          bottom: '0',
          left: '0'
        },
      }}
      ref="map"
      defaultZoom={map.zoom}
      defaultCenter={{lat: map.lat, lng: map.lng}}
      onDragend={::this.calculate}
      onZoomChanged={::this.calculate}>
        {projects && projects.res && projects.res.length > 0 &&
          projects.res.map((marker, index) => {
            const ref = `marker_${index}`;
            return (
              <Marker key={ref}
                ref={ref}
                title={marker.title}
                icon="https://www.propertyfinder.ae/img/icons/google-maps-pin.png"
                position={{lat: marker.lat, lng: marker.long}} />
            );
          })
        }
        {projects && projects.clusters && projects.clusters.length > 0 &&
          projects.clusters.map((marker, index) => {
            const ref = `marker_cluster_${index}`;
            return (
              <Marker key={ref}
                ref={ref}
                title={marker.title}
                label={marker.count.toString()}
                icon="https://www.propertyfinder.ae/img/icons/google-maps-pin-sa.png"
                position={{lat: marker.lat, lng: marker.long}} />
            );
          })
        }
      </GoogleMap>
    );
  }
}
