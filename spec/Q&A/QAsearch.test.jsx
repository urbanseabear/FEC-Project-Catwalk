import React from 'react';
import { shallow } from 'enzyme';
import QAsearch from '../../client/src/components/Q&A/QAsearch';

test('QA search bar exists', () => {
  const qaSearch = shallow(<QAsearch />);

  expect(qaSearch.exists('div.qa-search')).toEqual(true);
});

test('QA search bar passes search string', () => {
  const testState = { search: '' };
  const qaSearch = shallow(
    <QAsearch
      search={(e) => {
        testState.search = e.target.value;
      }}
      searchString={testState.search}
    />
  );

  expect(qaSearch.find('input').prop('value')).toEqual('');
  qaSearch.find('input').simulate('change', {
    target: { className: 'qa-search-bar', value: 'what' },
  });
  expect(testState.search).toEqual('what');
});
