
import React from 'react';
import PropTypes from 'prop-types';
import './rippleEffect.css';

const DURATION = 230;

class Ripple extends React.Component {

  state = {
    in: false, 
    out: false
   }

  componentDidMount() {
    setTimeout(() => {
      this.setState({in: true, out: false});
      setTimeout(() => {
        this.setState({in: false, out: true});
        setTimeout(() => {
          this.props.onRequestRemove();
        }, DURATION);
      }, DURATION);
    }, 15);
  }

  render() {
    let className = `Ripple`;

    if (this.state.in) {
      className = `${className} Ripple--in`;
    }
    if (this.state.out) {
      className = `${className} Ripple--out`;
    }

    const style = {};
    if (this.props.left) style.left = this.props.left;
    if (this.props.top) style.top = this.props.top;

    return (
      <div className={className} style={style} />
    );
  }
}

Ripple.propTypes = {

    onRequestRemove: PropTypes.func.isRequired,
}


export default Ripple;