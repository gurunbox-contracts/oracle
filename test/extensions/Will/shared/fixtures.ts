import { expect } from 'chai';
import { ethers } from "hardhat";
import { Contract, ContractFactory, Wallet } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { MockProvider } from 'ethereum-waffle';
const {
    BN,           // Big Number support
    constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');
const provider = new MockProvider();

interface WillFactoryFixture {
    willFactory: Contract;
}

export async function willFactoryFixture(
    name: string,
    owner: SignerWithAddress
    ): Promise<WillFactoryFixture> {
    let WillFactory = await ethers.getContractFactory("WillFactory");
    const willFactory = await WillFactory.deploy(name, owner.address);
    return { willFactory };
}

interface WillFixture extends WillFactoryFixture {
    will: Contract;
    token20: Contract;
    token721: Contract;
}

// export async function willFixture(
//     name: string,
//     owner: SignerWithAddress,
//     receiver: SignerWithAddress
// ): Promise<WillFixture> {
//     const { willFactory } = await willFactoryFixture(name, owner);
//     await willFactory.connect(owner).createWill(receiver.address);
//     return { willFactory, will, token20, token721 }
// }
