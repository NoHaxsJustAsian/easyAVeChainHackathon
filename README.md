# VeHealth

## Overview
Our dApp, VeHealth, addresses the issue where digital health and fitness tracking is a significant hassle without real-world incentives. With the growth of blockchain technology and Big Data, we created this dApp to bridge the gap between health insurance companies and clients through shared fitness goals. 

## Primary Objectives
VeHealth performs three primary functions:

- VeHealth will replace past fitness data management and communication between health providers and clients with a secure Vechain blockchain platform.
- We provide a user interface application to allow one-click seamless upload of personal sustainable fitness data through Apple Health as proof of their activity.
- VeHealth offers customizable smart contracts for the health provider to provide agreed-upon incentives when clients reach fitness goals automatically.

## Competitor Analysis
Several other centralized companies have attempted to access similar fitness data and work with health insurance companies. However, clients would be left out of the picture as they would not receive any incentives for sharing fitness data nor have the possibility of individualized insurance plans. Furthermore, VeHealth can securely transfer the data on the blockchain rather than private transactions for data. A similar business model is that of Tesla's in-house insurance or Progressives Snapshot rewards, where they use their sensors and car data to generate insurance claims that are cheaper or more expensive depending on how the car is driven.

## Tokenization 
Through the VeChainThor blockchain, we offer an Exercise-To-Earn tokenization platform (for VET) through sharing fitness data with health insurance providers. When clients participate in more fitness activities, past research has shown that their health status improves significantly. Therefore, we incentivize clients to earn VET tokens through exercising and sending data to the health insurance companies. Clients are expected to upload their monthly exercise records to redeem rewards. Some metrics to calculate a monthly exercise record include average daily steps and average minutes of exercise per day. 

Health insurance providers have customization options such as the amount of VET to award per successful exercise record or specific exercise quotas to provide incentives; that is, a health insurance provider may select the minimum number of steps in a day to receive VET to be 12,000 rather than the default value of 10,000. In the future this could look like functions of the various health metric inputs to generate a final VET reward value.

## Technologies Used
To construct VeHealth, we utilized VeChain's blockchain to store encrypted (public key offered by health providers) client fitness data in the form of NFTs in the client's wallet. Furthermore, when health insurance providers want to view client fitness data, they may request to view the NFT and use their private key to decrypt it. Additionally, smart contracts are deployed to test whether exercise quotas have been satisfied for VET rewards to be given.

The Health dApp was designed for smart contracts with ReactJS, Firebase Authentication, Firestore, Connex and the VechainThor blockchain. The Health dApp was then deployed to the testnet for pre-production stages. Our product relies on commission-based income from health insurance providers and subscription-based income from clients, with a combined market size of over $1.60 trillion.
