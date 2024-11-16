import dotenv from "dotenv";

dotenv.config();

const getArrayEnv = (env: string) => {
    return process.env[env]?.split(",") || [];
}

const config = {
    rpcUrl: process.env.RPC_URL || "",
    privateKeys: getArrayEnv("PRIVATE_KEYS"),
    contractAddress: process.env.CONTRACT_ADDRESS || "",
    interval: Number(process.env.INTERVAL || (60 * 1000)),
}

export default config;