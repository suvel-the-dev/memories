import React from 'react'
import Polaroid from './_polaroid.js'

const MemoryFrames = ({ memories = [] }) => {
    if (memories?.length == 0) {
        return <></>
    }
    else {
        return (memories.map(memory => {
            return (
                <Polaroid
                    key={memory.id}
                    id={memory.id}
                    image={memory.image}
                    title={memory.title}
                    description={memory.description}
                    location={memory.location}
                    geoMark={memory.geoMark}
                />
            )
        }))
    }
}

export default MemoryFrames