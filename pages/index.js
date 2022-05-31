import Polaroid from './_polaroid.js'
import memories from '../data/info.js'
import styles from '../styles/gallery.module.css'

const MemoryFrames = () => {
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
export default function Home() {

  return (<div className={styles.gallery}>
    <MemoryFrames />
  </div>)
}
