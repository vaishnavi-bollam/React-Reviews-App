// Write your code here
import {Component} from 'react'

import './index.css'

/*
The constructor method is a special method of a class for creating and initializing an object of that class.

Syntax:

class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }
  method1() { ... }
  method2() { ... }
}

1.1.1 Creating a Single Object
Syntax :

class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }
  method1() { ... }
  method2() { ... }
}
let myObject = new MyClass(property1, property2);
*/

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {profileDetailsContainer: props.reviewsList[0]}
  }

  /*
  indexOf() is used for finding the index of a specific element in an array, 
  while findIndex() is used for finding the index of the first element that 
  meets a custom condition specified by a callback function. 
  */
  leftArrowClicked = () => {
    const {profileDetailsContainer} = this.state
    const {reviewsList} = this.props
    const index = reviewsList.indexOf(profileDetailsContainer)
    // console.log(index)

    if (index !== 0) {
      this.setState({profileDetailsContainer: reviewsList[index - 1]})
    }
  }

  rightArrowClicked = () => {
    const {profileDetailsContainer} = this.state
    const {reviewsList} = this.props
    const index = reviewsList.indexOf(profileDetailsContainer)
    // console.log(index)

    if (index !== reviewsList.length - 1) {
      this.setState({profileDetailsContainer: reviewsList[index + 1]})
    }
  }

  render() {
    const {profileDetailsContainer} = this.state

    /*
    console.log(profileDetailsContainer)
    Object
    companyName : "Rang"
    description : "The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience."
    imgUrl : "https://assets.ccbp.in/frontend/react-js/wade-warren-img.png"
    username : "Wade Warren"
    */

    const {companyName, description, imgUrl, username} = profileDetailsContainer

    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <div className="carouselContainer">
          <button
            type="button"
            className="btnEl"
            data-testid="leftArrow"
            onClick={this.leftArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="profileDetails">
            <img src={imgUrl} alt={username} />
            <p className="textPara namePerson">{username}</p>
            <p className="textPara">{companyName}</p>
            <p className="textPara">{description}</p>
          </div>

          <button
            type="button"
            className="btnEl"
            data-testid="rightArrow"
            onClick={this.rightArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
