import React from 'react';
import { Button } from 'react-native';
import { useWallet } from '@solana/wallet-adapter-react-native';
import { WalletModalProvider, useWalletModal } from '@solana/wallet-adapter-react-native/ui';

const WalletLogin = () => {
    const { connect } = useWallet();
    const { showWallet } = useWalletModal();

    const handleConnect = async () => {
        try {
            await connect();
        } catch (error) {
            console.error('Failed to connect to wallet: ', error);
        }
    };

    return (
        <Button onPress={handleConnect} title="Connect to Phantom" />
    );
};

export default WalletLogin;
