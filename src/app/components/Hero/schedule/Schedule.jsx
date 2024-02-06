"use client"
import React, { useEffect, useState } from 'react';
//import { GoDotFill } from "react-icons/go";

const items = 
[
    {
        events:"All events",
        data: [
            {
                time: "9.00 am",
                Monday: null,
                Tuesday: null,
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: null,
                Sunday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                
            },
            {
                time: "10.00 am",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "12.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "1.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "2.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "3.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "4.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "5.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "6.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "7.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
        ]
    }
    ,
    {
        events:"Open gym",
        data: [
            {
                time: "9.00 am",
                Monday: null,
                Tuesday: null,
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: null,
                Sunday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                
            },
            {
                time: "10.00 am",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "12.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "1.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "2.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "3.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "4.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "5.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "6.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
            {
                time: "7.00 pm",
                Monday: null,
                Tuesday: {
                    title:"krunch & kore",
                    description:"krunch & kore"
                },
                Wednesday: {
                    title:"cardio",
                    description:"cardio excesses"
                },
                Thursday: null,
                Friday: null,
                Saturday: {
                    title:"CrossFit",
                    description:"CrossFit stretchy"
                },
                Sunday: null
                
            },
        ]
    }
]


const Schedule = () => {
    const [schedule, setSchedule] = useState(null);
    const [event, setEvent] = useState("All events");
    const events = [
      "All events", "Open gym", "Total body", "krunch & kore", "Yoga", "Crossfit", "gym", "cardio"
    ];
  
    useEffect(() => {
      fetch('/schedule.json')
        .then(response => response.json())
        .then(json => setSchedule(json))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    const eventData = items.find((item) => item?.events === event);
  
    const renderTableCell = (day) => {
      return day !== null ? (
        <td className='lg:w-[120px] md:w-[120px] w-full lg:p-0 md:p-0 h-[80px] border border-white'>
          <span className='font-bold'>{day?.title}</span><br />
          <span className='text-[12px]'>{day?.description}</span>
        </td>
      ) : (
        <td className='lg:w-[120px] md:w-[120px] w-full lg:p-0 md:p-0 h-[80px] border border-white'></td>
      );
    };
  
    const Tbody = (
      <>
        {eventData ? (
          <tbody className='border border-white'>
            {eventData.data.map((item, j) => (
              <tr className='w-full text-center schedule border border-white' key={j}>
                <th className='lg:w-[120px] md:w-[120px] w-full border border-white lg:p-0 md:p-0 h-[80px] bg-primary text-white text-[12px] bg-[#FF4E25]'>{item.time}</th>
                {renderTableCell(item.Monday)}
                {renderTableCell(item.Tuesday)}
                {renderTableCell(item.Wednesday)}
                {renderTableCell(item.Thursday)}
                {renderTableCell(item.Friday)}
                {renderTableCell(item.Saturday)}
                {renderTableCell(item.Sunday)}
              </tr>
            ))}
          </tbody>
        ) : (
          <td colSpan={8} className='text-center text-primary lg:text-[48px] text-[24px] font-bold border border-white'>Not Found Any Data</td>
        )}
      </>
    );
  
    return (
      <div className=''>
        <h1 className='lg:text-[48px] md:text-[35px] text-[30px] text-center lg:font-bold font-semibold lg:mb-[60px] mb-[30px] capitalize'>join our class</h1>
        <div className='flex justify-between lg:mx-[47px] mb-[40px] overflow-x-auto'>
          {events.map((item, i) => (
            <button key={i} className={`font-bold ${event === item ? 'bg-[#FF4E25] text-white' : 'text-black1'} py-[12px] px-[30px] hover:bg-[#FF4E25]`} onClick={() => { setEvent(item) }}>
              {item}
            </button>
          ))}
        </div>
        <div className='lg:overflow-auto md:overflow-auto overflow-scroll w-full'>
          <table className='table w-full' style={{ overflow: 'auto' }}>
            <thead className='bg-[#F0F0F0] text-[#827F7F] h-[70px] '>
              <tr className='border border-white'>
                <th className='w-[120px]'>#</th>
                <th className='w-[120px]'>Monday</th>
                <th className='w-[120px]'>Tuesday</th>
                <th className='w-[120px]'>Wednesday</th>
                <th className='w-[120px]'>Thursday</th>
                <th className='w-[120px]'>Friday</th>
                <th className='w-[120px]'>Saturday</th>
                <th className='w-[120px]'>Sunday</th>
              </tr>
            </thead>
            {Tbody}
          </table>
        </div>
      </div>
    );
  };
  
  export default Schedule;
