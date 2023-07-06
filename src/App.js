import React, { useState } from 'react';
import './App.css';
import WidgetGalleryModal from './modals/WidgetGalleryModal';
import Draggable from 'react-draggable';


import MyCustomWidget from './widgets/MyCustomWidget';
function App() {
 const [widgets, setWidgets] = useState([

  { id: new Date().getTime() + 1, component: <MyCustomWidget />, area: 'left-widget', name:"MyCustomWidget" },
 ])
 const [showWidgetModal, setShowWidgetModal] = useState(false)
 const [selectedWidgetArea, setSelectedWidgetArea] = useState('')
 
 const removeWidget = (index) => {
  try {
   setWidgets(widgets.filter(widget => widget.id !== index))
  } catch (error) {
   console.log(error)
  }
 }
 
 return (
  <>
   {showWidgetModal && <WidgetGalleryModal setShowWidgetModal={setShowWidgetModal} selectedWidgetArea={selectedWidgetArea} widgets={widgets} setWidgets={setWidgets} />}
   <div className="add-button"
    onClick={() => {
     console.log('add button clicked')
     setShowWidgetModal(true)
     setSelectedWidgetArea('none-widget')
    }}
   >
 
   </div>
   <div className='none-widget' >
    {widgets.length > 0 && widgets.map((widget, index) => {
     if (widget.area === 'none-widget') {
      return (
       <Draggable>
            <div style={{ padding: 10,}} className='widget-container' >
             <div style={{ marginBottom: 10 }}>
              <select value={widget.area}
               onChange={(e) => {
                let widgetList = [...widgets]
                widgetList[index].area = e.target.value
                setWidgets(widgetList)
               }}
              >
               <option value="none-widget">Floating</option>
               <option value="left-widget">Left</option>
               <option value="main-widget">Main</option>
               <option value="right-widget">Right</option>
              </select>
              <button
               onClick={() => {
                removeWidget(widget.id)
               }}
               style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
              >Close</button>
             </div>
             {widget.component}
            </div>
       </Draggable>
      )
     }
    })}
   </div>
   <div className="App">
    <div className="container">
     <div className='left-widget'>
      {widgets.length > 0 && widgets.map((widget, index) => {
       if (widget.area === 'left-widget') {
        return (
         <div style={{ padding: 10,}} className='widget-container'>
          <div style={{ marginBottom: 10 }}>
           <select value={widget.area}
            onChange={(e) => {
             let widgetList = [...widgets]
             widgetList[index].area = e.target.value
             setWidgets(widgetList)
            }}
           >
            <option value="none-widget">Floating</option>
            <option value="left-widget">Left</option>
            <option value="main-widget">Main</option>
            <option value="right-widget">Right</option>
           </select>
           <button
            onClick={() => {
             removeWidget(widget.id)
            }}
            style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
           >Close</button>
          </div>
          {widget.component}
         </div>
        )
       }
      })}

     </div>
     <div className='main-widget'>
      {widgets.length > 0 && widgets.map((widget, index) => {
       if (widget.area === 'main-widget') {
        return (
         <div style={{ padding: 10,}} className='widget-container' >
          <div style={{ marginBottom: 10 }}>
           <select value={widget.area}
            onChange={(e) => {
             let widgetList = [...widgets]
             widgetList[index].area = e.target.value
             setWidgets(widgetList)
            }}
           >
            <option value="none-widget">Floating</option>
            <option value="left-widget">Left</option>
            <option value="main-widget">Main</option>
            <option value="right-widget">Right</option>
           </select>
           <button
            onClick={() => {
             removeWidget(widget.id)
            }}
            style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
           >Close</button>
          </div>
          {widget.component}
         </div>
        )
       }
      })}

     </div>
     <div className='right-widget'>
      {widgets.length > 0 && widgets.map((widget, index) => {
       if (widget.area === 'right-widget') {
        return (
         <div style={{ padding: 10,}} className='widget-container'>
          <div style={{ marginBottom: 10 }}>
           <select value={widget.area}
            onChange={(e) => {
             let widgetList = [...widgets]
             widgetList[index].area = e.target.value
             setWidgets(widgetList)
            }}
           >
            <option value="none-widget">Floating</option>
            <option value="left-widget">Left</option>
            <option value="main-widget">Main</option>
            <option value="right-widget">Right</option>
           </select>
           <button
            onClick={() => {
             removeWidget(widget.id)
            }}
            style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
           >Close</button>
          </div>
          {widget.component}
         </div>
        )
       }
      })}
 
     </div>
    </div>
   </div>
  </>
 )
}
 
export default App;