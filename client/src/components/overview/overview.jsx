import React from 'react';
import './styles.scss';
import axios from 'axios';
import ImageGalleryContainer from './imageGalleryContainer/imageGalleryContainer.jsx';
import ProductDetailsContainer from './productDetails/productDetailsContainer';
import RateCategoryNamePriceContainer from './rateCategoryNamePrice/rateCategoryNamePrice';
import StylesContainer from './stylesContainer/styles';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      productStyles: [],
      currentProduct: {},
    };
  }

  componentDidMount() {
    axios.get(`http://3.21.164.220/products/${5}/styles`)
      .then(({ data }) => {
        this.setState({
          productStyles: data.results,
          currentProduct: data.results[0]
        });
      })
      .catch(err => console.log(err));

    axios.get(`http://3.21.164.220/products/${5}`)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          productInfo: data
        });
      })
      .catch(err => console.log(err));
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
          <ImageGalleryContainer photos={this.state.currentProduct.photos}/>
          <ProductDetailsContainer />
          <RateCategoryNamePriceContainer 
            price={this.state.currentProduct['original_price']} 
            category={this.state.productInfo.category} 
            name={this.state.productInfo.name}
          />
          <StylesContainer styles={this.state.productStyles} />
          <SizeQuantityAddContainer />
          <div className='otherStuffContainer'>
            Other Stuff
          </div>
    
        </div>
      </div>
    );
  }
}

export default Overview;