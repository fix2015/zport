var React = require('react');

var Map = React.createClass({

	componentDidMount(){

		// Only componentDidMount is called when the component is first added to
		// the page. This is why we are calling the following method manually. 
		// This makes sure that our map initialization code is run the first time.

		this.componentDidUpdate();
	},
    addMarkers(map){
        var self = this;
        var locations = restaurants.map(function(data){
            var marker = map.addMarker({
                lat: data.lat,
                lng: data.lng,
                click: function(e) {
                    //alert('You clicked in this marker');
                },
                infoWindow: {
                    content: self.infoWindow(data)
                }
            }).setIcon("images/green-icon.png");
            gmarkers.push(marker);
        })
    },
    infoWindow(data){
        return '<div class="col-md-15" style="text-align: left">'+
            '<h3>'+data.title+'</h3>'+
            '<h3>'+data.type+'</h3>'+
            '<ul class="list-group" style="padding: 0; margin-top: 0px;">'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-star"></i> Дистанция: '+data.distance+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-globe"></i> Удобства: '+data.toilet +
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-globe"></i> Душ: '+data.dush+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-globe"></i> TV: '+data.tv+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-globe"></i> Холодильник: '+data.refrigerator+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-globe"></i> Кондиционер: '+data.conditioner+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-globe"></i> Wifi: '+data.wifi+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-globe"></i> Питание: '+data.eat+
            '</li>'+
            '</ul>'+
        '</div>'
    },
	componentDidUpdate(){

		if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){

			// The map has already been initialized at this address.
			// Return from this method so that we don't reinitialize it
			// (and cause it to flicker).

			return;
		}

		this.lastLat = this.props.lat;
		this.lastLng = this.props.lng

		var map = new GMaps({
			el: '#map',
			lat: this.props.lat,
			lng: this.props.lng
		});
        if(this.props.removeMarkers){
            map.removeMarkers();
        }else{
            this.addMarkers(map);
        }
		// Adding a marker to the location we are showing
        map.addMarker({
            lat: this.props.lat,
            lng: this.props.lng,
            click: function(e) {
                //alert('You clicked in this marker');
            },
            infoWindow: {
                content: this.infoWindow('<h3>okokok</h3>')
            }
        }).setIcon("images/green-icon.png");

	},

	render(){

		return (
			<div className="map-holder">
				<p>Loading...</p>
				<div id="map"></div>
			</div>
		);
	}

});

module.exports = Map;