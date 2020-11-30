import React, { useState, useEffect } from 'react';
import '../styles/main.scss';
import Overview from './overview/overview.jsx';
import QAmodule from './Q&A/QAmodule';
import ReviewRatings from './R&R/ReviewRatings';
import Grid from '@material-ui/core/Grid';
import {
  Route,
  generatePath,
  useHistory,
  Switch,
  useLocation,
} from 'react-router-dom';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const App = () => {
  const [productId, setProductId] = useState(41);
  const [productName, setProductName] = useState('');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(100);
  const [toggled, setToggled] = useState(false);
  const [reviewData, setReviewData] = useState([]);
  const hist = useHistory();
  let location = useLocation();
  const icon = toggled ? <Brightness7Icon /> : <Brightness3Icon />;

  const starRatingData = (arr) => {
    return setReviewData(arr);
  };

  const onSearch = (productId) => {
    setProductId(productId);
    updatePath(productId);
  };

  const updatePath = (productId) => {
    const path = generatePath('/product/:id', { id: productId });
    hist.push(path);
  };

  useEffect(() => {
    let pathArr = location.pathname.split('/');
    let pid = pathArr[pathArr.length - 1];
    setProductId(pid);
  });

  const onProductNameChange = (productName) => {
    setProductName(productName);
  };

  return (
    <Switch>
      <Route exact path='/'>
        <div className={toggled ? 'app-dark' : 'app-light'}>
          <div className='darkIcon' onClick={() => setToggled(!toggled)}>
            <div>{icon}</div>
          </div>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Overview
                productId={productId}
                onSearch={onSearch}
                onProductNameChange={onProductNameChange}
                count={count}
              />
            </Grid>
            <Grid style={{ margin: '0% 10%' }} item xs={12}>
              <QAmodule prodID={productId} />
            </Grid>
            <Grid style={{ margin: '0% 10%' }} item xs={12}>
              <ReviewRatings
                productId={productId}
                page={page}
                count={count}
                productName={productName}
                starRatingData={starRatingData}
              />
            </Grid>
          </Grid>
        </div>
      </Route>
      <Route exact path='/product/:id'>
        <div className={toggled ? 'app-dark' : 'app-light'}>
          <div className='darkIcon' onClick={() => setToggled(!toggled)}>
            <div>{icon}</div>
          </div>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Overview
                productId={productId}
                onSearch={onSearch}
                onProductNameChange={onProductNameChange}
              />
            </Grid>
            <Grid style={{ margin: '0% 10%' }} item xs={12}>
              <QAmodule prodID={productId} />
            </Grid>
            <Grid style={{ margin: '0% 10%' }} item xs={12}>
              <ReviewRatings
                productId={productId}
                page={page}
                count={count}
                productName={productName}
                starRatingData={starRatingData}
              />
            </Grid>
          </Grid>
        </div>
      </Route>
    </Switch>
  );
};

export default App;
