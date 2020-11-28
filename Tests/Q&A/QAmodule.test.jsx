import React from 'react';
import { shallow } from 'enzyme';
import QAmodule from '../../client/src/components/Q&A/QAmodule';

test('QAmodule mounts with proper data', () => {
  const productId = 5;

  const qaModule = shallow(<QAmodule prodID={productId} />);

  expect(qaModule.state().questions.product_id).toEqual("5");
  expect(qaModule.find('div.qa-header').text()).toEqual('QUESTIONS & ANSWERS');
  
});