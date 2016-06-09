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
var Infrastructure = require('./components/Infrastructure/Infrastructure');

ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" name="Main" component={App}>
            <Route path="/:type" component={App}/>
        </Route>
        <Route path="place"  name="Place" component={Place}>
            <Route path="/place/:placeId" component={Place}/>
        </Route>
        <Route path="infrastructure"  name="Infrastructure" component={Infrastructure}>
            <Route path="/infrastructure/gport" component={Infrastructure}/>
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
/*

 <Route path="/:type/:distance/:toilet/:tv/:refrigeter/:conditioner/:wifi/:eat/:children/:swiming" component={App}/>
 <Route path="/:type/:distance/:toilet/:tv/:refrigeter/:conditioner/:wifi/:eat/:children" component={App}/>
 <Route path="/:type/:distance/:toilet/:tv/:refrigeter/:conditioner/:wifi/:eat" component={App}/>
 <Route path="/:type/:distance/:toilet/:tv/:refrigeter/:conditioner/:wifi" component={App}/>
 <Route path="/:type/:distance/:toilet/:tv/:refrigeter:/conditioner" component={App}/>
 <Route path="/:type/:distance/:toilet/:tv/:refrigeter" component={App}/>
 <Route path="/:type/:distance/:toilet/:tv" component={App}/>
 <Route path="/:type/:distance/:toilet" component={App}/>
 <Route path="/:type/:distance" component={App}/>


console.log(ReactDOM)
var MyComponent = React.createClass({
    render: function() {
        return <div>Hello World</div>;
    }
});

ReactDOM.render(<MyComponent />, document.getElementById('main'));*/


