import React from 'react'
import { shallow } from 'enzyme'

import Header from '../../components/Header'

test('Should render Header correctly without subtitle', () => {
  const wrapper = shallow(<Header />)

  expect(wrapper).toMatchSnapshot()
})

test('Should render Header correctly with subtitle', () => {
  const wrapper = shallow(<Header subtitle="test subtitle" />)
  expect(wrapper).toMatchSnapshot()
})

test('Should set default title prop', () => {
  
  const wrapper = shallow(<Header />)
  const h1 = wrapper.find('h1').at(0)

  expect(h1.text()).toBe('Indecision')
})

test('Should set title prop correctly', () => {
  const wrapper = shallow(<Header title="test title" />)
  const h1 = wrapper.find('h1').at(0)

  expect(h1.text()).toBe('test title')
})

test('Should set subtitle prop correctly', () => {
  const wrapper = shallow(<Header subtitle="test subtitle" />)
  const h2 = wrapper.find('h2').at(0)

  expect(h2.text()).toBe('test subtitle')
})
