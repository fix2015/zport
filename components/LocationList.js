var React = require('react');
var LocationItem = require('./LocationItem');

var LocationList = React.createClass({

	render(){

		var self = this;
        var props = this.props;

		var locations = this.props.locations
            .filter(function(data){
                return data.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
            })
            .map(function(l){
			var active = self.props.activeLocationAddress == l.address;

			return <LocationItem data={l} timestamp={l.timestamp}
					active={active} onClick={self.props.onClick} />
		});

		if(!locations.length){
			return null;
		}

		return (
			<div className="list-group col-xs-12 col-md-offset-3">
				<span className="list-group-item active">Saved Locations</span>
				{locations}
			</div>
		)

	}

});

module.exports = LocationList;