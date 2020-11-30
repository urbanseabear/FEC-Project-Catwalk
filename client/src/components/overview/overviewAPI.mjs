import axios from 'axios';

const apiCalls = {

  // getProducts: () => {
  //   axios.get(url + 'products')
  //     .then(({ data }) => console.log(data))
  //     .catch(err => console.log(err));
  // },

  getProduct: (productId) => {
    return axios.get(`http://3.21.164.220/products/${productId}`)
      .catch(err => console.log(err));
  },
  getProductStyles: (productId) => {
    return axios.get(`http://3.21.164.220/products/${productId}/styles`)
      .catch(err => console.log(err));
  },
  addToCart: (skuID) => {
    skuID = parseInt(skuID);
    axios.post('http://3.21.164.220/cart', {sku_id: skuID})
      .then(data => console.log('it worked!'))
      .catch(err => console.log(err));
  }
};

export default apiCalls;
