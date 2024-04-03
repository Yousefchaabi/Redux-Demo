import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'

function IceCreamContainer(props) {
    const handleClick = () => {
        if (props.numOfIceCreams !== 0) {
          props.buyIceCream();
        } else {
          console.log("Le nombre de gâteaux est égal à 0. L'achat est bloqué !");
        }
      };

  return (
    <div>
        <h2>Number of Ice - {props.numOfIceCreams}</h2>
        <button onClick={handleClick}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)