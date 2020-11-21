import axios from 'axios';

const url = 'http://3.21.164.220/';

const apiCalls = {

  // getProducts: () => {
  //   axios.get(url + 'products')
  //     .then(({ data }) => console.log(data))
  //     .catch(err => console.log(err));
  // },

  getProduct: (productId) => {
    return axios.get(url + `products/${productId}`)
      .catch(err => console.log(err));
  },
  getProductStyles: (productId) => {
    return axios.get(url + `products/${productId}/styles`)
      .catch(err => console.log(err));
  }
};

export default apiCalls;
