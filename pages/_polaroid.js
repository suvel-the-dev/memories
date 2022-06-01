import React from 'react'
import styles from '../styles/polaroid.module.css'
import Image from 'next/image'
import Router from 'next/router'

const getRandomPlacement = () => {

    const possiblePlacements = ["-3deg", "2deg", "-7deg", "-13deg", "-8deg", "5deg", "-25deg", "13deg", "-10deg"];
    const possibleZIndex = ["1", "2"];
    const getRanPlc = () => {
        return possiblePlacements[Math.floor(Math.random() * possiblePlacements.length)];
    }
    const getRanZIndex = () => {
        return possibleZIndex[Math.floor(Math.random() * possibleZIndex.length)];
    }
    return { "transform": `rotate(${getRanPlc()})`, "zIndex": getRanZIndex() }
}


function Polaroid({ id, image, title, description, location, geoMark }) {

    return (
        <>
            <div onClick={() => { Router.push(`/memory/${id}`) }} style={getRandomPlacement()} className={styles.polaroid}>
                <div id={id} className={styles.polaroid_imgContainer} >
                    <Image layout="fill" className={styles.polaroid_img} src={image} />
                </div>
                <div className={styles.polaroid_caption}>{title}</div>
            </div>
        </>
    )
}

export default Polaroid
