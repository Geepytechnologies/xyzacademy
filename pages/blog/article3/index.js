import Image from 'next/image'
import React from 'react'
import Bottomnav from '../../../components/bottomnav/Bottomnav'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/Header'
import Navbar from '../../../components/navbar/Navbar'

export default function Index() {
    const Article = () => (
        <div className='p-[20px]'>
            <article>
            <h1 className='font-[700] text-[20px]'>THE UNIQUE DISPARITY BETWEEN TOKENS AND COINS.</h1>
            {/* <div className='w-[500px] h-[300px] relative'>
            <Image src={'/article1.png'} layout='fill' objectFit='cover' objectPosition={'center'} />
            </div> */}
            <h2>At some point in everyone's crypto journey, some of us may have confused a coin with a token. Actually tokens and coins are quite similar on a basic level, they both can be used to process payments. But the main difference boils down to usage. There are some market places that do not accept tokens but coins, and also there are things you can do with tokens but not with coins.
            </h2>
            <h1 className='font-[700] text-[20px]'>WHAT IS A COIN?</h1>
            <h2>A coin is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority such as the government or bank to maintain it. Coins do not exist in a physical form (like paper money) and are typically not issued by a central authority. The first decentralized cryptocurrency was bitcoin, which was first released as open source software in 2009. As of march 2022 there were more than 9000 other crypto currencies in the market place.
            </h2>
            <h1 className='font-[700] text-[20px]'>CHARACTERISTICS OF COIN.</h1>
              <ul>
                <li><span className='font-[600] text-[18px]'>A coin operates on its blockchain: </span>A blockchain keeps track of all transactions that involves its native crypto coin. This means that when you make a transaction and pay someone with ethereum, the receipt goes to the ethereum blockchain. If the same person later pays you back on bitcoin the receipt also goes to the bitcoin blockchain. Every transaction is protected by encryption and is accessible by any member of the network. </li>
                <li><span className='font-[600] text-[18px]'>Coins are trustless: </span>Bitcoin and Ethereum is trustless because it was built in a way that you don't have to trust anybody else in order for the network to function. Everyone on the network has a copy of the ledger, so there's no need to trust any organization or third party because there's no point trusting them when you can just verify against the ledger because you have a copy of it.</li>
                <li><span className='font-[600] text-[18px]'>Coins are immutable: </span>
                  <ol className='list-decimal'>
                    <li>It should be impossible for anyone but the owner of the private key to move funds.</li>
                    <li>It should be highly impossible or difficult to rewrite history.</li>
                    <li>All transactions are recorded on the blockchain.</li>
                  </ol>
                </li>
                <li><span className='font-[600] text-[18px]'>Cryptocurrency coins are decentralized: </span>“Blockchains are politically decentralized (no one controls them) and are architecturally decentralized (No infrastructural central point of failure) but they are logically centralized (there is one commonly agreed state and the system behaves like a simple computer)” - Vitalik Buterin.
                <p>Decentralized systems do not fail easily or accidentally because they rely on different network components. Decentralized systems are more expensive to hack or manipulate because they do not have vulnerable central points</p>
                <p><span className='font-[600] text-[18px]'>TOKENS:</span> Tokens are units of value that a blockchain based organization or projects develop on top of existing blockchain networks. There are a lot of widely used token standards for creating crypto tokens, the majority of which have been built on top of ethereum.  Tokens are assets with value, they can be transferred, traded, bought, and sold, and they are stored in blockchain wallets.</p>
                </li>
              </ul>
                <p>Additionally, tokens can serve many other purposes. Listed below are few uses of crypto tokens;</p>
                <ul className='list-disc'>
                  <li>
                    <p><span className='font-[600] text-[18px]'>Governance token: </span>It is a token that gives the owner voting right in a cryptocurrency project. The more tokens you hold the more voting power you have. </p>
                  </li>
                  <li>
                    <p><span className='font-[600] text-[18px]'>Non-fungible tokens (NFT): </span>It is a crypto token that shows ownership of digital asset. The ownership information is stored in the cryptocurrency token.</p>
                  </li>
                  <li>
                    <p><span className='font-[600] text-[18px]'>DEFI: </span>This means decentralized finance, it refers to alternative financial system built on blockchain technology. For example, you could put up crypto tokens as collateral instead of getting a loan from a lender, then you get one from a defi platform.</p>
                  </li>
                </ul>
            <h1 className='font-[700] text-[20px]'>DISPARITY BETWEEN COINS AND TOKENS </h1>
            <p>Having known the different definitions of coin and token, I guess you should be able to decipher between both. However I would love to make it a little bit more precise here:</p>
            <ul className='list-disc'>
                <li>A coin is native to a blockchain and is used to trade currency and store value, while a token is a bit similar but relies on another coins blockchain. </li>
                <li>A Coin represents a particular medium of exchange, while tokens represents an asset. </li>
                <li>A token moves from one place to another when it's spent, while a coin is not moved from one place to another all transactions are recorded on blockchains</li>
                <li>Tokens rely on smart contracts for trades, while coins transactions are handled by blockchain.</li>
                <li>A token shows what a person owns, while a coin represents what a person is capable of owning.</li>
            </ul>            
            <h1 className='font-[700] text-[20px]'>IN CONCLUSION</h1>
            <p>The disparity between coins and tokens is not so much. But if left not studied or understood the confusion can cause a very huge problem. The main difference is in utility and also you have to pay attention to what you are buying.</p>
            </article>
      </div>
    )
  return (
    <>
    <Header />
    <Navbar active="blog" />
    <Article />
    <Footer />
    <div className='fixed h-[70px] bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav />
    </div>
    </>
  )
}
