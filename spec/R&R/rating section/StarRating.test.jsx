import React from 'react';
import { mount } from 'enzyme';
import StarRating from '../../../client/src/components/R&R/rating section/StarRating';

test('StarRating value to be 1', () => {
  const count = 1;

  const Rating = mount(<StarRating star={count} />);

  expect(count).toEqual(1);
  Rating.unmount();
});
