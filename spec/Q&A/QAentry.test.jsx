import React from 'react';
import { shallow } from 'enzyme';
import QAentry from '../../client/src/components/Q&A/QAentry';

test('QAentry mounts with proper data', () => {
  const testEntry = {
    "question_id": 37,
    "question_body": "Why is this product cheaper here than other sites?",
    "question_date": "2018-10-18T00:00:00.000Z",
    "asker_name": "williamsmith",
    "question_helpfulness": 4,
    "reported": 0,
    "answers": {
      68: {
        "id": 68,
        "body": "We are selling it here without any markup from the middleman!",
        "date": "2018-08-18T00:00:00.000Z",
        "answerer_name": "Seller",
        "helpfulness": 4,
        "photos": []
        // ...
      }
    }
  }

  const qaEntry = shallow(<QAentry question={testEntry} />);

  expect(qaEntry.find('span.question').text()).toEqual("Q: Why is this product cheaper here than other sites?<Helpful />");
});