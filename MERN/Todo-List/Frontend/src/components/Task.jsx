import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import toast from 'react-hot-toast';

function Task({ text, texts, uid, changeTasks, changeTask, showDone, isCompleted, updateWithID }) {

  const [isDone, setIsDone] = useState(isCompleted)

  let markTheTask = async (e) => {
    //Update UI
    isDone ? setIsDone(false) : setIsDone(true)

    //Update in database
    await fetch("http://localhost:3000/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id": uid,
        "isDone": isCompleted ? false : true
      })
    })
  }

  let deleteTask = async () => {
    let isConfirm = confirm("Do you really wants to delete. Please confirm again.")

    if (isConfirm) {
      //Update UI
      changeTasks(texts.filter(item => item.id !== uid))

      //Update in database
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "id": uid
        })
      })

      toast.success('Task Deleted!')
    }
  }

  let editTask = async () => {
    //Update in UI
    changeTask(text)
    updateWithID(uid)

    //Updating in database will done in addTask function, with same add button in main App file
  }

  //Show and hide the completed tasks
  if (!isDone || showDone) {
    return (
      <div className='flex justify-center mr-10'>
        <div className='flex justify-between items-center w-1/3'>
          <input type="checkbox" onChange={markTheTask} checked={isDone} />
          <div className='w-80'>
            <span className={isDone ? "line-through" : ""}>{text}</span>
          </div>
          <div className='flex gap-2'>
            <button className='text-2xl' onClick={editTask}>
              <CiEdit className='hover:bg-[#194361] rounded-full' />
            </button>
            <button className='text-2xl' onClick={deleteTask}>
              <MdDeleteOutline className='hover:bg-[#194361] rounded-full' />
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default Task
