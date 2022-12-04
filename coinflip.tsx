import React from 'react';
import { XNFTProvider, XNFTCard } from 'react-xnft';

const CoinFlip = () => {
  // The XNFT contract address and the user's wallet address
  const contractAddress = '0x...';
  const walletAddress = '0x...';

  // The XNFT token ID of the coin being flipped
  const coinTokenId = '0x...';

  return (
    <XNFTProvider contractAddress={contractAddress} walletAddress={walletAddress}>
      <XNFTCard tokenId={coinTokenId} />
      <button>Flip Coin</button>
    </XNFTProvider>
  );
};

export default CoinFlip;
