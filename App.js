/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Image, Text, View } from "react-native";
import AuthNav from "./src/navigation/Auth.nav";
import Splash from "./Splash";

const App = () => {
  const [splash, setSplash] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {splash ? <Splash /> : <AuthNav />}
    </View>
  );
}
export default App;

// import React from 'react'
// import '@walletconnect/react-native-compat'
// import { WagmiConfig } from 'wagmi'
// import { mainnet, polygon, arbitrum } from 'viem/chains'
// import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'
// import { W3mButton } from '@web3modal/wagmi-react-native'
// import { SafeAreaView } from 'react-native'


// const projectId = '9286255fa7e1a83b4373fcbe9df3ad9b'
// const metadata = {
//   name: 'Web3Modal RN',
//   description: 'Web3Modal RN Example',
//   url: 'https://web3modal.com',
//   icons: ['https://avatars.githubusercontent.com/u/37784886'],
//   redirect: {
//     native: 'YOUR_APP_SCHEME://',
//     universal: 'YOUR_APP_UNIVERSAL_LINK.com'
//   }
// }
// const chains = [mainnet, polygon, arbitrum]
// const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// // 3. Create modal
// createWeb3Modal({
//   projectId,
//   chains,
//   wagmiConfig,
//   enableAnalytics: true // Optional - defaults to your Cloud configuration
// })

// export default function App() {
//   return (
//     <SafeAreaView>
//       <WagmiConfig config={wagmiConfig}>
//         <Web3Modal />
//         <W3mButton />
//       </WagmiConfig>
//     </SafeAreaView>

//   )
// }


// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import WalletLogin from './WalletLogin'; // Đường dẫn tới component WalletLogin

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <WalletLogin />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
