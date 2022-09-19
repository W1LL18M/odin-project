import './App.css';
import MyComponent from './MyComponent';

/*
class User {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

function formatName(user) {
  return user.fname + " " + user.lname;
}
*/

function App() {

  function onClickBtn() {
    alert('Button has been clicked!');
  }

  return (
    <div className="App">
      <MyComponent fname="William" lname="Liu" buttonClicked={onClickBtn}/>
    </div>
  );
}

export default App;
