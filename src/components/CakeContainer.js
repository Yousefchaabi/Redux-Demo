import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function cakeContainer(props) {
    const handleClick = () => {
        if (props.numOfCakes !== 0) {
          props.buyCake();
        } else {
          console.log("Le nombre de gâteaux est égal à 0. L'achat est bloqué !");
        }
      };

  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <button onClick={handleClick}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:  () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (cakeContainer)