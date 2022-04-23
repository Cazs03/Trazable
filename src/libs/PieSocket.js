// eslint-disable-next-line @typescript-eslint/no-var-requires
// const PieSocket = require('piesocket-nodejs');
// var piesocket = new PieSocket({
//   clusterId: 'demo',
//   apiKey: 'oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm',
//   secret: 'd8129f82f8dd71910aa4a7efa30a7297',
// });

// piesocket.subscribe(1).then((channel) => {
//   //Channel connection is established
//   channel.listen('event-name', function (data, meta) {
//     console.log('event-name received: ', data, meta);
//   });
// });

// // eslint-disable-next-line no-undef
// channel.on('open', function (event) {
//   console.log('PieSocket connected!');
// });

// export function aaa() {
//   console.log('aa');
// }
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
            dispatch(gettingDataFromWebSocket(JSON.parse(event.data).todo));
          }
        };
      }
    });
  }, []);

  return null;
}
