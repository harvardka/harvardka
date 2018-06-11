import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchPage from '../MatchPage';

class MatchSelector extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        };

        this.selectRole = this.selectRole.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    selectRole(target){
        this.state.clicked = !this.state.clicked
        this.props.handleSelect(
            this.props.label
        );
    }

    // handleChange(event){
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }
    render(){
            return(
                <button type='button' style={{margin: '10px', color: '#59565F', backgroundColor: this.state.clicked ? '#6b9333':'#9FD356'}} className='btn' onClick={this.selectRole.bind(this)}>
                    <span className={"glyphicon " + ((this.state.clicked) ? 'glyphicon-check':'glyphicon-unchecked')}></span> {this.props.label}
                </button>
            )
//                 <button type='button' style={{margin: '10px', color: '#59565F', backgroundColor: (this.props.selected == this.props.label) ? '#6b9333':'#9FD356'}} className='btn' onClick={this.selectRole.bind(this)}>

        // if(this.props.size == 'lg'){
        //     console.log('here', this.props.selected)
        //     return(
        //         <button type='button' style={{color: '#59565F', backgroundColor: (this.props.selected == this.props.label) ? '#6b9333':'#9FD356'}} className='btn' onClick={this.selectRole.bind(this)}><h2>{this.props.label}</h2></button>
        //     )
        // }else if(this.props.size == 'sm'){
        //     return(
        //         <button type='button' style={{color: '#59565F', margin: '10px', backgroundColor: '#9FD356'}} className='btn'>{this.props.label}</button>
        //     )
        // }
    }
}

export default MatchSelector;
