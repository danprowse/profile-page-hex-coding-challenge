import React from 'react';
import ReactDOM from 'react-dom';
import Skills from '../Skills';
import SkillsBar from '../SkillsBar';

import { render } from '@testing-library/react'

const testSkillData = [
  {
    title: "Finance",
    skills: [ 
    {
      name: 'Banking' 
    }
  ]
  }
]
it("renders without crashing", ()=> {
  const div = document.createElement("div");
  ReactDOM.render(<Skills />, div);
})

it("renders correctly", () => {
const test = render(<SkillsBar skills={testSkillData} />)
})