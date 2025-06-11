import { Injectable } from '@nestjs/common';
// import { ethers } from 'ethers';
import { verifyMessage } from 'ethers';

// import { verifyMessage } from '@ethersproject/wallet';


@Injectable()
export class AuthService {
    verifySignature(message: string, signature: string) {
        try {
          const signer = verifyMessage(message, signature);
          return { wallet: signer };
        } catch {
          return { error: 'Invalid signature' };
        }
      }
    }      
      
      
