/**
 * Created by semianchuk on 23.04.16.
 */

var React = require('react');
var config = require('./../config');
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var Steps = require('./steps');

var FotoFolder = React.createClass({
    getInitialState(){
        return {
            fulldata: {},
            legs: {}
        }
    },
    initMap() {
        setTimeout(function(){
            var map = new google.maps.Map(document.getElementById('map'),{
                zoom: 14,
                center: {
                    lat: 46.12363029999999,
                    lng: 32.29127140000003
                }
            });
            directionsDisplay.setMap(map);
        },100)
    },
    calculateAndDisplayRoute(end) {
        var lat = Number(this.state.fulldata.lat),
            lng = Number(this.state.fulldata.lng),
            self=this;
        directionsService.route({
            origin: {lat: lat, lng: lng},  // Haight.
            destination: end,
            travelMode: google.maps.TravelMode.WALKING
        }, function(response, status) {
            console.log(response)
            console.log(status)
            if (status === google.maps.DirectionsStatus.OK) {
                self.setState({
                    legs : response.routes[0].legs[0]
                })
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    },
    calcRoute(event){
        var end = [
            {
                name: "stambul",
                lng: 32.29299187660217,
                lat: 46.1172700513178
            },
            {
                name: "briz",
                lng: 32.291562259197235,
                lat: 46.11757125158769
            }
        ]
        for(var i=0; i<end.length; i++){
            if(end[i].name == event.target.value){
                this.calculateAndDisplayRoute(end[i]);
            }
        }
    },
    componentDidMount(){
        var self = this
        locations = restaurants
            .filter(function(data){
                if(data.id){
                    return data.id == self.props.params.placeName
                }
            })
            .map(function(data){
                self.setState({
                    fulldata:data
                })
            })

    },

    render() {
        this.initMap()
        return (
            <div>
                <div id="floating-panel">
                    <b>Start: </b>
                    <select id="start" onChange={this.calcRoute}>
                        <option value="chicago, il">{this.state.fulldata.title}</option>
                    </select>
                    <b>End: </b>
                    <select id="end" onChange={this.calcRoute}>
                        <option value="stambul">Стамбул</option>
                        <option value="briz">Бриз</option>
                    </select>
                </div>
                <div id="map"></div>
                <Steps step={this.state.legs}></Steps>
            </div>
            );
    }
    });

module.exports = FotoFolder;