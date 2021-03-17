import styles from '../styles/StepCards.module.scss'

const StepCard = ({ step, title, image, children }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.step}>Step #{step}</h2>
            <div className={styles.image}>
                <img src={image} alt='Placeholder image' width='250' height='150' />
            </div>
            <h3><em>"{title}"</em></h3>

            {children}
        </div>
    )
}

export default StepCard
