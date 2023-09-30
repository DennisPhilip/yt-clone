import React from "react";
import Search from "./components/Search";
import Hero from "./components/Hero";
import Card from "./components/Card";
import thumbnail1 from './components/t-1.png'
import thumbnail2 from './components/t-2.png'
import thumbnail3 from './components/t-3.png'
import thumbnail4 from './components/t-4.png'
import thumbnail5 from './components/t-5.png'
import thumbnail6 from './components/t-6.png'

import thumbnail7 from './components/t-7.png'
import thumbnail8 from './components/t-8.png'
import thumbnail9 from './components/t-9.png'
import thumbnail10 from './components/t-0.png'
import thumbnail11 from './components/t-11.png'
import thumbnail12 from './components/t-12.png'



import p1 from './components/p-1.png'
import p2 from './components/p-2.jpg'
import p3 from './components/p-3.png'
import p4 from './components/p-45.jpg'
import p5 from './components/p-45.jpg'
import p6 from './components//p-67.jpg'

import p7 from './components/p-67.jpg'
import p8 from './components/p-8.jpg'
import p9 from './components/p-9.jpg'
import p10 from './components/p-10.jpg'
import p11 from './components/p-11.jpg'
import p12 from './components/p-12.jpg'

const App = () => {
  return (
    <main className="">
      <Search />
      <Hero />
      <vid1 />
      <img1 />
      <section className="flex flex-wrap gap-4 p-8">
        <Card 
          thumbnail={thumbnail1}
          pfp={p1}
          title={'Last To Leave The Circle Wins $500,000'}
          c_name={'MrBeast'}
          v_count={'120M views    .'}
          u_date={' 2 months ago'}
        />
        <Card 
          thumbnail={thumbnail2}
          pfp={p2}
          title={"Analysis: Virat Kohli's form | The ICC Review"}
          c_name={'ICC'}
          v_count={'894K views .'}
          u_date={'  7 months ago'}
        />
        <Card 
          thumbnail={thumbnail3}
          pfp={p3}
          title={'Node.js and Express.js - Full Course'}
          c_name={'FreeCodeCamp'}
          v_count={'2.6M views . '}
          u_date={'2 years ago'}
        />
        <Card 
          thumbnail={thumbnail4}
          pfp={p4}
          title={'The Book That Changed My Financial Life'}
          c_name={'Ali Abdaal'}
          v_count={'3M views . '}
          u_date={'1 year ago'}
        />
        <Card 
          thumbnail={thumbnail5}
          pfp={p5}
          title={'How I Remember Everything I Read'}
          c_name={'Ali Abdaal'}
          v_count={'2.8M views . '}
          u_date={'2 years ago'}
        />
        <Card 
          thumbnail={thumbnail6}
          pfp={p6}
          title={'iPhone 15 Pro Review - Better than you think.'}
          c_name={'Mrwhosetheboss'}
          v_count={'5.3M views . '}
          u_date={'11 days ago'}
        />
        
        <Card
          thumbnail={thumbnail7}
          pfp={p7}
          title={'I tried switching from iPhone to Samsung'}
          c_name={'Mrwhosetheboss'}
          v_count={'2.8M views . '}
          u_date={'4 weeks ago'}
        />
        <Card 
          thumbnail={thumbnail8}
          pfp={p8}
          title={"I'm Buying A Jet... Explained Why"}
          c_name={'Iman Gadzhi'}
          v_count={'599K views . '}
          u_date={'2 days ago'}
        />
        <Card 
          thumbnail={thumbnail9}
          pfp={p9}
          title={'Why It Costs More To Be Poor'}
          c_name={"Nate O'Brien"}
          v_count={'33k views . '}
          u_date={'11 days ago'}
        />
        <Card 
          thumbnail={thumbnail10}
          pfp={p10}
          title={'I Doubled My Reading Speed in 7 Days'}
          c_name={'Mike Dee'}
          v_count={'2.6k views . '}
          u_date={'3 days ago'}
        />
        <Card 
          thumbnail={thumbnail11}
          pfp={p11}
          title={'Airtel Will Beat JIO?|Telecom Wars '}
          c_name={'Think School'}
          v_count={'859k views . '}
          u_date={'3 weeks ago'}
        />
        <Card 
          thumbnail={thumbnail12}
          pfp={p12}
          title={'M1 Macbook Air in 2023? Yes or No'}
          c_name={'Jerry Schulze'}
          v_count={'123k views . '}
          u_date={'3 months ago'}
        />
      </section>
    </main>
  );
};

export default App;
