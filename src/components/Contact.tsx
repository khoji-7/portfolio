"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import phone from "../assets/phone.png"
import emailIcon from "../assets/mail.png"

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  async function sendMessage() {
    const botToken = "7140817767:AAE7Pp6NSlttwdqzcBk-biJnSoCdONvsRjQ";
    const chatId = "-4177602455";

    const Sended = `
      Name: ${firstName}\n-----------------------\n 
      Last name: ${lastName}\n-----------------------\n
      Phone: ${number}\n-----------------------\n 
      Email: ${email}\n-----------------------\n 
      Message: ${message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: Sended,
          }),
        }
      );
      if (response.status === 200) {
        alert("Xabaringiz yetkazildi");
        window.location.reload();
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }
  }

  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 
    rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
      <div className='flex justify-center items-center'>
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <Image src={phone} alt='phone' className='h-[110px] w-auto mr-6'/>
            <p className='text-x md:text-xl'>
              +998 94 899 99 49  
            </p>
          </li>
          <li className='flex items-center'>
            <Image src={emailIcon} alt='email' className='h-[110px] w-auto mr-6'/>
            <p className='text-x md:text-xl'>
              nematxonovh@gmail.com  
            </p>
          </li>
        </ul>
      </div>

      <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
        <h2 className='text-5xl font-bold text-orange-400 mb-4'>
          Let's connect
        </h2>
        <p className='text-white/70 mb-6'>
          Send me a message and let's schedule a call
        </p>
        <form onSubmit={sendMessage}>
          <div className='grid md:grid-cols-2 gap-4'>
            <input 
              type="text"  
              placeholder='First name'  
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input 
              type="text" 
              placeholder='Last name'  
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input 
              type="email" 
              placeholder='Email'  
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="number" 
              placeholder='Phone number'  
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <textarea 
            className="bg-black/70 mt-2 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
            placeholder='Your message' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type='submit' className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full text-xl rounded-xl mt-4'>
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
