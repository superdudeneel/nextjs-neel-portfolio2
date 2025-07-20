"use client"

import React from 'react'
import {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const [name, setname] = useState<string>('');
    const [email, setemail] = useState<string>('');
    const [message, setmessage] = useState<string>('');
  return (
    <div className="flex flex-col items-center mt-20 px-4 w-2xl">
        <Toaster />
  <form 
    action = {async ()=>{
        const payload = {
            name: name,
            email: email,
            message: message
        }
        const response = await fetch('http://localhost:3000/api/email', {
            method: 'POST',
            body: JSON.stringify(payload),
        })
        const result = await response.json();
        if(result.success){
            toast.success(result.message);

        }
        else{
            toast.error(result.message);

        }
    }}
    className="w-full max-w-3xl  p-8 rounded-xl bg-white space-y-6"
  >
    <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>

    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Name</label>
      <input 
        type="text" 
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2" 
        value = {name}
        onChange = {(e)=>{
            setname(e.target.value);
        }}
        placeholder="Your name"
        required
      />
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Email</label>
      <input 
        type="email" 
        value = {email}
        onChange = {(e)=>{
            setemail(e.target.value);
        }}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2" 
        placeholder="Your email"
        required
      />
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Message</label>
      <textarea 
        value = {message}
        onChange = {(e)=>{
            setmessage(e.target.value);
        }}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2" 
        rows={5}
        placeholder="Your message"
        required
      />
    </div>

    <button 
      type="submit" 
      className="bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-700 transition-all"
    >
      Send Message
    </button>
  </form>
</div>

  )
}

export default Contact