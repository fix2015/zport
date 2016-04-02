var React = require('react');

var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');
var SearchField = require('./SearchField');
var SearchComponent = require('./SearchComponent');

restaurants = require('../restaurants');
gmarkers = [];

var filterData =[
     	{type: 'chast', distance: '100', toilet: 'true',  tv: 'true', refrigeter: 'true', conditioner: 'true', wifi: 'true', eat: 'true', children: 'true'},
 	  	{type: 'pansionat', distance: '200', toilet: 'false',  tv: 'false', refrigeter: 'false', conditioner: 'false', wifi: 'false', eat: 'false', children: 'false'},
     	{type: 'hotel', distance: '500'},
     	{type: 'snatotiy', distance: '800'},
     	{type: 'oteli', distance: '900'}

     ];

var App = React.createClass({

	getInitialState(){

		// Extract the favorite locations from local storage

		var favorites = [];

/*
		if(localStorage.favorites){
			favorites = JSON.parse(localStorage.favorites);
		}
*/
        favorites = restaurants;

		// Nobody would get mad if we center it on Paris by default

		return {
			favorites: favorites,
			currentAddress: 'Zport',
			mapCoordinates: {
                lat: 46.12363029999999,
                lng: 32.29127140000003
            },
            filterText: '',
            filter: ''
		};
	},

	toggleFavorite(address){

		if(this.isAddressInFavorites(address)){
			this.removeFromFavorites(address);
		}
		else{
			this.addToFavorites(address);
		}

	},

	addToFavorites(address){

		var favorites = this.state.favorites;

		favorites.push({
			address: address,
			timestamp: Date.now()
		});

		this.setState({
			favorites: favorites
		});

		localStorage.favorites = JSON.stringify(favorites);
	},

	removeFromFavorites(address){

		var favorites = this.state.favorites;
		var index = -1;

		for(var i = 0; i < favorites.length; i++){

			if(favorites[i].address == address){
				index = i;
				break;
			}

		}

		// If it was found, remove it from the favorites array

		if(index !== -1){
			
			favorites.splice(index, 1);

			this.setState({
				favorites: favorites
			});

			localStorage.favorites = JSON.stringify(favorites);
		}

	},

	isAddressInFavorites(address){

		var favorites = this.state.favorites;

		for(var i = 0; i < favorites.length; i++){

			if(favorites[i].address == address){
				return true;
			}

		}

		return false;
	},
	filterFunc(data){
		this.setState({
            filter: data
        })
	},
	searchForAddress(data){
		var self = this;
        this.setState({
            filterText: data.title
        })

        self.setState({
            removeMarkers: true,
            mapCoordinates: {
                lat: data.lat,
                lng: data.lng
            }
        });
	},
    handleFilterText(filterText){
        this.setState({
            filterText: filterText
        })
    },
    clearFilter(){
        this.setState({
            filterText: ''
        })
        this.setState({
            filter: {
                type: '',
                distance: '',
                toilet: '',
                tv: '',
                refrigeter: '',
                conditioner: '',
                wifi: '',
                eat: '',
                children: ''
            }
        })
    },
	render(){

		return (

			<div>
				<h2>Поиск жилья в железном порту</h2>
                <div className="col-md-12">
                    <SearchField onSearch={this.searchForAddress} onFilterInput={this.handleFilterText} filterText={this.state.filterText}/>
                    <div className="col-md-7">
                        <Map filter= {this.state.filter} filterText={this.state.filterText} locations={this.state.favorites} removeMarkers={this.state.removeMarkers} lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
                    </div>
                    <div className="mark-map-block col-md-5">
                        <LocationList filter= {this.state.filter} filterText={this.state.filterText} clearFilter={this.clearFilter} locations={this.state.favorites} activeLocationAddress={this.state.currentAddress}
                        onClick={this.searchForAddress} />
                    </div>
                </div>
                <div className="main-map-block">
                    <div className="col-md-12">
                        <SearchComponent
                        onFilter={this.filterFunc}
                        data={filterData}
                        onSearch={this.searchForAddress}
                        filterText={this.state.filterText}/>
                    </div>
                </div>
			</div>

		);
	}

});

module.exports = App;
/*
 <CurrentLocation address={this.state.currentAddress}
 favorite={this.isAddressInFavorites(this.state.currentAddress)}
 onFavoriteToggle={this.toggleFavorite} />
 */