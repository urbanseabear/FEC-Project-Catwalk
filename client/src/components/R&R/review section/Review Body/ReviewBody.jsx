import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import ReviewButtons from './ReviewButtons';
import SortBy from './SortBy';
import '../../../../styles/R&R/ReviewBody.scss';

const ReviewBody = ({ data, sortBy, metaData, filteredData }) => {
  let totalReviewCount = 0;

  const [count, setCount] = useState(2);
  const [moreReviews, setMoreReviews] = useState(true);

  // if 2 or less reviews for given product, set moreReviews to false/
  // if more than 2, allow scroll and show more button to appear
  useEffect(() => {
    data.length <= 2 ? setMoreReviews(false) : setMoreReviews(true);
  }, [data]);

  data.map(() => {
    totalReviewCount += 1;
  });

  // clicking show more button lists rest of reviews
  const addTwo = () => {
    setMoreReviews(false);
    setCount(data.length);
  };

  // makes review list scrollable if more than 2 reviews
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
      {count > 2 ? (
        scroll()
      ) : (
        <ReviewList
          data={filteredData.length > 0 ? filteredData : data}
          count={count}
        />
      )}
      <ReviewButtons metaData={metaData} data={moreReviews} click={addTwo} />
    </div>
  );
};

export default ReviewBody;
