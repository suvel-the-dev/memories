import Polaroid from './_polaroid.js'
import memories from '../data/info.js'
import Gallery from './_gallery.js'
import MemoryFrames from './_memoryFrames.js'

export default function Home() {

  return (<Gallery><MemoryFrames memories={memories} /></Gallery>)
}
