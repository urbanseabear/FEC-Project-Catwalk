import React from 'react';
import AddQuantity from './addQuantity.jsx';
import AddSize from './addSize.jsx';

class AddSizeAndQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: null,
      selectedQuantity: null,
      totalQuantity: null,
      allSizes: Object.keys(this.props.sizeAndQuantity).reduce((object, element) => {
        if (this.props.sizeAndQuantity[element]['quantity'] > 0) {
          object[element] = this.props.sizeAndQuantity[element]['size'];
        }
        return object;
      }, {})
    };
  }

  onSizeSelect(sizeId) {
    this.setState({
      selectedSize: this.props.sizeAndQuantity[sizeId]['size'],
      totalQuantity: this.props.sizeAndQuantity[sizeId]['quantity'],
      selectedQuantity: 1
    });
  }

  onQuantitySelect(selectedQuantity) {
    this.setState({
      selectedQuantity: selectedQuantity
    });
  }

  render() {
    return (
      <div>
        <AddSize selectedSize={this.state.selectedSize} allSizes={ this.state.allSizes } onSizeSelect={ this.onSizeSelect.bind(this) } />
        <AddQuantity selectedQuantity={this.state.selectedQuantity} totalQuantity={this.state.totalQuantity} onQuantitySelect={this.onQuantitySelect.bind(this)}/>
      </div>
    );
  }
}

export default AddSizeAndQuantity;