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
        //console.log('addMarkers')
        //console.log(this.props.locations)
        var locations = this.props.locations
        /*
            .filter(function(data){
                if(data.type && props.filter.type){
                    console.log('okok')
                    return 
                        data.type.toLowerCase().indexOf(props.filter.type.toLowerCase()) > -1 &&
                         data.children.toLowerCase().indexOf(props.filter.children.toLowerCase()) > -1 &&
                          data.conditioner.toLowerCase().indexOf(props.filter.conditioner.toLowerCase()) > -1 &&
                           data.distance.toLowerCase().indexOf(props.filter.distance.toLowerCase()) > -1 &&
                            data.eat.toLowerCase().indexOf(props.filter.eat.toLowerCase()) > -1 &&
                             data.refrigeter.toLowerCase().indexOf(props.filter.refrigeter.toLowerCase()) > -1 &&
                              data.toilet.toLowerCase().indexOf(props.filter.toilet.toLowerCase()) > -1 &&
                               data.tv.toLowerCase().indexOf(props.filter.tv.toLowerCase()) > -1 &&
                                data.wifi.toLowerCase().indexOf(props.filter.wifi.toLowerCase()) > -1
                    ;
                }else{ 
                    return true;
                }
            })
*/

            .filter(function(data){
                    return data.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
            })
            .filter(function(data){
                if(props.filter!='' && data.type){
                    return data.type.toLowerCase().indexOf(props.filter.type.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                if(props.filter!='' && data.toilet){
                    return data.toilet.toLowerCase().indexOf(props.filter.toilet.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                if(props.filter!='' && data.distance){
                    return data.distance.toLowerCase().indexOf(props.filter.distance.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                if(props.filter!='' && data.tv){
                    return data.tv.toLowerCase().indexOf(props.filter.tv.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                if(props.filter!='' && data.refrigeter){
                    return data.refrigeter.toLowerCase().indexOf(props.filter.refrigeter.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                if(props.filter!='' && data.conditioner){
                    return data.conditioner.toLowerCase().indexOf(props.filter.conditioner.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                if(props.filter!='' && data.wifi){
                    return data.wifi.toLowerCase().indexOf(props.filter.wifi.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                if(props.filter!='' && data.eat){
                    return data.eat.toLowerCase().indexOf(props.filter.eat.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                if(props.filter!='' && data.swiming){
                    return data.swiming.toLowerCase().indexOf(props.filter.swiming.toLowerCase()) > -1;
                }
            })
            .filter(function(data){
                if(props.filter!='' && data.parking){
                    return data.parking.toLowerCase().indexOf(props.filter.parking.toLowerCase()) > -1;
                }
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