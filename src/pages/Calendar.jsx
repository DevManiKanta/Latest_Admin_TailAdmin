const _jsxFileName = ""; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; };
import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Modal } from "../components/ui/modal";
import { useModal } from "../hooks/useModal";
import PageMeta from "../components/common/PageMeta";







const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(
    null
  );
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventLevel, setEventLevel] = useState("");
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const { isOpen, openModal, closeModal } = useModal();

  const calendarsEvents = {
    Danger: "danger",
    Success: "success",
    Primary: "primary",
    Warning: "warning",
  };

  useEffect(() => {
    // Initialize with some events
    setEvents([
      {
        id: "1",
        title: "Event Conf.",
        start: new Date().toISOString().split("T")[0],
        extendedProps: { calendar: "Danger" },
      },
      {
        id: "2",
        title: "Meeting",
        start: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        extendedProps: { calendar: "Success" },
      },
      {
        id: "3",
        title: "Workshop",
        start: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        end: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        extendedProps: { calendar: "Primary" },
      },
    ]);
  }, []);

  const handleDateSelect = (selectInfo) => {
    resetModalFields();
    setEventStartDate(selectInfo.startStr);
    setEventEndDate(selectInfo.endStr || selectInfo.startStr);
    openModal();
  };

  const handleEventClick = (clickInfo) => {
    const event = clickInfo.event;
    setSelectedEvent(event );
    setEventTitle(event.title);
    setEventStartDate(_optionalChain([event, 'access', _ => _.start, 'optionalAccess', _2 => _2.toISOString, 'call', _3 => _3(), 'access', _4 => _4.split, 'call', _5 => _5("T"), 'access', _6 => _6[0]]) || "");
    setEventEndDate(_optionalChain([event, 'access', _7 => _7.end, 'optionalAccess', _8 => _8.toISOString, 'call', _9 => _9(), 'access', _10 => _10.split, 'call', _11 => _11("T"), 'access', _12 => _12[0]]) || "");
    setEventLevel(event.extendedProps.calendar);
    openModal();
  };

  const handleAddOrUpdateEvent = () => {
    if (selectedEvent) {
      // Update existing event
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === selectedEvent.id
            ? {
                ...event,
                title: eventTitle,
                start: eventStartDate,
                end: eventEndDate,
                extendedProps: { calendar: eventLevel },
              }
            : event
        )
      );
    } else {
      // Add new event
      const newEvent = {
        id: Date.now().toString(),
        title: eventTitle,
        start: eventStartDate,
        end: eventEndDate,
        allDay: true,
        extendedProps: { calendar: eventLevel },
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    closeModal();
    resetModalFields();
  };

  const resetModalFields = () => {
    setEventTitle("");
    setEventStartDate("");
    setEventEndDate("");
    setEventLevel("");
    setSelectedEvent(null);
  };

  return (
    React.createElement(React.Fragment, null
      , React.createElement(PageMeta, {
        title: "React.js Calendar Dashboard | TailAdmin - Next.js Admin Dashboard Template"         ,
        description: "This is React.js Calendar Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
      )
      , React.createElement('div', { className: "rounded-2xl border  border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}
        , React.createElement('div', { className: "custom-calendar", __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}
          , React.createElement(FullCalendar, {
            ref: calendarRef,
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            initialView: "dayGridMonth",
            headerToolbar: {
              left: "prev,next addEventButton",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            },
            events: events,
            selectable: true,
            select: handleDateSelect,
            eventClick: handleEventClick,
            eventContent: renderEventContent,
            customButtons: {
              addEventButton: {
                text: "Add Event +",
                click: openModal,
              },
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 126}}
          )
        )
        , React.createElement(Modal, {
          isOpen: isOpen,
          onClose: closeModal,
          className: "max-w-[700px] p-6 lg:p-10"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}

          , React.createElement('div', { className: "flex flex-col px-2 overflow-y-auto custom-scrollbar"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}
              , React.createElement('h5', { className: "mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}
                , selectedEvent ? "Edit Event" : "Add Event"
              )
              , React.createElement('p', { className: "text-sm text-gray-500 dark:text-gray-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}}, "Plan your next big moment: schedule or edit an event to stay on track"


              )
            )
            , React.createElement('div', { className: "mt-8", __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}
                  , React.createElement('label', { className: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}}, "Event Title"

                  )
                  , React.createElement('input', {
                    id: "event-title",
                    type: "text",
                    value: eventTitle,
                    onChange: (e) => setEventTitle(e.target.value),
                    className: "dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"                     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}}
                  )
                )
              )
              , React.createElement('div', { className: "mt-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 178}}
                , React.createElement('label', { className: "block mb-4 text-sm font-medium text-gray-700 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 179}}, "Event Color"

                )
                , React.createElement('div', { className: "flex flex-wrap items-center gap-4 sm:gap-5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 182}}
                  , Object.entries(calendarsEvents).map(([key, value]) => (
                    React.createElement('div', { key: key, className: "n-chk", __self: this, __source: {fileName: _jsxFileName, lineNumber: 184}}
                      , React.createElement('div', {
                        className: `form-check form-check-${value} form-check-inline`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 185}}

                        , React.createElement('label', {
                          className: "flex items-center text-sm text-gray-700 form-check-label dark:text-gray-400"     ,
                          htmlFor: `modal${key}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 188}}

                          , React.createElement('span', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 192}}
                            , React.createElement('input', {
                              className: "sr-only form-check-input" ,
                              type: "radio",
                              name: "event-level",
                              value: key,
                              id: `modal${key}`,
                              checked: eventLevel === key,
                              onChange: () => setEventLevel(key), __self: this, __source: {fileName: _jsxFileName, lineNumber: 193}}
                            )
                            , React.createElement('span', { className: "flex items-center justify-center w-5 h-5 mr-2 border border-gray-300 rounded-full box dark:border-gray-700"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 202}}
                              , React.createElement('span', { className: "w-2 h-2 bg-white rounded-full dark:bg-transparent"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 203}})
                            )
                          )
                          , key
                        )
                      )
                    )
                  ))
                )
              )

              , React.createElement('div', { className: "mt-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 214}}
                , React.createElement('label', { className: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 215}}, "Enter Start Date"

                )
                , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 218}}
                  , React.createElement('input', {
                    id: "event-start-date",
                    type: "date",
                    value: eventStartDate,
                    onChange: (e) => setEventStartDate(e.target.value),
                    className: "dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"                         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 219}}
                  )
                )
              )

              , React.createElement('div', { className: "mt-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 229}}
                , React.createElement('label', { className: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 230}}, "Enter End Date"

                )
                , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 233}}
                  , React.createElement('input', {
                    id: "event-end-date",
                    type: "date",
                    value: eventEndDate,
                    onChange: (e) => setEventEndDate(e.target.value),
                    className: "dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"                         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 234}}
                  )
                )
              )
            )
            , React.createElement('div', { className: "flex items-center gap-3 mt-6 modal-footer sm:justify-end"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 244}}
              , React.createElement('button', {
                onClick: closeModal,
                type: "button",
                className: "flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"                 , __self: this, __source: {fileName: _jsxFileName, lineNumber: 245}}
, "Close"

              )
              , React.createElement('button', {
                onClick: handleAddOrUpdateEvent,
                type: "button",
                className: "btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 252}}

                , selectedEvent ? "Update Changes" : "Add Event"
              )
            )
          )
        )
      )
    )
  );
};

const renderEventContent = (eventInfo) => {
  const colorClass = `fc-bg-${eventInfo.event.extendedProps.calendar.toLowerCase()}`;
  return (
    React.createElement('div', {
      className: `event-fc-color flex fc-event-main ${colorClass} p-1 rounded`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 270}}

      , React.createElement('div', { className: "fc-daygrid-event-dot", __self: this, __source: {fileName: _jsxFileName, lineNumber: 273}})
      , React.createElement('div', { className: "fc-event-time", __self: this, __source: {fileName: _jsxFileName, lineNumber: 274}}, eventInfo.timeText)
      , React.createElement('div', { className: "fc-event-title", __self: this, __source: {fileName: _jsxFileName, lineNumber: 275}}, eventInfo.event.title)
    )
  );
};

export default Calendar;
