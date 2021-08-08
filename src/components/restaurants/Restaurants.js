import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
      const { restaurants, deleteRestaurant } = this.props
      //map on array
      //for each restaurant, create a Restaurant component
      //pass in a restaurant prop and a deleteRestaurant prop
      //also pass in a key, using the id
      const restaurantList = restaurants.map(restaurant => {
          return (
            <Restaurant 
                key={restaurant.id} 
                restaurant={restaurant}
                deleteRestaurant={deleteRestaurant}
          />
          )
        
      })
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;