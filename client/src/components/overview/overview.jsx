import React from 'react';
import './styles.scss';
import axios from 'axios';
import ImageGalleryContainer from './imageGalleryContainer/imageGalleryContainer.jsx';
import ProductDetailsContainer from './productDetails/productDetailsContainer';
import RateCategoryNamePriceContainer from './rateCategoryNamePrice/rateCategoryNamePrice';
import StylesContainer from './stylesContainer/styles';
import SizeQuantityAddContainer from './sizeQuantityAddContainer/sizeQuantityAdd';
import FeaturesContainer from './featuresContainer/featuresContainer';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSize: null,
      selectedQuantity: null,
      selectedStyle: null,
      productInfo: {},
      productStyles: []
    };
  }

  componentDidMount() {
    axios.get(`http://3.21.164.220/products/${1}/styles`)
      .then(({ data }) => {
        this.setState({
          productStyles: data.results,
          selectedStyle: data.results.find(obj => obj['default?'] === 1)
        });
      })
      .catch(err => console.log(err));

    axios.get(`http://3.21.164.220/products/${1}`)
      .then(({ data }) => {
        this.setState({
          productInfo: data
        });
      })
      .catch(err => console.log(err));
  }

  changeSelectedStyle(selectedStyle) {
    this.setState({
      selectedStyle: this.state.productStyles.find(style => style['style_id'] === selectedStyle),
      selectedSize: null,
      selectedQuantity: null
    });
  }

  onSizeSelect(sizeId) {
    this.setState({
      selectedSize: this.state.selectedStyle['skus'][sizeId]['size']
    });
  }

  onQuantitySelect(quantity) {
    this.setState({
      selectedQuantity: quantity
    });
  }
  
  render() {
    return (
      <div className='masterContainer' style={{display: 'flex', justifyContent: 'center'}}>
        <div className='overviewContainer'>
          <div className='headerContainer'>
            <h1>Company Logo</h1>
            <input type='text' id='searchBar' placeholder='Search...' style={{backgroundImage: 'url(./images/search.png)' }} />
          </div>
          <div className='siteAnnouncementContainer' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              SITE ANNOUNCEMENT CONTAINER
          </div>
          <ImageGalleryContainer photos={this.state.selectedStyle ? this.state.selectedStyle['photos'] : null}/>
          <ProductDetailsContainer 
            slogan={this.state.productInfo.slogan}
            description={this.state.productInfo.description} 
          />
          <RateCategoryNamePriceContainer 
            price={
              !this.state.selectedStyle 
                ? null
                : this.state.selectedStyle['sale_price'] === '0' 
                  ? this.state.selectedStyle['original_price'] 
                  : [this.state.selectedStyle['sale_price'], this.state.selectedStyle['original_price']]
            } 
            category={this.state.productInfo.category} 
            name={this.state.productInfo.name}
          />
          <StylesContainer allStyles={this.state.productStyles} selectedStyle={this.state.selectedStyle} changeSelectedStyle={this.changeSelectedStyle.bind(this)} />
          <SizeQuantityAddContainer 
            selectedSize={this.state.selectedSize} 
            selectedQuantity={this.state.selectedQuantity}
            allSizesAndQuantities={this.state.selectedStyle ? this.state.selectedStyle['skus'] : {}}
            onSizeSelect={this.onSizeSelect.bind(this)}
            onQuantitySelect={this.onQuantitySelect.bind(this)}
          />
          <FeaturesContainer features={this.state.productInfo.features}/>
        </div>
      </div>
    );
  }
}

export default Overview;