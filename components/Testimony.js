import styles from '../styles/Testimony.module.scss'

const Testimony = ({name, img, children}) => {
    return (
        <div className={styles.testimony}>
            <img src={img} alt={name} width='80' height='80' />
            <div className={styles.inner}>
                <p className={styles.name}>{name}</p>
                {children}
            </div>
        </div>
    )
}

export default Testimony
