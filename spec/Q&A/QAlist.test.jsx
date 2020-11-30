import React from 'react';
import { shallow } from 'enzyme';
import QAlist from '../../client/src/components/Q&A/QAlist';
import qaData from "../../client/src/components/Q&A/qa-sample-data";

test('QAlist displays proper data', () => {
  let testSearch = '';
  let testProduct = 'Gummy Bears';

  const qaList = shallow(<QAlist 
    product={testProduct}
    questions={qaData.questions.results}
    search={testSearch.length > 2 ? testSearch : null} />);

  expect(qaList.find('div#qa-list')).toEqual({});

});
