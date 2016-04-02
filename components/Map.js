var React = require('react');

var Map = React.createClass({
	componentDidMount(){
       
		// Only componentDidMount is called when the component is first added to
		// the page. This is why we are calling the following method manually. 
		// This makes sure that our map initialization code is run the first time.

		this.componentDidUpdate();
	},
    infoWindow(data){
        return '<div class="col-md-12" style="text-align: left">'+
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
        console.log(props)
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