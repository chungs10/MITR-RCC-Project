import { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarComp.css';

function CalendarComp() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p> */}
    </div>
  );
}

export default CalendarComp;