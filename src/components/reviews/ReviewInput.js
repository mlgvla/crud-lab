import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
    
    state = {
        text: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addReview( { text: this.state.text, restaurantId: this.props.restaurantId } )
        this.setState({
            text: ''
        })
    }
    
    handleOnChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Review:</label>
            <input type="text" onChange={this.handleOnChange} value={this.state.text} />
                <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
