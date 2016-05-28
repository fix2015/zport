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
var Guides = require('./components/guides/guides');
var Contacts = require('./components/contacts/Contacts');

ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" name="Main" component={App}>
            <Route path="/:type" component={App}/>
        </Route>
        <Route path="place"  name="Place" component={Place}>
            <Route path="/place/:placeId" component={Place}/>
        </Route>
        <Route path="guides"  name="Guides" component={Guides}>
            <Route path="/guides/:placeName" component={Guides}/>
        </Route>
        <Route path="contacts"  name="Contacts" component={Contacts}>
            <Route path="/contact/us" component={Contacts}/>
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


