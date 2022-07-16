import React from 'react'

function Map({url}) {
    
  return (
    <div>
         <iframe
            src={url}
            frameBorder="0"
            style={{ border: 0, width: "100%", height: "100%" }}
            loading="lazy">

        </iframe>
    </div>
  )
}

export default Map