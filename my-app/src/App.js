import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setloading] = useState(true)
  const [jobs, setjobs] = useState([])
  const [value, setvalue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setjobs(newJobs)
    setloading(false)
  }
  // runs only when our app renders
  useEffect(()=> {
    fetchJobs()
  },[])
  if(loading){
    return <section className='section loading'>
      <h1>loading...</h1>
    </section>
  }
  const {company,dates,duties, title} = jobs[value];
  return <section className='section'>
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* {btn container} */}
      {/* {job info} */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty,index)=>{
          return <div key={index} className="job-desc">
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        })}
      </article>
    </div>
  </section>
}

export default App
