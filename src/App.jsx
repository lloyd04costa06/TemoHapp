import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import AllEvents from './components/AllEvents'
import Events from './components/Events'
import CollegeRegistration from './components/CollegeRegistration'
import EventRegistration from './components/EventRegistration'
import './index.css'
import EventSelection from './components/EventSelection'
import TicketsSection from './components/TicketsSection'
import BookTickets from './components/BookTickets'
import Auth from './components/Auth'
import FogotPassword from './components/ForgotPassword'
import Hero from './components/HeroSection'
import Teams from './components/Teams'
import Schedule from './components/Schedule'
import EventSection from './components/EventSection'
import GeneralRulePage from './components/GeneralRulePage'
import Sponsor from './components/Sponsor'
import Clouds from './components/Clouds'
import Venue from './components/Venue'
import Footer from './components/Footer'
import { useLocation } from "react-router-dom";
import Modal from './components/Modal'

function App() {
  const location = useLocation();
  console.log(location);

  return (

    <>

      <Routes>
        <Route
          element={
            <>
              <Hero />
              <About s={''} animation={'will-change-auto section-2'} />
              <EventSection />
              <Schedule />
              {/* <Sponsor /> */}
              <Venue />
              <Footer />

            </>
          }
          path='/'
        />
        {/* <Route element={<Hero title="Hero"/>} path="/" />
          <Route element={<About title="About"/>} path="/About" s={''} animation={'will-change-auto section-2'} />
          <Route path="/all-events" element={<AllEvents title="All Events"/>} />

          <Route path="/events" element={<Events title="Events"/>} />
          <Route element={<Schedule title="Schedule"/>} path="/schedule"/>
          <Route element={<EventSection title="Event Section"/>} path="/event-section"/>
          <Route element={<Sponsor title="Sponsor"/>} path="/sponsor"/> */}
        <Route element={<CollegeRegistration title="College Registration" />} path="/college-registration" />
        <Route element={<EventRegistration title="Event Registration" />} path="/event-registration" />
        <Route element={<EventSelection title="Event Selection" />} path="/event-selection" />
        <Route element={<TicketsSection title="Tickets" />} path="/tickets" />
        <Route element={<BookTickets title="Buy Tickets" />} path="/buy" />
        <Route element={<Auth title="Authentication" />} path="/auth" />
        <Route element={<FogotPassword title="Fogot Password" />} path="/resetpass" />
        <Route element={<Teams title="Teams" />} path="/Teams/" />
        <Route element={<GeneralRulePage title="GeneralRulePage" />} path="/GeneralRule" />
        <Route element={<Modal title="Modal" />} path="/Modal" />

      </Routes>

    </>
  )
}

export default App