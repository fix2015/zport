/**
 * Created by semianchuk on 23.09.16.
 */
/**
 * Created by semianchuk on 01.06.16.
 */
var React = require('react');
var Config = require('../config')

var Auth = React.createClass({
    render() {
        var commentsObj;
        return (
            <div>
                <a href="/login" className="btn btn-default"><span className="fa fa-user"></span> Local Login</a>
                <a href="/signup" className="btn btn-default"><span className="fa fa-user"></span> Local Signup</a>
                <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
                <a href="/auth/twitter" className="btn btn-info"><span className="fa fa-twitter"></span> Twitter</a>
                <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google+</a>
            </div>
        );
    }
});

module.exports = Auth;