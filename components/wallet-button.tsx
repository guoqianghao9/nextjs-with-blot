"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";

export function WalletButton() {
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  return (
    <Button
      variant="outline"
      className="gap-2"
      onClick={() => wallet ? null : tonConnectUi.openModal()}
    >
      <Wallet className="w-4 h-4" />
      {wallet ? 
        `${wallet.account.address.slice(0, 6)}...${wallet.account.address.slice(-4)}` : 
        "Connect Wallet"
      }
    </Button>
  );
}