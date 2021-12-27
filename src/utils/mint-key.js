import axios from 'axios';

const checkForKeyOwnership = async () => {
	try {
		const {data} = await axios.post('/gameKey-checkKeyOwnership', {account: window.ethereum.selectedAddress});
		return data.hasKey;
	} catch (e) {
		console.error(e);
		return false;
	}
};

async function mintNFTKey() {
	try {
		const {data} = await axios.post('/gameKey-mintKey', {account: window.ethereum.selectedAddress});
		const txHash = await window.ethereum.request({
			method: 'eth_sendTransaction',
			params: [data]
		});
		return txHash;
	} catch (e) {
		console.error(e);
		return null;
	}
}

export {
	mintNFTKey,
	checkForKeyOwnership,
}
