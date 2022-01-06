import './App.css';
import rocketImg from './assets/rocket.png';
import { Signup } from './components/Signup';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  // useState hook
  const [alert, setAlert] = useState(null);

  // Function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup showAlert={showAlert} />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
