import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import memories from '../../data/info.js'
import styles from '../../styles/memory.module.css'
export default function Memory(props) {
    const { id } = useRouter().query;
    const [memory, setMemory] = useState({});

    useEffect(() => {
        console.log(memories)
        const selectedMemory = memories.find(mem => mem.id == id)
        console.log(selectedMemory)
        setMemory(selectedMemory)
    }, [id])

    useEffect(() => {
        console.log(memory)
    }, [memory])

    return (<div className='memory'>
        <section className={styles.memory_meta}>
            <div className={styles.memory_imgContainer}>
                <Image
                    className='memory_img'
                    layout='fill'
                    src={memory?.image || "https://picsum.photos/200"} />
            </div>
            <div className={styles.memory_details}>
                <h1 className='memory_title'>{memory?.title}</h1>
                <h2 className='memory_loc'>{memory?.location}</h2>
            </div>
        </section>
        <section >
            <p className={styles.memory_desc}>
                {memory?.description}
            </p>
        </section>
    </div >)
}