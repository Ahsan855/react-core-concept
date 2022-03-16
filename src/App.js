import logo from './logo.svg';
import './App.css';
const Number =1234;
const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer1'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'sakib', job: 'Singe3'},
  {name: 'Riyaz', job: 'Singer4'}
]
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}
function App() {
  const nayoks = ['Rubel', 'Bappa', 'Sakib', 'Jashim', 'salman shah', 'Riyaz' , 'Razzak', 'Anower']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li><strong>Name :</strong> {nayok}</li>)
      }
      {/* {
         nayoks.map(nayok => <Person name= {nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* sortcut in this */}
       {/* <Person name={nayoks[0]} nayika ="mousumi"></Person>
       <Person name={nayoks[1]} nayika ="mahi"></Person>
       <Person name={nayoks[2]} nayika="kopila"></Person> */}
       
       <h1>new component</h1>
       <Ahsan name="Ahsan" nayika="Habiba"></Ahsan>
       <Ahsan name="Rifat" nayika="Hani"></Ahsan>
    </div>
  );
}
function Person(props){
  return (
    <div className='person'>
      <h1>Ahsan habib</h1>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
  </div>
  )
}
function Ahsan(props){
  // console.log(props);
  return (
    <div className='container'>
      <h1>Name :{props.name}</h1>
      <h2>Nayika: {props.nayika}</h2>
    </div>
  )
}

export default App;
