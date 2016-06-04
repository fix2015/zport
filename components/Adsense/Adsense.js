/**
 * Created by semianchuk on 04.06.16.
 */

var React = require('react');
var config = require('./../config');
var helper = require('../helper');

var Adsense = React.createClass({
    getInitialState(){
    return {
    }
},
componentDidMount(){
},
render() {
    var style = {display: "inline-block", width: 500, height: 120}
    return (
        <div>
            <ins
            className="adsbygoogle"
            style={style}
            data-ad-client="ca-pub-5661207093403381"
            data-ad-slot="5215178953"
            />
        </div>
        );
}
});

module.exports = Adsense;