// eslint-disable-next-line prefer-const
export let piesocket: WebSocket = new WebSocket(
  'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self'
);

export function connectedWebSocket() {
  return new Promise((resolve) => {
    resolve(true);
  });
}
