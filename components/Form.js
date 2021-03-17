import styles from '../styles/Form.module.scss'

const Form = () => {

    return (
        <div className={styles.formContainer}>
            <div className={styles.accordianHeader}>
                Step 1: Contact Info
            </div>
            <form className={styles.form} data-collapsed='false'>
                <div className={styles.formControl}>
                    <label htmlFor='name'>Full Name:</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name as it appears on card'
                        required
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='email'>Email Address:</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter your email address'
                        required
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='address'>Street Address:</label>
                    <input
                        type='text'
                        name='address'
                        id='address'
                        placeholder='Full street address'
                        required
                    />
                    <input
                        type='text'
                        name='city'
                        id='city'
                        placeholder='City name'
                        required
                    />
                    <div className={styles.stateZip}>
                        <input
                            type='text'
                            name='state'
                            id='state'
                            placeholder='State'
                            required
                        />
                        <input
                            type='text'
                            name='zip'
                            id='zip'
                            placeholder='Zip'
                            required
                        />
                    </div>
                    <button className={styles.submitBtn}>Next Step »</button>
                </div>
            </form>

            <div className={styles.accordianHeader}>
                Step 2: Payment Info
            </div>
            <form className={styles.form} data-collapsed='false'>
                <div className={styles.formControl}>
                    <label htmlFor='ccnum'>Credit Card Number:</label>
                    <input
                        type='text'
                        name='ccnum'
                        id='ccnum'
                        placeholder='Card number'
                        required
                    />
                </div>
                <div className={styles.formControl}>
                    <div className={styles.ccInfo}>
                        <div>
                            <label htmlFor='exp'>Exp:</label>
                            <input
                                type='text'
                                name='exp'
                                id='exp'
                                placeholder='MM / YY'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='cvc'>CVC:</label>
                            <input
                                type='text'
                                name='cvc'
                                id='cvc'
                                placeholder='CVC'
                                required
                            />
                        </div>
                    </div>
                    <button className={styles.submitBtn}>Check Out »</button>
                </div>
            </form>
        </div>
    )
}

export default Form
