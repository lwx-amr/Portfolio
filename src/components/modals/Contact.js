/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useLocalStorage } from '../../utils/localStorage'

const Contact = ({ handleContact }) => {
  const [formBody, setFormBody] = useLocalStorage('email')
  const handleEmailChange = (e) => setFormBody(e.target.value)
  return (
    <div className="z-30 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
      <div className="relative y-6 mx-auto" style={{ width: '580px' }}>
        {/*content*/}
        <div className="border-0 shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none z-50 py-8 px-6">
          {/*header*/}
          <div className="flex items-start justify-between pb-2 rounded-t">
            <h3 className="text-xl font-medium">Send me a message</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => handleContact(false)}>
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative flex-auto">
            <form className="mt-4" action="index.php" method="get" id="message-form">
              <div className="flex items-center justify-between">
                <div className="w-1/2 pr-3">
                  <label htmlFor="name" className="text-primary font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formBody.name}
                    onChange={handleEmailChange}
                    required
                    className="rounded w-full sm:max-w-xs px-4 py-2 text-base leading-6 
                text-white font-medium border border-gray-400 shadow-sms focus:outline-none focus:shadow-outline-blue bg-transparent"
                  />
                </div>
                <div className="w-1/2 pl-3">
                  <label htmlFor="email" className="text-primary font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formBody.email}
                    onChange={handleEmailChange}
                    required
                    className="rounded w-full sm:max-w-xs px-4 py-2 text-base leading-6 
                text-white font-medium border border-gray-400 shadow-sm focus:outline-none focus:shadow-outline-blue bg-transparent"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-primary font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  className="rounded w-full sm:max-w-xs px-4 py-2 text-base leading-6 
                text-white font-medium border border-gray-400 shadow-sm focus:outline-none focus:shadow-outline-blue bg-transparent"></textarea>
              </div>
              <p
                x-show="error"
                x-text="error"
                style={{ display: 'none' }}
                className="lg:absolute mt-4 text-white max-w-xl font-medium"
              />
            </form>
          </div>
          {/*footer*/}
          <div className="w-full flex justify-end items-center mt-8">
            <button
              className="text-primary font-medium mr-8 focus:outline-none"
              onClick={() => handleContact(false)}>
              Cancel
            </button>
            <button
              type="submit"
              form="message-form"
              className="bg-green-btn text-gray-100 text-sm font-semibold uppercase px-4 pb-2 pt-3 rounded shadow-sm hover:shadow-lg outline-none leading-snug focus:outline-none hover:bg-green-200"
              style={{
                transition: 'all .15s ease'
              }}>
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-gray-modal" onClick={() => handleContact(false)}></div>
    </div>
  )
}

export default Contact
