import {useEffect, useState} from 'react';
import {checkForKeyOwnership} from "./../utils/mint-key";

const useWallet = () => {
	const [walletAddress, setWalletAddress] = useState('');
	const [hasKey, setHasKey] = useState(null);
	
	useEffect(() => {
		const checkKey = async () => {
			if (walletAddress) {
				const res = await checkForKeyOwnership();
				setHasKey(res);
			} else {
				setHasKey(null);
			}
		};
		checkKey();
	},  [walletAddress]);
	
	useEffect(() => {
		const wallet = localStorage.getItem('wallet');
		if (wallet && window.ethereum && window.ethereum.selectedAddress) {
			setWalletAddress(wallet);
		}
		const addWalletListener = () => {
			if (window.ethereum) {
				window.ethereum.on("accountsChanged", (accounts) => {
					if (accounts.length > 0) {
						setWalletAddress([0]);
					} else {
						setWalletAddress("");
					}
				});
			}
		};
		addWalletListener();
	}, []);
	
	return {walletAddress, setWalletAddress, hasKey, setHasKey};
};

export default useWallet;
