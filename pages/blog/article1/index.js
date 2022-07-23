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
            <h1 className='font-[700] text-[20px]'>UNDERSTANDING BLOCKCHAIN TECHNOLOGY</h1>
            <div className='w-[300px] md:w-[500px] h-[300px] relative'>
            <Image src={'/article1.png'} layout='fill' objectFit='cover' objectPosition={'center'} />
            </div>
            <h2>In recent years, you have always heard of the term "blockchain technology" especially regarding cryptocurrencies like bitcoin and ethereum. 
            Blockchain is one of the most important invention in recent years, it is a structure that stores transactional records also known as the "block", of the public in several databases, known as the "chain" in a network connected through peer to peer nodes. This storage is known as a "Digital Ledger"
            </h2>
            <h1 className='font-[700] text-[20px]'>WHAT IS BLOCKCHAIN?</h1>
            <h2>Whenever a transaction is performed, it goes to the network and computer algorithm determines the authenticity of the transaction, once it's verified, this new transaction is linked with the previous transactions forming a chain of transactions. This chain is called the <span className='font-[600] text-[18px]'>"BLOCKCHAIN"</span>
            </h2>
            <h1 className='font-[700] text-[20px]'>BRIEF HISTORY OF BLOCKCHAIN</h1>
            <h2>The history of blockchain dates back to 2008, through one person or group known as Satoshi Nakamoto. Satoshi Nakamoto is known as the brains behind blockchain technology, when he first published a paper bitcoin in 2008 as "Bitcoin". He provided details of how the technology was well equipped to improve digital trust given the decentralization aspect that meant nobody would ever be in control of anything. However, since Satoshi Nakamoto left and handed over bitcoin development to core developers, the digital ledger has evolved resulting in new applications that makeup the blockchain history.</h2>
            <h1 className='font-[700] text-[20px]'>THE DIFFERENT TYPES OF BLOCKCHAIN </h1>
            <div className='w-[300px] md:w-[500px] h-[300px] relative '>
                <Image src={'/article101.png'} layout='fill' objectFit='cover' objectPosition={'center'} />
            </div>
            <p>There are basically four different types of blockchain structures, they include;</p>
              <ul>
                <li><span className='font-[600] text-[18px]'>Public Blockchains: </span>They are permissionless in nature, allow anyone to join, and are completely decentralized. Bitcoin and Ethereum are typical examples of public blockchain. </li>
                <li><span className='font-[600] text-[18px]'>Private Blockchain: </span>A private blockchain is managed by a network administrator and participants needs consent to join the network.</li>
                <li><span className='font-[600] text-[18px]'>Consortium Blockchain: </span>It is a type of semi-decentralised network in which members are not granted to a single entity, instead it's granted to a group of individuals or nodes.</li>
                <li><span className='font-[600] text-[18px]'>Hybrid Blockchain: </span>A hybrid blockchain is a special type of blockchain technology that merges the components of both public and private blockchains.</li>
              </ul>
            <h1 className='font-[700] text-[20px]'>HOW BLOCKCHAIN TECHNOLOGY WORKS.</h1>
            <p>As earlier discussed, we all know that blockchain is a collection of blocks that store data.The running order of the blockchain is based on three components:</p>
            <ul className='list-disc'>
                <li><span className='font-[600] text-[18px]'>Data: </span>Data stored in blocks differs based on the blockchain, if the data is about bitcoin, the blockchain maintains information about a transaction such as sender, receiver, and transaction amount</li>
                <li><span className='font-[600] text-[18px]'>Hash: </span>A hash is similar to a fingerprint, it is also included in block. When a block is created its hash is computed. If something changes within the block, the hash will change as well</li>
                <li><span className='font-[600] text-[18px]'>Previous data hash: </span>The hash of the previous block aids in the creation of a chain, and as a result of these aspects, the blockchain is extremely secure to trust and use.</li>
            </ul>
            <h1 className='font-[700] text-[20px]'>ADVANTAGES OF BLOCKCHAIN</h1>
            <ul className='list-disc'>
                <li>It allows dissemination of data base, which allows it to be shared without a central body or entity</li>
                <li>It provides complete, consistent and up to date data with accuracy </li>
                <li>People get to trust more in the blockchain technology due to its security</li>
            </ul>
            <h1 className='font-[700] text-[20px]'>DISADVANTAGES OF BLOCKCHAIN</h1>
            <ul className='list-disc'>
                <li>Blockchains are expensive and resource intensive </li>
                <li>Blockchain is full of complex concepts and processes which may be difficult for a layman to understand </li>
                <li>A transaction in the blockchain is only settled when all the nodes in the blockchain successfully verifies the transaction, which makes the process really slow.</li>
            </ul>
            <h1 className='font-[700] text-[20px]'>THE IMPACT OF BLOCKCHAIN TECHNOLOGY </h1>
            <p>In banking and the payment system blockchain will allow anyone to exchange money faster, more efficiently and securely. </p>
            <p>In cybersecurity: all data is verified and encrypted in blockchain using advanced cryptography, making it difficult for unauthorized access and use.</p>
            <p>Blockchain can enable more reliable, faster and safer, automated communications. While blockchain is still new, the possibilities for innovations are endless.
            </p>
            <h1 className='font-[700] text-[20px]'>CONCLUSION</h1>
            <p>Blockchain has successfully been able to bring transparency among users, it encourages entrepreneurship. This technology has opened the door to new possibilities and has provided a good ground for economic empowerment.</p>
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
