import styles from '../styles/gallery.module.css'

const Gallery = ({ children }) => {
    return (<div className={styles.gallery}>
        {children}
    </div>)
}

export default Gallery;