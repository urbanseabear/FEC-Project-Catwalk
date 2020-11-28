import React from 'react';
import { mount } from 'enzyme';
import QAmodule from '../../../client/src/components/Q&A/QAmodule';

test('StarRating value to be 1', () => {
  const count = 1;

  const Rating = mount(<StarRating star={count} />);

  expect(count).toEqual(1);
  Rating.unmount();
});