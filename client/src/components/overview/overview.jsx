import React from 'react';
import './styles.scss';
import ImageGalleryContainer from './imageGalleryContainer/imageGalleryContainer.jsx';
import ProductDetailsContainer from './productDetails/productDetailsContainer';
import RateCategoryNamePriceContainer from './rateCategoryNamePrice/rateCategoryNamePrice';
import StylesContainer from './stylesContainer/styles';
import SizeQuantityAddContainer from './sizeQuantityAddContainer/sizeQuantityAdd';
import FeaturesContainer from './featuresContainer/featuresContainer';
import SearchBar from './seachBar/searchBar';
import apiCalls from './overviewAPI.mjs';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSize: null,
      selectedQuantity: null,
      selectedStyle: null,
      productInfo: {},
      productStyles: [],
      // photosArray: null,
    };
  }

  apiRequests(productId) {
    apiCalls.getProductStyles(productId)
      .then(({data}) => {
        this.setState({
          productStyles: data.results,
          selectedStyle: data.results.find(obj => obj['default?'] === 1),
          //photosArray: data.results.find(obj => obj['default?'] === 1)['photos']
        });
      })
      .catch(err => console.log(err));

    apiCalls.getProduct(productId)
      .then(({ data }) => {
        this.setState({
          productInfo: data
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.apiRequests(this.props.productId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.apiRequests(this.props.productId);
    }
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
    console.log(this.props.productId);
    return (
      <div className='masterContainer' style={{display: 'flex', justifyContent: 'center'}}>
        <div className='overviewContainer'>
          <div className='headerContainer'>
            <h1>Company Logo</h1>
            <SearchBar 
              onSearch={this.props.onSearch} 
            />
          </div>
          <div className='siteAnnouncementContainer' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              SITE ANNOUNCEMENT CONTAINER
          </div>
          <ImageGalleryContainer photos={this.state.selectedStyle ? this.state.selectedStyle['photos'] : null}/>
          {/* <ImageGalleryContainer photos={this.state.photosArray} /> */}
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