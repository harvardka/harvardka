import React, { Component } from 'react';
import './styles.css';

const CaptureEmailScreen = ({ onSubmit }) => {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Be one of the first</h1>
          <h1>in the US to get</h1>
          <h1>Friends & Family.</h1>
          <form onSubmit={onSubmit}>
            <label>
              <input
                name="email"
                type="email"
                placeholder="Email"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {/* <button onClick={this.props.closePopup}>close</button> */}
        </div>
      </div>
    );
  };
  
  export default CaptureEmailScreen;