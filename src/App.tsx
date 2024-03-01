import { useState } from "react"

type Student = {
  id: number,
  name: string
}

const App = () => {
  const [message, setMessage] = useState<string>('Hello world!')
  const [age, setAge] = useState<number>(10)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [hobbies, setHobbies] = useState<string[]>([
    'drawing',
    'swimming',
    'dancing'
  ])
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: 'Jose'
    },
    {
      id: 2,
      name: 'Maria'
    }
  ])

  const updateMessage = () => {
    setMessage('Hi world I am John.')
    setAge(30)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const addHobby = () => {
    setHobbies([...hobbies, 'eating'])
  }

  const addStudent = () => {
    setStudents([...students, {
      id: 3,
      name: 'Julio',
    }])
  }

  const updateStudent = (id: number, newName: string) => {
    const updatedStudents = students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          name: newName,
        }
      }
      return student
    })
    setStudents(updatedStudents)
  }

  return (
    <div style={{ 'backgroundColor': isDarkMode ? 'black' : 'white' }}>
      {message} {age}
      <div>
        <button onClick={updateMessage}>Change message</button>
        <button onClick={toggleDarkMode}>Change to {isDarkMode ? 'light' : 'dark'} mode</button>
      </div>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <button onClick={addHobby}>Add to hobbies</button>
      <button onClick={addStudent}>Add new student</button>
      <button onClick={() => updateStudent(2, 'Juan')}>Update Jose to Juan</button>
    </div>
  )
}

export default App