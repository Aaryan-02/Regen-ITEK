"use client"

import { useEffect, useState } from "react"
import { PopupButton } from "react-calendly"
import { Calendar, X } from "lucide-react"
import "./calendly-widget.css";

const CalendlyWidget = () => {
  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Auto-collapse after 5 seconds on initial load
    const timer = setTimeout(() => {
      setExpanded(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="calendly-widget-container">
      {expanded ? (
        <div className="calendly-widget-expanded">
          <button
            className="calendly-widget-close"
            onClick={() => setExpanded(false)}
            aria-label="Close scheduling widget"
          >
            <X size={18} />
          </button>
          <div className="calendly-widget-content">
            <h4>Schedule a Meeting</h4>
            <p>Book a consultation with our team</p>
            <PopupButton
              url="https://calendly.com/imaryan32/regen-itek-meeting" // Replace with your actual Calendly URL
              text="Select a Time"
              rootElement={document.body}
              className="calendly-popup-button"
            />
          </div>
        </div>
      ) : (
        <button
          className="calendly-widget-button"
          onClick={() => setExpanded(true)}
          aria-label="Open scheduling widget"
        >
          <span className="calendly-widget-pulse"></span>
          <Calendar className="calendly-widget-icon" />
          <span className="calendly-widget-text">Schedule</span>
        </button>
      )}
    </div>
  )
}

export default CalendlyWidget
