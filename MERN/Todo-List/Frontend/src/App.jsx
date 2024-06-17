import { useState, useEffect } from 'react';
import Task from './components/Task';
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [disableAddButton, setDisableAddButton] = useState(true);
  const [toggleShow, setToggleShow] = useState(true)
  const [id, setId] = useState("")

  let addTask = async () => {
    // Finding if task which is going to update is already exists
    let sValue = tasks.find((e) => e.id === id)
    // If not exists then add new else update
    if (task.length !== 0 && sValue === undefined) {
      let uid = uuidv4();
      //Updating UI
      setTasks([...tasks, { id: uid, todo: task, isCompleted: false }])

      //Updating in database
      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "id": uid,
          "todo": task,
          "isDone": false
        })
      })

      toast.success('Task Added!')
    }
    else {
      let isConfirm = confirm("Do you really wants to update? Please confirm again.");
      if (isConfirm) {
        //removing updated task
        let filteredTodo = tasks.filter((e) => e.id !== id);

        //Updating UI
        setTasks([...filteredTodo, { id: id, todo: task, isCompleted: false }])

        //Updating in database
        await fetch("http://localhost:3000/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "id": id,
            "todo": task,
            "isDone": false
          })
        })
        toast.success('Task Updated!')
      }
    }
  }

  let getData = async () => {
    let data = await (await fetch("http://localhost:3000/")).json();
    return setTasks([...tasks, ...data])
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (task.length !== 0) {
      setDisableAddButton(false)
      document.getElementById("addBtn").style.color = "#38bdf8";
    }
    else {
      setDisableAddButton(true)
      document.getElementById("addBtn").style.color = "grey";
    }
  });


  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div>

        <div className='flex justify-center mr-9'>
          <h1 className='text-[#38bdf8] bg-[#122840] text-center w-60 h-20 rounded-full py-4 text-5xl mt-24 shadow-jutsu'>Tasks</h1>
        </div>

        <div className='flex justify-center items-center mt-10'>

          <button onClick={() => { setToggleShow(!toggleShow) }}>
            {toggleShow ? <PiEye className='text-4xl mr-2' /> : <PiEyeClosed className='text-4xl mr-2' />}
          </button>

          <input type="text" placeholder='Add Task' className='bg-[#1e293b] py-2 w-1/3 px-5 focus:outline-none placeholder:text-[#38bdf8] rounded-full hover:shadow-jutsu' value={task} onChange={(e) => { setTask(e.target.value) }} />

          <button className='text-4xl ml-2' onClick={addTask} disabled={disableAddButton}>
            <IoIosAddCircleOutline className='text-gray-400' id='addBtn' />
          </button>

        </div>

        <div className="tasks mt-4 flex flex-col gap-2 overflow-y-scroll relative h-80">
          {tasks.length === 0 && <div className='flex justify-center mr-10' >No Tasks to Show </div>}
          {tasks.map(item => {
            return <Task key={item.id} text={item.todo} isCompleted={item.isCompleted} texts={tasks} uid={item.id} changeTasks={setTasks} changeTask={setTask} showDone={toggleShow} updateWithID={setId} />
          })}
        </div>

      </div>
    </>
  )
}

export default App
