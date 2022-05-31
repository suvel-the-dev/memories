import React from 'react'
import Polaroid from './_polaroid.js'

const MemoryFrames = ({ memories }) => {
    return (memories.map(memory => {
        return (
            <Polaroid
                key={memory.id}
                image={memory.image}
                title={memory.title}
                description={memory.description}
                location={memory.location}
                geoMark={memory.geoMark}
            />
        )
    }))
}

export default MemoryFrames