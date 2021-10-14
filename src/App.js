import React from 'react';
import { LogIn } from './redux/actions/LogStatus';
import Routes from './Routes';
import { useDispatch } from 'react-redux';

function App() {

  // const [state, setState] = React.useState("")
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // const dispatch = useDispatch();

  // dispatch(LogIn("asdasd"))

  return (

    <Routes 
      // isLoggedIn = {isLoggedIn}
    />
  );
}

export default App;
