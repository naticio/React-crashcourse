import React from 'react'
import { useState } from 'react';


const AddTask = ({onAdd}) => {
    //states for those inputs
    const [text, setText] = useState('')
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    //add the event object because we need to prevent submitthing any shit,react are single pages
const onSubmit = (e) => {
    e.preventDefault()

    if (text=='') {
        alert('Please write something my friend')
        return
    }

    //call onAdd and pass an object with text, day and reminder
    onAdd({text, day, reminder})

    //reset the inputs after submitting
    setText("")
    setDay("");
    setReminder(false);
}

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        {/*this is where we input something*/}
        <label>Task</label>
        {/*onchange of the input call setText function, pass the "e" event in the console and settext to event.target.value or whatever is was written*/}
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>

      {/*2nd input field*/}
      <div className="form-control">
        {/*this is where we input something*/}
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>

      {/*3nd input field*/}
      <div className="form-control form-control-check">
        {/*this is where we input something*/}
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder} //this is just an attribute of the checkbox component
          ///*currentTarget.checked gives the boolean value */
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
}

export default AddTask