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
  return(
  <div>
    <Dog />
    <Dog />
    <Dog />
    <Dog />
  </div>
  )

}

//関数コンポーネント
const Dog = () => {
  return <div>bowbow</div>;
}
export default App;
