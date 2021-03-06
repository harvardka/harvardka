import React from 'react';
import { Alert } from 'react-bootstrap';

class EAAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.CreateAlert = this.CreateAlert.bind(this);
    }

    CreateAlert(props){
        if (this.props.success === true)
            return <Alert bsStyle='success'>Success! You have been signed up.</Alert>;

        if (this.props.success === false)
            return <Alert bsStyle='warning'>Sorry, that email has been used already.</Alert>;

        if (this.props.success === null)
            return <p></p>;

        return <p>error? Here is success value: { this.props.success }</p>

        console.log(this.props.success)
    }

    render() {
        return (
            <div>
                <this.CreateAlert/>
            </div>
        );
    }
}

export default EAAlert;
