import React from 'react'
import {shallow} from 'enzyme'
import Login from './components/home'
import Register  from './components/register'
import AllJobs from "./components/all-jobs.component";
import AddJob from "./components/add-job.component";


it ('should render the Welcome text correctly', ()=>{
  const wrapper = shallow(<Login />)
  const para= wrapper.find('h2');
  const text = para.text();

  expect(text).toBe(' Sign In')

})

it ('should render the Welcome text correctly', ()=>{
  const wrapper = shallow(<Register />)
  const para= wrapper.find('h3');
  const text = para.text();

  expect(text).toBe(' Sign Up')

})

it ('should render the Welcome text correctly', ()=>{
  const wrapper = shallow(<AllJobs />)
  const para= wrapper.find('h3');
  const text = para.text();

  expect(text).toBe('Jobs Available')

})

it ('should render the Welcome text correctly', ()=>{
  const wrapper = shallow(<AddJob />)
  const para= wrapper.find('h3');
  const text = para.text();

  expect(text).toBe(' Create New Jobs')

})

