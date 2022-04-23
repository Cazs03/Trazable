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

export default function UseReactQuerySubscription() {
  //   const queryClient = useQuerylient();

  useEffect(() => {
    const websocket = new WebSocket(
      'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self'
    );
    websocket.onopen = () => {
      console.log('connected');
    };
    websocket.onmessage = (event) => {
      //   const data = JSON.parse(event.data);
      if (event.data.pi.include('pipipipi')) {
        console.log(event.data);
      }
      //   const queryKey = [...data.entity, data.id].filter(Boolean);
      //   queryClient.invalidateQueries(queryKey);
    };

    return () => {
      websocket.close();
    };
  }, []);

  return <div></div>;
}
