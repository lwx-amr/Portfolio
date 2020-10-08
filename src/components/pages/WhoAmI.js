import React, { useEffect } from 'react'

import Footer from './../layouts/Footer'
const tags = [
  {
    name: 'HTML',
    bg: 'html'
  },
  {
    name: 'CSS',
    bg: 'css'
  },
  {
    name: 'JavaScript',
    bg: 'js',
    dark: true
  },
  {
    name: 'React',
    bg: 'react',
    dark: true
  },
  {
    name: 'Node',
    bg: 'node',
    dark: true
  },
  {
    name: 'MongoDB',
    bg: 'mongo'
  },
  {
    name: 'NPM',
    bg: 'npm'
  },
  {
    name: 'Docker',
    bg: 'docker'
  },
  {
    name: 'SASS',
    bg: 'sass'
  },
  {
    name: 'jQuery',
    bg: 'jqeury'
  },
  {
    name: 'GitHub',
    bg: 'git'
  },
  {
    name: 'Ajax',
    bg: 'ajax'
  },
  {
    name: '{REST:API}',
    bg: 'rest text-restColor'
  },
  {
    name: 'JSON',
    bg: 'json'
  }
]
const WhoAmI = ({ setPageTitle }) => {
  const pageTitle = 'Who Am I'
  useEffect(() => {
    setPageTitle(pageTitle)
  })
  let i = 0
  const tagList = tags.map((tag) => {
    return (
      <div
        className={'tag text-gray-100 bg-tags-' + tag.bg + (tag.dark ? ' text-gray-700' : '')}
        key={i++}>
        #{tag.name}
      </div>
    )
  })
  return (
    <div className="container px-56 text-secondary pb-20 maxSm:px-2 maxSm:mt-8">
      <div className="mx-auto w-48 maxSm:max-w-full maxSm:w-36">
        <img src="/images/me.png" alt="me icon" className="mx-auto rounded-full shadow-img" />
      </div>
      <div className="my-10 maxSm:my-6">
        <p>
          Hey there, I’m <span className="text-primary font-semibold">Amr Hussien</span> Software
          Engineering enthusiast, computer science fresh grade.
        </p>
        <p>Passionate about building web applications using javascript. </p>
      </div>
      <div className="mb-10 maxSm:mb-6">
        <h4 className="text-xl font-semibold text-primary mb-2">Work Experience</h4>
        <div className="flex justify-between mb-4 flex-wrap">
          <h3 className="text-lightg font-semibold maxSm:text-sm maxSm:mr-2">
            Web UI Developer - North 49 Digital
          </h3>
          <div className="text-lightg font-semibold maxSm:text-sm">
            <span>2018 - 2020</span>
          </div>
        </div>
        <div className="pl-12 maxSm:pl-4">
          <p>
            North is a Canadian company, my rule there was to convert XD, PSD, and InVision files to
            pixel perfect web pages using HTML - CSS - JS.
          </p>
          <p>
            I started to work with them as a freelancer and it took me only the first project to get
            hired with a full-time contract.
          </p>
        </div>
      </div>
      <div className="mb-10 maxSm:mb-6">
        <h4 className="text-xl font-semibold text-primary mb-2">Education</h4>
        <div className="flex justify-between flex-wrap">
          <h3 className="text-base font-semibold text-lightg maxSm:text-sm">
            Faculty Computers and Artificial Intelligence - Computer Science
          </h3>
          <span className="text-lightg font-semibold maxSm:text-sm">2016 - 2020</span>
        </div>
      </div>
      <div className="mb-10 maxSm:mb-6">
        <h4 className="text-xl font-semibold text-primary mb-2">
          Software Engineering skills/Concepts
        </h4>
        <div className="flex justify-between">
          <p className="text-secondary">
            C++ - Java - Algorithms - Data Structures - OOP - Databases - Networks - Linux
          </p>
        </div>
      </div>
      <div className="mb-10 maxSm:mb-6">
        <h4 className="text-xl font-semibold text-primary mb-4">Technology related skills</h4>
        <div className="flex flex-wrap justify-center">{tagList}</div>
      </div>
      <div className="mt-24 maxSm:mb-6 maxSm:mt-12">
        <Footer />
      </div>
    </div>
  )
}

export default WhoAmI
