import React from 'react'
import { shallow } from 'enzyme'

import Action from '../../components/Action'

test('Should render Action component correctly', () => {
  const wrapper = shallow(
    <Action 
      handlePick={() => {}} 
      hasOptions={true} 
    />
  )

  expect(wrapper).toMatchSnapshot()
})
