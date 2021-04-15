import React from 'react'
import Band from './Band'

const Bands = (props) => {
    
    const renderBands = props.bands.map(band => <Band key={band.id} {...band}/>)

    return (
        <div>
            {renderBands}
        </div>
    )
}

export default Bands