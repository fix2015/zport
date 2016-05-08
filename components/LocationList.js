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
                <span className="caption-of-result glyphicon glyphicon-remove" onClick={this.clearFilter}></span>
				{locations}
			</div>
		)

	}

});

module.exports = LocationList;