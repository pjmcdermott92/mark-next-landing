import Link from 'next/link'

const CtaButton = ({ size }) => {
    return (
        <Link href='/'>
            <div className='cta-button'>
                <span className={size === 'small' ? 'button-small-text' : 'button-large-text'}>Join The Challenge Now!</span>
                <span className='button-subtext'>I Want Daily Training, LIVE Coaching, and Accountability, From Day 1 To Day 30</span>
            </div>
        </Link>
    )
}

export default CtaButton
