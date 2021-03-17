import { useState, useEffect } from 'react'

const CtaCounter = () => {

        const [countdownDate, setCountdownDate] = useState(new Date('03/31/2021').getTime());
        const [counter, setCounter] = useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        })

        useEffect(() => {
            setInterval(() => updateCountdown(), 1000)
        }, [])

        const updateCountdown = () => {
            if (countdownDate) {
                const currentTime = new Date().getTime()
                const distanceToDate = countdownDate - currentTime
                let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
                let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),)
                let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60))
                let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

                const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Visual Appeal

                if (numbersToAddZeroTo.includes(hours)) hours = `0${hours}`
                if (numbersToAddZeroTo.includes(minutes)) minutes = `0${minutes}`

                setCounter({ days: days, hours: hours, minutes, seconds });
            }
        }

    return (
        <div className='cta-counter'>
            <span className='count-item'>
                <span className='count-value'>{counter.days || '0'}</span>
                <span className='interval'>Days</span>
            </span>
            <span className='count-item'>
                <span className='count-value'>{counter.hours || '00'}</span>
                <span className='interval'>Hours</span>
            </span>
            <span className='count-item'>
                <span className='count-value'>{counter.minutes || '00'}</span>
                <span className='interval'>Minutes</span>
            </span>
            <span className='count-item'>
                <span className='count-value'>{counter.seconds || '00'}</span>
                <span className='interval'>Seconds</span>
            </span>

            <style jsx>{`
                .cta-counter {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: .75rem;
                    max-width: 350px;
                    margin: 1rem auto;
                }
                .count-item {
                    margin: 0 auto;
                    padding: .5rem;
                    font-weight: 700;
                    font-size: 1.4rem;
                }
                .count-value {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    padding: .25rem;
                    border: 3px solid #FFF;
                    border-radius: 50%;
                }

                .interval {
                    display: block;
                    margin-top: .5rem;
                    font-size: .75rem;
                    color: #666;
                    text-transform: uppercase;
                }
            `}</style>
        </div>
    )
}

export default CtaCounter
