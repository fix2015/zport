/**
 * Created by semianchuk on 23.04.16.
 */

var React = require('react');
var config = require('./../config');
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var Steps = require('./steps');
var MainNav = require('../MainNav');
var Link = require('react-router').Link;

var FotoFolder = React.createClass({
    getInitialState(){
        return {
            fulldata: {},
            legs: {},
            url: '',
            description: ''
        }
    },
    initMap() {
        var self = this;
        setTimeout(function(){
            var map = new google.maps.Map(document.getElementById('map'),{
                zoom: 14,
                center: {
                    lat: Number(self.state.fulldata.lat),
                    lng: Number(self.state.fulldata.lng)
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
                    legs : response.routes[0].legs[0],
                    url : end.url,
                    description :  end.description
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
                lat: 46.11757125158769,
                url: 'http://nikcenter.org/images/photo/images/briz.jpg',
                description: 'Рынок это супер рынов желзеном порту'
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
            setTimeout(function(){
                var event = { target: {
                    value: 'stambul'
                }}
                self.calcRoute(event)
            },200)
    },

    render() {
        this.initMap()
        return (
            <div>
                <div className="col-md-12">
                    <MainNav type="" typeFilter=""></MainNav>
                </div>
                <div className="col-md-12">
                    <div id="floating-panel">
                        <b>Начало: </b>
                        <select id="start" onChange={this.calcRoute}>
                            <option value="chicago, il">{this.state.fulldata.title}</option>
                        </select>
                        <b>Конечная точка: </b>
                        <select id="end" onChange={this.calcRoute}>
                            <option value="stambul">Стамбул</option>
                            <option value="briz">Бриз</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-md-6"> <h3>Путеводитель для  -  <Link to={'/place/'+this.state.fulldata.id} className="location-title"> {this.state.fulldata.title}</Link> </h3><Steps step={this.state.legs}></Steps></div>
                    <div className="col-md-6" id="map"></div>
                </div>
                <div className="col-md-12">
                    <hr/>
                </div>
                <div className="col-md-12">
                    <div className="col-md-6"><img src={this.state.url}/></div>
                    <div className="col-md-6">{this.state.description}/</div>
                </div>
            </div>
            );
    }
    });

module.exports = FotoFolder;