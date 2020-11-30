import React from 'react';
import { shallow } from 'enzyme';
import QAloadmore from '../../client/src/components/Q&A/QAloadmore';
import qaData from "../../client/src/components/Q&A/qa-sample-data";

test('QAloadmore displays questions when passed questions', () => {
    let testSearch = '';
    let testProduct = 'Gummy Bears';
  
    const qaLoad = shallow(<QAloadmore 
      product={testProduct}
      questions={qaData.questions.results} />);
  
   
  });
  