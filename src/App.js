import React from 'react'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
};

const Content = ({parts}) => {
  const [first, second, third] = parts

  return (
    <>
      <Part part={first}/>
      <Part part={second}/>
      <Part part={third}/>
    </>
  )
}

const Part = ({part}) => {
  return (
    <p>
        {part.name} {part.exercises}
    </p>
  )
}

const Total = ({parts}) => {
  const exercises = parts.map(part => part.exercises)
  const [exercises1, exercises2, exercises3] = exercises

  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />  
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
