import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connectedWebSocket, piesocket } from '../components/constants/WebSockets';
import { gettingDataFromWebSocket } from '../redux/slice/todoListSlice';

export default function UseReactQuerySubscription() {
  const dispatch = useDispatch();
  useEffect(() => {
    piesocket.onopen = () => {
      connectedWebSocket();
    };
    connectedWebSocket().then((success) => {
      if (success) {
        piesocket.onmessage = (event) => {
          if (event.data && event.data.includes('pipipi')) {
            dispatch(gettingDataFromWebSocket(JSON.parse(event.data)));
          }
        };
      }
    });
  }, []);

  return null;
}
