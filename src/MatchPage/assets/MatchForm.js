import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchPage from '../MatchPage';

class MatchForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            company: '',
            industry: '',
            stage: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(){
        alert('Submitted!!', this.state.industry);
    }

    handleChange(event){
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        return(
            <form onSubmit ={this.handleSubmit}>
                <div className="form-group">
                    <p>My startup,</p>
                    <input type="text" name="company" value={this.state.company} className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <p>is in the</p>
                    <input type="text" name="industry" value={this.state.industry} className="form-control" onChange={this.handleChange}/>
                    <p>industry</p>
                </div>
                <div className="form-group">
                    <p>in the </p>
                    <input type="text" name="stage" value={this.state.stage} className="form-control" onChange={this.handleChange}/>
                    <p>stage of funding</p>
                </div>
                <button type="submit" className="btn btn-primary">Continue</button>

            </form>
        )
    }
}

export default MatchForm;
