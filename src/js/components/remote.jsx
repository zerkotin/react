import React from 'react';
import axios from 'axios';

export default function remote(Component, url, mapper) {
    return class RemoteWrapper extends React.Component {
        constructor(props) {
            super(props);

            this.state = {data: []};
        }

        componentDidMount() {
            //TODO catch
            axios.get(url).then(response => this.setState({data: response.data}));
        }

        render() {
            return (
                <Component {...this.props}>
                    {this.state.data.map(mapper)}
                </Component>
            );
        }
    }
}
