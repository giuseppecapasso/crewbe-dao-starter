import { useAddress, useMetamask } from '@thirdweb-dev/react';
const App = () => {
  // Use the hooks thirdweb give us.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Indirizzo:", address);

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Benvenuto su CrewbeDAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connetti il tuo wallet
        </button>
      </div>
    );
  }

  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
      <h5>👋 {address}</h5>
    </div>);
};

export default App;
