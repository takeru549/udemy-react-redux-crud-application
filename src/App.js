import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const profiles = [
    {name: "Taro",age:10},
    {name: "Takeru", age:20},
    {name: "ken", age: 22}
  ]
  return(
  <div>
    {
      profiles.map((profile, index) => {
         return  <User name={profile.name} age={profile.age} key={index}/>
      })
    }
  </div>
  )
}
//関数コンポーネント
const User = (props) => {
  return <div>Hi Iam {props.name} and {props.age} years old</div>;
}
User.prototypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
