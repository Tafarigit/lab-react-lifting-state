// import React, { useState } from "react";
// import Attendees from "./Attendees";
// import Header from "./Header";
// import Footer from "./Footer";
// import NewEventForm from "./NewEventForm";
// import { v1 as generateUniqueID } from "uuid";

export default function Event() {
//   const [showAttendees, setShowAttendees] = useState(false);
//   const [events, setEvents] = useState(newEvent);
//   const [selectOption, setSelectOption] = useState("");
//   const [newEvent, setNewEvent] = useState({id : "", eventType : "", name : "", organizer : "", eventImage : "", date : "", people : []});

//   function addEvent() {
//     const createEvent = {
//       id: generateUniqueID(),
//       eventType: selectOption,
//       name: newEvent.name,
//       organizer: newEvent.organizer,
//       eventImage: newEvent.eventImage || "https://loremflickr.com/640/480/",
//       date: newEvent.date,
//       people: [],
//     };
//     function handleAddEvent(newEvent) {
//     setEvents([...events, newEvent]);
//   }
//     handleAddEvent(createEvent);
//   }
// function resetEventForm() {
//     setNewEvent({
//       id: "",
//       eventType: "",
//       name: "",
//       organizer: "",
//       eventImage: "",
//       date: "",
//       people: [],
//     });

//   function handleSubmit(e) {
//     e.preventDefault();
//     addEvent();
//     resetEventForm();
//   }

//   function handleSelectChange(e) {
//     setSelectOption(e.target.value);
//   }
//   function handleAddEvent(newEvent) {
//     setEvents([...events, newEvent]);
//   }

//   function handleTextChange(e) {
//     setNewEvent({
//       ...newEvent,
//       [e.target.id]: e.target.value,
//     });
//   }

//   function updateEventAttendance(attendee, event) {
//     const updatedEvents = events.map((event) => {
//       if (event.id === event.id) {
//         const updatedAttendees = event.people.map((person) => {
//           if (person.id === attendee.id) {
//             return {
//               ...person,
//               isAttending: !person.isAttending,
//             };
//           }
//           return person;
//         });
//         return {
//           ...event,
//           people: updatedAttendees,
//         };
//       } 
//       return event;
//     });
//     setEvents(updatedEvents);
//   }

  
//   function handleAddEvent(newEvent) {
//     setEvents([...events, newEvent]);
//   }

//   function toggleEventAttendees() {
//     setShowAttendees(!showAttendees);
//   }

  
//   return (
//     <div className="events">
//       <header>
//         <body>
//       <Header />
  
//       <main>
//         <div className="new-event">
//           <NewEventForm
//           handleSubmit={handleSubmit}
//           handleSelectChange={handleSelectChange}
//           handleTextChange={handleTextChange}
//           newEvent={newEvent}
//           />
//         </div>
//         <div className="events">
//           <ul>
//             {events.map((event) => {
//               const { people: attendees } = event;
              
//               return (
//                 <>
//                   <main>
//                     <li key={event.id}>
//                       <img src={event.eventImage} alt={event.name} />
                      
//                       <h5>
//                         {event.name} {event.eventType}
//                       </h5>
//                       <br />
//                       <span>Organized by: {event.organizer} </span>
//                       <br />
                      
//                       <button onClick={toggleEventAttendees}>
//                         {!showAttendees ? "Show Attendees" : "Hide Attendees"}
//                       </button>
                      
//                       {showAttendees ? (
//                         <div className="attendees">
//                           {attendees.map((attendee, index) => (
//                             <Attendees
//                             updateEventAttendance={updateEventAttendance}
//                             attendee={attendee}
//                             event={event}
//                             />
//                           ))}
//                         </div>
//                       ) : null}
//                     </li>
//                   </main>
//                 </>
//               );
//             }
//             )}
//           </ul>
//         </div>
//       </main>
//       <Footer />
//       </body>
//       </header>
//     </div>
//   );
//           }
} 
