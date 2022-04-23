// eslint-disable-next-line prefer-const
export let piesocket: WebSocket = new WebSocket(
  'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self'
);

export function connectedWebSocket() {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}
export function connectPieSocket() {
  //   piesocket = new WebSocket(
  //     'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self'
  //   );
  //   piesocket.onopen = () => {
  //     // console.log('connected');
  //     piesocket.send('Hello Server!');
  //   };
}
export function sendMessagePieSocket() {
  //   piesocket = new WebSocket(
  //     'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self'
  //   );
  //   piesocket.onopen = () => {
  //     // console.log('connected');
  //     //   piesocket.send('Hello Server!');
  //     piesocket.send('Hello Server!');
  //   };
}
