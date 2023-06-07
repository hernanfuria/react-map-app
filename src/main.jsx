import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapApp } from './components/MapApp.jsx'

import 'leaflet/dist/leaflet.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MapApp />
  </React.StrictMode>,
)
