var React = require('react');
var LocationItem = require('./LocationItem');
var moment = require('moment');

var LocationItem = React.createClass({

	handleClick(){
		this.props.onClick(this.props.data);
	},

	render(){

		var cn = "list-group-item";

		if(this.props.active){
			cn += " active-location";
		}

		return (
			<a className={cn} onClick={this.handleClick}>
                <div class="raw">
                    <div class="col-md-4">
                        <h3>{this.props.data.title}</h3>
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
                    </div>
                </div>
			</a>
		)
	}

});

module.exports = LocationItem;
