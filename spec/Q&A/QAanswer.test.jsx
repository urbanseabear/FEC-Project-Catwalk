import React from 'react';
import { shallow } from 'enzyme';
import QAanswer from '../../client/src/components/Q&A/QAanswer';

test('QAanswer mounts with proper data', () => {
  const testAnswer = {
    "id": 78,
    "body": "9 lives",
    "date": "2019-11-12T00:00:00.000Z",
    "answerer_name": "iluvdogz",
    "helpfulness": 31,
    "photos": []}

  const qaAnswer = shallow(<QAanswer answer={testAnswer} />);

  expect(qaAnswer.find('div.answer').text()).toEqual('A: 9 lives');

  expect(qaAnswer.find('span.answerer').text()).toEqual('by iluvdogz, November 11, 2019  |');
});