import React from 'react'


// Menerima function toggleCompleted sebagai sebuah prop
const TodoItem = ({ todo, toggleCompleted }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }


    return (
      <div style={styles.todoItem}>
        <input
          type="checkbox"
          style={styles.checkbox}
          onChange={() => toggleCompleted(todo.id)}
        />
        <p style={getTodoTitleStyle()}>{todo.title}</p>
        {/* Tambahkan sebuah button di sini */}
        <button style={styles.button}>x</button>
      </div>
    )
  }
  
// Salin CSS yang terbaru CSS di bawah ini
const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}
  

export default TodoItem