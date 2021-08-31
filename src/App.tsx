import Routes from 'Routes';
import './assets/styles/custom.scss'
import './App.css';
import { useState } from 'react';
import { AuthContext, AuthContextData } from 'AuthContext';

function App() {

  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false
  });

  return (
    <div className="App">
      <AuthContext.Provider value={{authContextData, setAuthContextData}}>
         <Routes />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
