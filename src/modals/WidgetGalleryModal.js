import React, { useState } from 'react'

import MyCustomWidget from '../widgets/MyCustomWidget'
export default function WidgetGalleryModal({ setShowWidgetModal, selectedWidgetArea, widgets, setWidgets }) {
  const [galleryWidgets, setGalleryWidgets] = useState([

   { component: <MyCustomWidget />, name: "" },
   
  ])
 
  
}