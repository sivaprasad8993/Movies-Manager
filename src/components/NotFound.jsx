import React, { Component } from 'react';
class NotFound extends Component {

    componentDidMount() {
        console.log('component did mount in not found');
    }

    render() {
        return (<h1>Not Found</h1>);
    }
}

export default NotFound;