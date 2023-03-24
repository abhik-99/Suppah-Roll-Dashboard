import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'

import { configureChains, createClient } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
export const projectId = '12cf82d0acba0e03478b8eb3b6b63a95'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
export const ethereumClient = new EthereumClient(wagmiClient, chains)

