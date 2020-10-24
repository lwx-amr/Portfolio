import React from 'react'
import { Link } from 'react-router-dom'

const tabs = [
  {
    title: 'Who Am I',
    icon: '/icons/sidebar/me.svg',
    action: '/about-me'
  },
  {
    title: 'ALg & Ds',
    icon: '/icons/sidebar/alg.svg',
    action: '/algorithms-data-structures'
  },
  {
    title: 'Apps',
    icon: '/icons/sidebar/apps.svg',
    action: '/apps'
  },
  {
    title: 'Games',
    icon: '/icons/sidebar/games.svg',
    action: '/games'
  },
  {
    title: 'Blogs',
    icon: '/icons/sidebar/blogs.svg',
    action: '/blogs'
  },
  {
    title: 'Tools',
    icon: '/icons/sidebar/tools.svg',
    action: '/used-tools'
  }
]

const Sidebar = ({ handleSubscribe, handleContact }) => {
  let i = 0
  const tabList = tabs.map((tab) => {
    return (
      <div className="tab" key={i++}>
        <Link to={tab.action}>
          <div>
            <div className="image">
              <img src={tab.icon} className="m-auto w-10" alt={tab.title + ' image'} />
            </div>
            <h6 className="text-primary text-sm mt-1 font-medium leading-none">{tab.title}</h6>
          </div>
        </Link>
      </div>
    )
  })
  return (
    <div className="sidebar w-20 bg-secondary h-screen fixed flex flex-wrap shadow-sb maxMd:hidden">
      {tabList}
      <div className="tab" key={i++}>
        <button
          onClick={() => handleSubscribe(true)}
          className="hover:outline-none focus:outline-none">
          <div>
            <div className="image">
              <img
                src="/icons/sidebar/subscribe.svg"
                className="m-auto w-10"
                alt="subscribe icon"
              />
            </div>
            <h6 className="text-primary text-sm mt-1 font-medium leading-none">Subscribe</h6>
          </div>
        </button>
      </div>
      <div className="tab" key={i++}>
        <button
          onClick={() => handleContact(true)}
          className="hover:outline-none focus:outline-none">
          <div>
            <div className="image">
              <img src="/icons/sidebar/contact.svg" className="m-auto w-10" alt="contact icon" />
            </div>
            <h6 className="text-primary text-sm mt-1 font-medium leading-none">Contact</h6>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
