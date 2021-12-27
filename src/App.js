import React from 'react';
import Countdown from './countdown/Countdown';
import useWallet from "./wallet/useWallet";
import WalletButtons from './wallet-buttons/wallet-buttons';
import KeyButton from "./key-button/key-button";
import Quests from "./quests/quests";

import './App.css';

const App = () => {
    const {setWalletAddress, walletAddress, hasKey, setHasKey} = useWallet();
    
    return (
        <div className="App">
            <Countdown />
            <WalletButtons walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
            {hasKey === false && walletAddress ? <KeyButton setHasKey={setHasKey} /> : ''}
            {hasKey ? (
                <Quests />
            ) : ''}
            </div>
    );
};

export default App;
