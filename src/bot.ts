import {ethers} from "ethers";

import { BitkubAPI } from "./bitkub-api";
import config from "../config";
import { KUBTopSignalPool__factory } from "../typechain-types";

export class Bot {

    private readonly bitkubAPI = new BitkubAPI();

    public async run() {
        console.log("Bot started");
        setInterval(async () => {
            await this.runInternal();
        }, config.interval);
    }

    private async runInternal() {
        console.log("Running internal");
        for (let i = 0; i < config.privateKeys.length; i++) {
            console.log(`Placing bid for wallet ${i}`);
            try {
                await this.placeRandomBid(i);
            } catch (error) {
                console.error(`Error placing bid for wallet ${i}: ${error}`);
            }
        }
    }

    private async placeRandomBid(walletIndex: number) {
        const price = await this.bitkubAPI.getCurrentPriceUSD("KUB");
        const randomOffset = Math.random() * 0.01 * (Math.random() > 0.5 ? 1 : -1);
        const targetPrice = price + randomOffset;
        const amount = Math.floor(Math.random() * 1) + 1;

        const randomMinutes = Math.floor(Math.random() * (240 - 30 + 1)) + 30; // Random minutes between 30 and 240 (4 hours)
        const timestamp = this.getClosestTimestamp(Date.now() + randomMinutes * 60 * 1000);

        await this.placeBid(walletIndex, timestamp, targetPrice, amount);
    }

    private async placeBid(walletIndex: number, timestamp: number, targetPrice: number, amount: number) {
        // Initialize ethers contract and provider
        const provider = new ethers.JsonRpcProvider(config.rpcUrl);
        const wallet = new ethers.Wallet(config.privateKeys[walletIndex], provider);
        const contract = KUBTopSignalPool__factory.connect(config.contractAddress, wallet);
        const parsedTargetPrice = ethers.parseEther(targetPrice.toString());
        const parsedAmount = amount.toString();

        const paidAmount = ethers.parseEther("0.01") * BigInt(parsedAmount);
        await contract.placeBidNext(timestamp, parsedTargetPrice, parsedAmount, wallet.address, { value: paidAmount.toString() });
        console.log(`Placed bid for ${amount} Ticket at ${targetPrice} USD at timestamp ${timestamp}`);
    }

    private getClosestTimestamp(timestamp: number) {
        const timePeriodMinutes = 30;
        return Math.floor((Math.floor(timestamp / 1000) + timePeriodMinutes * 60) / (timePeriodMinutes * 60)) * (timePeriodMinutes * 60);
    }
}
