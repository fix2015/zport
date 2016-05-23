/**
 * Created by semianchuk on 22.05.16.
 */

var React = require('react');
var config = require('./../config');

var Steps = React.createClass({
    getInitialState(){
        return {

        }
    },
    componentDidMount(){

    },

    render() {
    var steps;
        if(typeof this.props.step.steps != 'undefined'){
            steps = this.props.step.steps
                .map(function(data){
                    return <div className='col-md-12'><span>{data.instructions}</span> {data.distance.text}</div>
                })
        }
        return (
            <div>
                {steps}
            </div>
            );
    }
});

module.exports = Steps;