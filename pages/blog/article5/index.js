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
            <h1 className='font-[700] text-[20px]'>Importance of Trading Plans</h1>
            <div className='w-[500px] h-[300px] relative'>
            <Image src={'/tradebtc.jpg'} layout='fill' objectFit='cover' objectPosition={'center'} />
            </div>
            <p>Imagine embarking on a journey without knowing your exact route and destination. You enter your vehicle and off you go; you're driving to nowhere in particular. Chances are you'll end up wasting both your time, energy, and fuel. This scenario perfectly describes cryptocurrency trading without a trading plan.
            </p>
            <p>While you may not mind a little aimless physical driving, you don't want to be aimless in your cryptocurrency journey. You'll end up distracted, confused and losing a good chunk of your savings. If you're an avid follower of crypto investment news, then you know that there's always a new trend. For more profitable trading, you want to avoid following every wind of crypto doctrine</p>
            <p>So, how do you stay focused in a space constantly filled with distractions, especially when your finances are at stake? You need a trading plan. With a trading plan in place, you stand a much higher chance of profit-making compared to a trader with zero plans. In this article, we'll walk you through everything there is to know about trading plans. </p>
            <h1 className='font-[700] text-[20px]'>What is a Trading Plan?</h1>
            <p>Before diving into trading plans, what exactly is one? A trading plan is a detailed written guide that contains everything about your crypto trade. It lists your trading strategy, price points, risk levels etc. Just as a business plan gives structure and guidance to a business, your trading plan works out your trade on paper. It helps you visualize and plan your steps and moves before you make them.</p>
            <p>You must think hard and carefully before creating your plan; do not rush the process. This is because it is wrong to abandon your plan when you hit a rough patch. It must be followed strictly unless you find proven better strategies and guidelines to implement.</p>
            <h1 className='font-[700] text-[20px]'>Importance of Trading Plans</h1>
            <p>Why should you develop your trading plan before making any crypto trade? Are there outstanding benefits of trading plans? More importantly, what happens when you forgo a trading plan? Here are some benefits of having a structured trading plan before making any crypto investments.</p>
              <ol className='list-decimal'>
                <li><span className='font-[600] text-[18px]'>Proper Research: </span>DYOR. In the cryptocurrency world, the phrase “Do Your Own Research” is almost a broken record. Building a trading plan forces you to scan the market for reliable sources, properly analyze risk levels and learn what methods work best under certain market conditions.<br></br>There are always new trends and readily available information in the cryptocurrency space. Hence, doing your research to predetermine how best to filter the day-to-day noise is the only way to keep your head in the game. </li>
                <li><span className='font-[600] text-[18px]'>Time: </span>Taking out the time to create a solid trading plan saves you hours of time wasted aimlessly watching charts. You will reach your destination faster if you already know where you're headed. Setting your trading goals in your plan helps you know exactly what to look for when you face your screen.<br></br>On the other hand, going without a plan is similar to a directionless journey. You'll spend hours trying to decide what you want to achieve before starting your trade. Remember, time is money. </li>
                <li><span className='font-[600] text-[18px]'>Logical Trading: </span>It is no secret that emotions are bad for trading. Having a plan beforehand eliminates the possibility of making careless or thoughtless trading decisions. Why? These impulsive decisions are triggered by market occurrences and sentiments. An example is the desire to buy a coin because of its exceptional performance or because everyone is buying into it even when the investment is not practical.<br></br>In this situation, refer to the trading plan you created outside any emotional influence. Doing this will tell you the best line of action that will help you realize your goals.</li>
                <li><span className='font-[600] text-[18px]'>Record Keeping: </span>Having a trading plan helps you keep a record of your past successes and failures. You can see what strategies and methods work well for you, and which ones do not. Without a plan, it is almost impossible to track your progress.<br></br>Similarly to book-keeping in business, trading plans help you know whether your trades are indeed profitable or not. In cases of failure, you can go back and strategize, as it is easier to pinpoint where things went wrong.</li>
                <li><span className='font-[600] text-[18px]'>Risk Management: </span>The cryptocurrency market is highly volatile, meaning it fluctuates sharply. You cannot afford to acquire crypto investments without making provisions for managing the associating risks. Risk management is a fundamental aspect of any trading plan.<br></br>Depending on your trading personality and risk appetite, your trading plan protects you from biting off more than you can chew. With the risk management strategies you include in your trading plan, your trades are inevitably more responsible.</li>
              </ol>
            <h1 className='font-[700] text-[20px]'>What Should I Include in My Trading Plan?</h1>
            <p>Yes, trading plans should be personalized. Your trading plan must never be based on some other trader's plan, it is unique to you. However, there are staples that are taken into consideration when preparing a plan. These are some of them.</p>
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
