var React = require('react');
var LocationItem = require('./LocationItem');
var moment = require('moment');

var LocationItem = React.createClass({

    getInitialState: function () {
        return {hover: false};
    },

    mouseOver: function () {
        this.setState({hover: true});
    },

    mouseOut: function () {
        this.setState({hover: false});
    },

	handleClick(){
		this.props.onClick(this.props.data);
	},

	render(){

		var cn = "list-group-item";

		if(this.props.active){
			cn += " active-location";
		}
        if(this.state.hover==true){
            this.state.toogle = 'location-block-open'
        }else{
            this.state.toogle = 'location-block-close'
        }
		return (
			<a className={cn} onClick={this.handleClick} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <div class="raw" className="location-block">
                    <div className={this.state.toogle} >
                        <h4 className="location-title">{this.props.data.title} - {this.state.hover}</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <i class="glyphicon glyphicon-star"></i> Тип: {this.props.data.type}
                            </li>
                            <li class="list-group-item">
                                <i class="glyphicon glyphicon-star"></i> Дистанция: {this.props.data.distance} / 5
                            </li>
                            <li class="list-group-item">
                                <i class="glyphicon glyphicon-globe"></i> Удобства: {this.props.data.toilet}
                            </li>
                            <li class="list-group-item">
                                <i class="glyphicon glyphicon-globe"></i> Душ: {this.props.data.dush}
                            </li>
                            <li class="list-group-item">
                                <i class="glyphicon glyphicon-globe"></i> TV: {this.props.data.tv}
                            </li>
                            <li class="list-group-item">
                                <i class="glyphicon glyphicon-globe"></i> Холодильник: {this.props.data.refrigeter}
                            </li>
                            <li class="list-group-item">
                                <i class="glyphicon glyphicon-globe"></i> Кондиционер: {this.props.data.conditioner}
                            </li>
                            <li class="list-group-item">
                                <i class="glyphicon glyphicon-globe"></i> Wifi: {this.props.data.wifi}
                            </li>
                            <li class="list-group-item">
                                <i class="glyphicon glyphicon-globe"></i> Питание: {this.props.data.eat}
                            </li>
                        </ul>
                        <span className="glyphicon glyphicon-zoom-in"></span>
                    </div>
                </div>
			</a>
		)
	}

});

module.exports = LocationItem;
