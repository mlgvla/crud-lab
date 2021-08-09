import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
      
      console.log("in Reviews")
      const { reviews, restaurantId, deleteReview } = this.props
      console.log(this.props)
        debugger
      const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId)
        console.log(restaurantReviews)
      const reviewList = restaurantReviews.map((review, index) => {
         return <Review key={index} review={review} deleteReview={deleteReview} />
      })
     
 
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;