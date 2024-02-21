// import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import Todos from  './MyComponent/Todos';

function App() {

  const onDelete = (todo) =>{
    console.log("I am ondelete of todo")
  }

  let todos = [
    {
      sno : 1 , 
      title : "Go to the gym",
      desc : "Yon need to go to the gym for exercise "
    },
    {
      sno : 2 , 
      title : "Go to the Market",
      desc : "Yon need to go to the Market for shopping "
    },
    {
      sno : 3 , 
      title : "Go to the college",
      desc : "Yon need to go to the gym for studies "
    }
  ]

  return (
    <>
    <Header title = {'Title'} searchBar={false}/>
    <Todos todos = {todos} onDelete={onDelete}/>
    </>
  );
}

export default App;
