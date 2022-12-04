import React, { useState } from 'react';
import { XNFTProvider, XNFTCard } from 'react-xnft';

const CoinFlip = () => {
  // The XNFT contract address and the user's wallet address
  const contractAddress = '0x...';
  const walletAddress = '0x...';

  // The XNFT token ID of the coin being flipped
  const coinTokenId = '0x...';

  // Initialize state variables to track the result of the coin flip
  // and whether the game is in progress or not
  const [result, setResult] = useState(null);
  const [inProgress, setInProgress] = useState(false);

  // Function to flip the coin and determine the result
  const flipCoin = () => {
    // Set the game to be in progress
    setInProgress(true);

    // Generate a random number between 0 and 1
    const randNum = Math.random();

    // If the random number is less than 0.5, set the result to "heads"
    // Otherwise, set the result to "tails"
    if (randNum < 0.5) {
      setResult("heads");
    } else {
      setResult("tails");
    }
  };

  // Function to reset the game and start over
  const reset = () => {
    setResult(null);
    setInProgress(false);
  };

  // Render the coin flip game UI
  return (
    <XNFTProvider contractAddress={contractAddress} walletAddress={walletAddress}>
      <XNFTCard tokenId={coinTokenId} />
      {inProgress ? (
        <>
          {/* If the game is in progress, show the result of the coin flip */}
          <p>Result: {result}</p>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          {/* If the game is not in progress, show the button to start the coin flip */}
          <button onClick={flipCoin}>Flip Coin</button>
        </>
      )}
    </XNFTProvider>
  );
};

export default CoinFlip;
