import React, { useRef, useState } from 'react'
import './TodoList.css'

function TodoList() {
  const [activity,setActivity] = useState('');
  const [list,setlist] = useState([]);
  const inputref = useRef(null);
  function addActivity()
  {
    setlist((list) => {
        const updatelist = [...list,activity];
        console.log(updatelist);
        return updatelist
      })
    setActivity('');
    inputref.current.focus();
  }
  function removeActivity(i)
  {
    let updatedata = list.filter((data,id) => {
      return i!=id;
    })
    setlist(updatedata);
  }
  function removeAll()
  {
    setlist([]);
  }

  return (
    <>
      <div className='container'>
        <div className='header'>Todo List</div>
        <input 
              ref={inputref} type='text'
              placeholder='Add Activity' 
              value={activity} 
              onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>

        <p className='List-heading'>Here is your List</p>
        
        {
          (list!=[] && list.map((data,i) => {
            return(
              <p key={i}>
                <div className='listData'>{data}</div>
                <div className='btn-position'>
                    <button onClick={() => removeActivity(i)}>Remove</button>
                </div>
              </p>
            )
          }))
        }

        { list.length>=1 && <button onClick={removeAll}>Remove All</button>}
      
      </div>
    </>
  )
}

export default TodoList
