/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useLocalStorage } from '../utils/localStorage'

const Subscribe = ({ handleSubscribe }) => {
  const [emailValue, setEmailValue] = useLocalStorage('email')
  const handleEmailChange = (e) => setEmailValue(e.target.value)
  return (
    <div className="z-30 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-xl">
        {/*content*/}
        <div className="border-0 shadow-lg relative flex flex-col w-full bg-gray-600 outline-none focus:outline-none z-50 py-8">
          {/*header*/}
          <div className="flex items-start justify-between px-6 pb-2 rounded-t">
            <h3 className="text-xl font-medium">{"I've got more coming..."}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => handleSubscribe(false)}>
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative px-6 py-2 flex-auto">
            <p className="text-gray-100 text-base leading-relaxed pr-12">
              Enter your email address to get notified when a new work is added
            </p>
          </div>
          {/*footer*/}
          <form className="m-6 mb-0" method="POST">
            <div className="flex items-center justify-between">
              <input
                x-model="email"
                type="email"
                value={emailValue}
                onChange={handleEmailChange}
                required
                placeholder="Email address"
                className="flex flex-grow mr-6 rounded sm:max-w-xs px-4 py-2 text-base leading-6 
                text-gray-600 font-medium appearance-none border border-gray-300 shadow-sm bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              />
              <button
                className="bg-green-btn  text-white text-base font-semibold uppercase px-6 pb-2 pt-3 rounded shadow-sm hover:shadow-lg outline-none leading-snug focus:outline-none hover:bg-green-200"
                type="button"
                style={{
                  transition: 'all .15s ease'
                }}
                onClick={() => handleSubscribe(false)}>
                <span>Subscribe</span>
              </button>
            </div>
            <p
              x-show="error"
              x-text="error"
              style={{ display: 'none' }}
              className="lg:absolute mt-4 text-white max-w-xl font-medium"
            />
          </form>
        </div>
      </div>
      <div
        className="fixed inset-0 z-40 bg-gray-modal"
        onClick={() => handleSubscribe(false)}></div>
    </div>
  )
}

export default Subscribe
