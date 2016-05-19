var React = require('react');
var helper = require('./helper');

var Map = React.createClass({
	componentDidMount(){
       
		// Only componentDidMount is called when the component is first added to
		// the page. This is why we are calling the following method manually. 
		// This makes sure that our map initialization code is run the first time.

		this.componentDidUpdate();
	},
    infoWindow(data){
    //console.log(data)
        return '<div class="col-md-12 map-list-preview" style="text-align: left">'+
            '<h4>'+data.title+'</h4>'+
            '<h4>'+helper.type(data.type)+'</h4>'+
            '<ul class="list-group" style="padding: 0; margin-top: 0px;">'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-send"></i> Дистанция: '+data.distance+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-shopping-cart"></i> Удобства: <i class="'+ (data.toilet=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-equalizer"></i> Душ: <i class="'+ (data.dush=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-expand"></i> TV: <i class="'+ (data.tv=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-folder-close"></i> Холодильник: <i class="'+ (data.refrigeter=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-globe"></i> Кондиционер: <i class="'+ (data.conditioner=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-cd"></i> Wifi: <i class="'+ (data.wifi=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-apple"></i> Питание:  <i class="'+ (data.eat=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
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

        var map = new GMaps({
            el: '#map',
             lat: 46.12363029999999,
             lng: 32.29127140000003
        });
        map.removeMarkers();
        this.addMarkers(map, this.props)


	},
    addMarkers(map, props){
        var self = this;
        var locations = this.props.locations
            .filter(function(data){
                    return data.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
            })
            .filter(function(data){
                if(props.filter!='' && data.type){
                    return data.type.toLowerCase().indexOf(props.filter.type.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                return (data.toilet==props.filter.toilet || props.filter.toilet=='') ? true : false

            })
            .filter(function(data){
                if(props.filter!='' && data.distance){
                    return data.distance.toLowerCase().indexOf(props.filter.distance.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                return (data.tv==props.filter.tv || props.filter.tv=='') ? true : false
            })
            .filter(function(data){
                return (data.refrigeter==props.filter.refrigeter || props.filter.refrigeter=='') ? true : false
            })
            .filter(function(data){
                return (data.conditioner==props.filter.conditioner || props.filter.conditioner=='') ? true : false
            })
            .filter(function(data){
                return (data.wifi==props.filter.wifi || props.filter.wifi=='') ? true : false
            })
            .filter(function(data){
                return (data.eat==props.filter.eat || props.filter.eat=='') ? true : false
            })
            .filter(function(data){
                return (data.swiming==props.filter.swiming || props.filter.swiming=='') ? true : false
            })
            .filter(function(data){
                return (data.parking==props.filter.parking || props.filter.parking=='') ? true : false
            })
            .map(function(data){
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