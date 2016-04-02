var React = require('react');
var LocationItem = require('./LocationItem');

var LocationList = React.createClass({

	componentDidUpdate(){

	},
    clearFilter(){
        this.props.clearFilter();
    },
	render(){

		var self = this;
        var props = this.props;
        var num=0;
		var locations = this.props.locations
            .filter(function(data){
                return data.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
            })
            .filter(function(data){
                if(props.filter!='' && data.type){
                    return data.type.toLowerCase().indexOf(props.filter.type.toLowerCase()) > -1;
                }
            })
            .map(function(l){
                num++;
			var active = self.props.activeLocationAddress == l.address;
			
			return <LocationItem data={l} timestamp={l.timestamp}
					active={active} onClick={self.props.onClick} />
		});

		if(!locations.length){
			return null;
		}

		return (
			<div className="list-group col-xs-12">
				<span className="list-group-item list-group-item-first active">Результаты: {num}</span>
                <span className="glyphicon glyphicon-remove" onClick={this.clearFilter}></span>
				{locations}
			</div>
		)

	}

});

module.exports = LocationList;