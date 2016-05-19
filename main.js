var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var Place = require('./components/Place');
var FotoFolder = require('./components/FotoFolder');
var PriceTable = require('./components/mainTable');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var Route = require('react-router').Route;
var Link = require('react-router').Link

ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" name="Main" component={App}>
            <Route path="/:type" component={App}/>
        </Route>
        <Route path="place"  name="Place" component={Place}>
            <Route path="/place/:placeId" component={Place}/>
        </Route>
    </Router>
    ,
    document.getElementById('main')
);
/*console.log(ReactDOM)
var MyComponent = React.createClass({
    render: function() {
        return <div>Hello World</div>;
    }
});

ReactDOM.render(<MyComponent />, document.getElementById('main'));*/


