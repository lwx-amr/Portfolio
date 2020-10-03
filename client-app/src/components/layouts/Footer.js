import React from 'react'

const social = [
  { icon: 'github', link: 'https://github.com/lwx-amr' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/amr-hussien-804816160/' },
  { icon: 'twitter', link: 'https://twitter.com/lwxamr' },
  { icon: 'facebook', link: 'https://www.facebook.com/lwxamr' },
  { icon: 'instagram', link: 'https://www.instagram.com/amrhussien3' }
]
const Footer = () => {
  let i = 0
  const socialList = social.map((site) => {
    return (
      <div key={i++} className="text-primary w-8 mx-1 h-8 border border-primary ">
        <a
          href={site.link}
          target="blank"
          className="flex items-center justify-center h-full transition duration-300 hover:bg-socialHover hover:text-socialHover">
          <span className={'text-xl ico-' + site.icon}></span>
        </a>
      </div>
    )
  })
  return (
    <div className="text-center text-secondary font-medium">
      <div className="flex justify-center mb-8">{socialList}</div>
      <p>2020 - All Rights are Reserved.</p>
      <p>
        Made with <span className="ico-heart text-green-btn"></span> by Amr.
      </p>
    </div>
  )
}

export default Footer
