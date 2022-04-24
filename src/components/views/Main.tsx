import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UseReactQuerySubscription from '../../libs/PieSocket';
import { selectGetLogin } from '../../redux/slice/loginSlice';
import Login from '../features/Login';
import Todos from '../features/Todos';

export const NetworkStatusContext = React.createContext(true);
export default function Main() {
  const isLogged: boolean = useSelector(selectGetLogin);
  const [NetworkStatus, setNewworkstatus] = useState(true);
  useEffect(() => {
    window.addEventListener('offline', () => {
      setNewworkstatus(false);
    });
    window.addEventListener('online', () => {
      setNewworkstatus(true);
    });
  }, []);

  return (
    <NetworkStatusContext.Provider value={NetworkStatus}>
      <div>
        <Login />
        <UseReactQuerySubscription />
        {isLogged && <Todos />}
      </div>
    </NetworkStatusContext.Provider>
  );
}
