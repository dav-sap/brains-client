import React, {useCallback, useMemo} from "react";
import './wallet-buttons.css';

const connectWallet = async () => {
	try {
		const addressArray = await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		return {
			address: addressArray[0],
		};
	} catch (err) {
		console.error(err);
		return {
			address: "",
		};
	}
};

const WalletButtons = ({walletAddress, setWalletAddress}) => {
	const hasMetaMask = !!window.ethereum;
	
	const connectWalletClicked = useCallback(async () => {
		if (hasMetaMask) {
			const {address} = await connectWallet();
			setWalletAddress(address);
			localStorage.setItem('wallet', address);
		} else {
			window.open("https://metamask.io/download.html", "_blank");
		}
	}, [setWalletAddress, hasMetaMask]);
	
	const onDisconnectClick = useCallback(async () => {
		setWalletAddress('');
		localStorage.setItem('wallet', '');
	}, [setWalletAddress]);
	
	const btnContent = useMemo(() => {
		if (hasMetaMask && walletAddress && walletAddress.length > 0) {
			return (
				"Connected: " +
				String(walletAddress).substring(0, 6) +
				"..." +
				String(walletAddress).substring(38)
			);
		} else {
			if (hasMetaMask) {
				return <span>Connect Wallet</span>;
			} else {
				return 'You must install Metamask 🦊';
			}
		}
	}, [walletAddress, hasMetaMask]);
	
	return (
		<div className="wallet-btns-container">
			<button className="btn-wallet" onClick={connectWalletClicked}>
				{btnContent}
			</button>
			{walletAddress ? (
				<button className="btn-wallet" onClick={onDisconnectClick}>
					Disconnect
				</button>
			) : ''}
		</div>
	)
};

export default WalletButtons;
