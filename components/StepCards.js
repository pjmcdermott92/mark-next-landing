import StepCard from './StepCard'
import styles from '../styles/StepCards.module.scss'

const StepCards = () => {
    return (
        <div className={styles.container}>
            <StepCard step='1' title='The Strategy' image='images/OFA-placeholder-step-1.webp'>
                <p>Each day, you will receive <u>a new mission from Russell</u>, streamed to the private Facebook group.</p>
                <p>These private videos will be about 30 minutes long, and will give you the <u>strategy</u> you have to master for each step you need for success.</p>
                <p>You will have the ability to network with and ask questions to our coaches as well as others OFA-ers who are also going through the challenge with you!</p>
            </StepCard>
            <StepCard step='2' title='The Tactics' image='images/OFA-placeholder-step-2.webp'>
                <p>After the stream ends in the Facebook group, you will be given a <strong>"One Pager" mission document</strong> with the exact step by step tactics you need to implement to complete that step.</p>
                <p>There will be videos showing <u>HOW to implement the strategy</u> as well as a digital workbook to help keep everything clear!</p>
                <p>These missions will take between 30-60 minutes to complete each day.</p>
            </StepCard>
            <StepCard step='3' title='Implementation' image='images/OFA-placeholder-step-3.webp'>
                <p>Not only do you get 30 days of daily video coaching and accountability…</p>
                <p>You also <strong>get LIVE TRAINING SESSIONS 3 days a week</strong> with our expert OFA consultants.</p>
                <p>On these special live trainings, you get to pick their brains and ask ANY question you have about your funnels, strategies, your offer, tech challenges, you name it.</p>
                <p><strong>It’s like having your very own DEDICATED SUPPORT TEAM.</strong></p>
            </StepCard>
        </div>
    )
}

export default StepCards
