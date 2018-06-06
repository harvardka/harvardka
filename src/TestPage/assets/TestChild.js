import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TestPage from '../TestPage';

class TestChild extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          string: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(){
      this.props.handleTestChildSubmit({
        text2: this.state.string,
      });
    }

    handleChange(event){
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

    render(){
        return(
            <div>
                    <div className="form-group">
                        <input type="text" name="string" value={this.state.string} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Button 2</button>
                    </div>


                <br/><br/><br/><br/>
                <p> { this.props.text3 } </p>
            </div>

        )
    }
}

export default TestChild;
