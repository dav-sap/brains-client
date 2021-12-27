import React, {useCallback} from "react";
import {mintNFTKey} from './../utils/mint-key';

import './key-button.css';

const KeyButton = ({setHasKey}) => {
	const onGetKeyClick = useCallback(async () => {
		try {
			const txHash = await mintNFTKey();
			if (txHash) {
				setHasKey(true);
			}
		} catch (e) {
			console.error(e);
		}
	}, [setHasKey]);
	
	return (
		<button className="key-btn" onClick={onGetKeyClick}>
			Give Me A KEY!
		</button>
	)
};

export default KeyButton;
