import type { AppProps } from "next/app";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import celoGroups from "@celo/rainbowkit-celo/lists";
import Layout from "../components/Layout";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { publicProvider } from "wagmi/providers/public";
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  optimismGoerli,
  polygonMumbai,
  arbitrumGoerli,
  goerli,
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import NFTPage from "./NFTPage";

const queryClient = new QueryClient();
const projectId = "071c50c0ebe4fb679de0a950913210fb"; // Replace with your provided projectId

// Define chains array
const chains = [
  Celo,
  Alfajores,
  mainnet,
  polygon,
  optimism,
  arbitrum,
  optimismGoerli,
  polygonMumbai,
  arbitrumGoerli,
  goerli,
];

const { publicClient } = configureChains(chains, [publicProvider()]);

const connectors = celoGroups({
  chains,
  projectId,
  appName: (typeof document === "object" && document.title) || "EcoMarket",
});

const appInfo = {
  appName: "EcoMarket",
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient: publicClient,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={appInfo} coolMode={true}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
