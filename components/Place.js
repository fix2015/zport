/**
 * Created by semianchuk on 07.04.16.
 */
var React = require('react');
var MainTable = require('./mainTable');
var helper = require('./helper');
var config = require('./config');
var EditPlace = require('./editPlace');
var Breadcrumbs = require('react-breadcrumbs');
var Link = require('react-router').Link;

var Place = React.createClass({
    getInitialState: function () {
        return { display: 2,
            placeId: this.props.params.placeId,
            mainTable:'',
            place: {
                type:'',
                description:'',
                distance:'',
                toilet:'',
                dush:'',
                tv:'',
                refrigeter:'',
                conditioner:'',
                wifi:'',
                eat:''
            }
        };
    },
    componentDidMount() {
    this.setState({
            placeId: this.props.params.placeId,
            display: 2,
            mainTable: '',
            place: {
                type:'',
                description:'',
                distance:'',
                toilet:'',
                dush:'',
                tv:'',
                refrigeter:'',
                conditioner:'',
                wifi:'',
                eat:''
            }
        })
        var self=this;
        if(this.state != null){
            var num=1,
                locations = restaurants
                    .filter(function(data){
                        if(data.id){
                            return data.id == self.props.params.placeId
                        }
                    })
                    .map(function(data){
                        console.log(data)
                        var dataHouse = data;
                        self.setState({
                            place:dataHouse,
                            description:dataHouse.description,
                            mainTable : dataHouse.room
                            .map(function(data){
                                num++;
                                return <MainTable fullData={dataHouse} data={data} count={dataHouse.room.length} num={num}></MainTable>;
                            })
                        })
                    })
        }
    },
render() {
    return (
        <div>
            <div className="col-md-12 place-title">
                <ul className="nav nav-pills"  onClick={this.handleSubmit}>
                    <li className='active'>
                        <Link to={'/'}>
                        Главная
                        </Link>
                    </li>
                    <li>
                        <Link to={'/place/'+this.state.place.id}>
                           {this.state.place.title}
                         </Link>
                    </li>
                </ul>
            </div>
            <div className="location-block col-md-12">
                <div className="col-md-4">
                    <div><img className="img-rounded" src={config.domain + 'image/' +this.state.place.folder + '/main/ico.jpg'} /></div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-home"></i> {this.state.place.title}
                        </li><li className="list-group-item">
                            <i className="glyphicon glyphicon-star"></i> Тип: {helper.type(this.state.place.type)}
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-send"></i> Дистанция: {this.state.place.distance} м.
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-shopping-cart"></i> Удобства: <i className={this.state.place.toilet=="true" ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-equalizer"></i> Душ: <i className={this.state.place.dush=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-expand"></i> TV: <i className={this.state.place.tv=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-folder-close"></i> Холодильник: <i className={this.state.place.refrigeter=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-cloud"></i> Басейн: <i className={this.state.place.swiming=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-cd"></i> Wifi: <i className={this.state.place.wifi=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-apple"></i> Кухня:  <i className={this.state.place.eat=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-road"></i> Парковка:  <i className={this.state.place.eat=="true" ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-phone-alt"></i> Контакты: <span> {this.state.place.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-map-marker"></i> Адресс: <span> {this.state.place.address}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-12 location-block-description">
                 {this.state.description}
            </div>
            {this.state.mainTable}
        </div>
        );
}
});

module.exports = Place;

/*

<Breadcrumbs
excludes={['Place']}
routes={this.props.routes}
params={this.props.params}
/>
*/

/*
<div className="col-md-12 location-block-edit">
    <EditPlace  data={this.state.place}></EditPlace>
</div>*/
