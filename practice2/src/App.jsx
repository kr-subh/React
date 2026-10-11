
// //USE_STATE


// // import React from 'react'
// // import { useState } from 'react';

// // const App = () => 
// //   {

// //     // const[like, setLike]= useState('👍');
// //     // const[user, setUser]=useState({name:'subhash', age:20});
// //     const[user, setUser]=useState([10,20,30,40]);

// //     // const[arr, setArr]=useState([10,20,30,40]);
    


// //     const increase = () =>
// //      {
// //     //   if (like=='👍'){
// //     //     setLike('👎');
// //     // }
// //     // else{
// //     //   setLike('👍');
// //     // }

// //     // setUser('Dilip'); 
// //     // setArr([100,200,300,400]);

// //     // const newUser ={...user};
// //     // newUser.name='Dilip';
// //     // newUser.age=21;
// //     // setUser(newUser);

// //     const newUser=[...user];
// //     newUser.push(100,200,300,400);
// //     newUser.pop();
// //     setUser(newUser);
    

// //   }


// //   return (


// //     <div>
// //       <h1>hello</h1>
// //       {/* <h1>{arr}</h1> */}
// //       {/* <h1>{like} </h1> */}
// //       {/* <h2>My name is {user.name} and age {user.age}</h2> */}
// //       <h1>{user}</h1>
// //       <button onClick={increase}>Click Me!</button>
// //       {/* <button onClick={decrease}>Decrement</button> */}
      
// //     </div>
// //   )
// // }


// // export default App



// // FORM



// // import React from 'react'

// // const App = () => {

// //    const nooSubmit=(e)=>{
// //     e.preventDefault();
// //     console.log('Form Submitted');

// //     }
// //   return (

   
// //     <div>

// //       <form onSubmit={(e)=>{
// //         nooSubmit(e)
// //       }}>

// //         <input type="text" placeholder='Name' />
// //         <button>Submit</button>
// //       </form>
      
// //     </div>
// //   )
// // }

// // export default App



// //. Two Way Binding

// import React from 'react'
// import { useState } from 'react';

// const App = () => {

//     const [before, setBefore]=useState('');


//   const whenClicked=(e)=>{
//     e.preventDefault();
//     console.log('Form Submitted by', before);

//     setBefore('');


//     // setBefore(value);


//   }
//   return (
//     <div>

//       <form onSubmit={(e)=>{
//         whenClicked(e);

//       }}>
//         <input type="text"
//           placeholder='Your Name' 
//           value={before}
//           onChange={(e)=>{
//             setBefore(e.target.value)
//           }}
//         />
//         <button>Submit </button>



//       </form>
      
//     </div>
//   )
// }

// export default App





import React from 'react'
import students from './Data'
import Card from './Card'

const App = () => {
  return (
    <div>

      {students.map(function(students){
        return(
          <Card 
            props={students}
          />
        )
      })}



    </div>
    

      

  )
}

export default App




