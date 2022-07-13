import React from 'react';

// function App() {

//   const greeting = "Hi Takeru";
//   const dom = <h1 className='foo'>{greeting}</h1>;  
//   const domTextBox = <input type='text' onClick={() => {console.log('Why did you come to Japan?')} } />;
//   const returnDom = domTextBox;
//   return (

//     <React.Fragment>
//       <label htmlFor='bar'>test</label> 
//       <input type='text' onClick={() => {console.log('Why did you come to Japan?')} } />
//     </React.Fragment>
//     // <div>
//     //   <h1>Hello world!</h1>
//     //   <h2>Hello World222</h2>
//     // </div>
//   );
//}

function App() {
  const profiles = [
    {name: "Taro",age:10},
    {name: "Takeru", age:20},
    {name: "ken"}
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

User.defaultProps = {
  age :1
}
export default App;
