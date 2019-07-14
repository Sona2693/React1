import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => { 
  const [personsState,setPersonsState] = useState({
  persons: [
    {
      name: 'Sona', age:26
    },
    {
      name:'Shubhu', age:28
    },
    {
      name:'Ankit', age:24
    }
  ],
//otherState: 'Some other Value' 
});
const [otherState, setOtherState] = useState('some other values')
console.log(personsState,otherState);
const switchNameHandler = (newName) => {
 // console.log('was Clicked !');
  setPersonsState({ persons: [
  {
    name: newName, age:26
  },
  {
    name:'Shubhu', age:28
  },
  {
    name:'Ankit', age:25
  }
  ]
  });
};
const nameChangedHandler = (event) =>{
  setPersonsState({
    persons:[
      {name: 'Sona', age:26},
      {name:event.target.value, age:28},
      {name:'Ankit', age:24}
    ]
  });
};
const style = {
  backgroundColor:'white',
  font:'inherit',
  borde:'1px solid blue',
  padding:'8px',
  cursor:'pointer'
};
    return (
       <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>This is really working!</p>
         <button style={style} onClick ={() => switchNameHandler('Sonali')}>Switch Name</button>
          <Person name={personsState.persons[0].name} 
          age={personsState.persons[0].age}/>
          <Person name={personsState.persons[1].name}
             age={personsState.persons[1].age}
             click={switchNameHandler.bind(this,'Aniket')}
             changed={nameChangedHandler}> My Hobbies: Racing</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
          </div>
     );
  //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'I\'m a React App'));
    }


export default app;
// state = {
//   persons: [
//     {
//       name: 'Sona', age:26
//     },
//     {
//       name:'Shubhu', age:28
//     },
//     {
//       name:'Ankit', age:24
//     }
//   ],
// otherState: 'Some other Value' 
// }

// const switchNameHandler = () => {
// console.log('was Clicked !');
// this.setState({ persons: [
// {
//   name: 'Sonali', age:26
// },
// {
//   name:'Shubhu', age:28
// },
// {
//   name:'Ankit', age:25
// }
// ]
// });
// }