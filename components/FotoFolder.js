/**
 * Created by semianchuk on 23.04.16.
 */

var React = require('react');
var config = require('./config');

var FotoFolder = React.createClass({


    componentDidMount() {

    },
    handleClick(){
        this.props.onClick(this.props.data);
    },
    render() {
        var html = '',
            fotos = '',
            roomId = this.props.data.id;
            if(this.props.data!=''){
                fotos = this.props.data.image
                .map(function(data){
                    return <div className='col-md-3 price-table-block-img'><img className='img-rounded' src={config.domain + 'images/room/'+ roomId + '/' + data.name}/></div>
                })
            }
            return (
                <div>
                    {fotos}
                </div>
                );
    }
    });

module.exports = FotoFolder;