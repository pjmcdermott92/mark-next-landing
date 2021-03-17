import styles from '../styles/TotalValue.module.scss'

const TotalValue = () => {
    return (
        <>
        <div className={styles.valuesection}>
            <img src='images/product-sample.webp' alt='Placeholder image' width='800' height='450' />
            <ul className={styles.values}>
                <li>
                    <div>
                        <span>30 Days Of Video Coaching / Missions From Russell Brunson</span>
                        <span className={styles.value}>($997 Value)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>30 Days Of Live Coaching With Our Implementation Coaches!</span>
                        <span className={styles.value}>($997 Value)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>Get The NEW "OnePager" Digital Workbook For Each Mission!</span>
                        <span className={styles.value}>($247 Value)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>30 Days Access To The OFA Challenge Facebook Group</span>
                        <span className={styles.value}>($97 Value)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>Bonus Private "Big Breakthrough" Trainings In Private Group</span>
                        <span className={styles.value}>($297 Value)</span>
                    </div>
                </li>
                <li className={styles.bonusli}>
                    <div>
                        <span>
                        <span className={styles.bonus}>Bonus:</span>
                            The "30 Days" eBook (By "Two Comma Club" Winners)!
                        </span>
                        <span className={styles.value}>($97 Value)</span>
                    </div>
                </li>
                <li className={styles.bonusli}>
                    <div>
                        <span>
                        <span className={styles.bonus}>Bonus:</span>
                            Ultimate Access To The "30 Day" Interviews
                        </span>
                        <span className={styles.value}>($197 Value)</span>
                    </div>
                </li>
                <li className={styles.bonusli}>
                    <div>
                        <span>
                            <span className={styles.bonus}>Bonus:</span>
                            Behind The Scenes Of The "Two Comma Club" Funnels
                        </span>
                        <span className={styles.value}>($197 Value)</span>
                    </div>
                </li>
            </ul>
            <h2 className={styles.attentiongrabber}>Total Value: <del>$3,126</del></h2>
        </div>
        <div className='inner-content'>
            <p className='large-font center'>If you want to get your funnel LIVE and start building your business, then <u><em>this</em></u> is the mission we’re giving you...</p>
            <p className='large-font center blue-text'><strong>You have 30 Days, starting Mar 22nd...</strong></p>
            <p className='accent-header size-lg'>Do <u>YOU</u> Accept?</p>
        </div>
        </>
    )
}

export default TotalValue
