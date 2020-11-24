import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import ReviewButtons from './ReviewButtons';
import SortBy from './SortBy';
import '../../../../styles/R&R/ReviewBody.scss';

const ReviewBody = ({ data, sortBy, metaData }) => {
  let totalReviewCount = 0;

  const [count, setCount] = useState(2);
  const [moreReviews, setMoreReviews] = useState(null);

  useEffect(() => {
    setMoreReviews(true);
  }, []);

  data.map(() => {
    totalReviewCount += 1;
  });

  const addTwo = () => {
    setMoreReviews(false);
    setCount(data.length);
  };

  const scroll = () => {
    return (
      <div className='scroll-body'>
        <ReviewList data={data} count={count} />
      </div>
    );
  };

  return (
    <div>
      <SortBy totalCount={totalReviewCount} sortBy={sortBy} />
      {count > 2 ? scroll() : <ReviewList data={data} count={count} />}
      <ReviewButtons metaData={metaData} data={moreReviews} click={addTwo} />
    </div>
  );
};

export default ReviewBody;
