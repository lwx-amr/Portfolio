import React from 'react'

const tabs = [
  {
    title: "Who I'm I",
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
    title: 'Blogging',
    icon: '/icons/sidebar/blogs.svg',
    action: '/blogs'
  },
  {
    title: 'Tools',
    icon: '/icons/sidebar/tools.svg',
    action: '/used-tools'
  },
  {
    title: 'Subscribe',
    icon: '/icons/sidebar/subscribe.svg',
    action: '/subscribe'
  },
  {
    title: 'Contact',
    icon: '/icons/sidebar/contact.svg',
    action: '/contact'
  }
]

const Sidebar = () => {
  let i = 0
  const tabList = tabs.map((tab) => {
    return (
      <div className="tab" key={i++}>
        <a href={tab.action}>
          <div>
            <div className="image">
              <img src={tab.icon} className="m-auto w-10" alt={tab.title + ' image'} />
            </div>
            <h6 className="text-gray-100 text-sm mt-1 font-medium leading-none">{tab.title}</h6>
          </div>
        </a>
      </div>
    )
  })
  return (
    <div className="sidebar w-20 bg-gray-600 h-screen fixed flex flex-wrap shadow-sb">
      {tabList}
    </div>
  )
}

export default Sidebar
