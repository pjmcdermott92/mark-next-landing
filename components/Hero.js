import CtaButton from './CtaButton'
import CtaCounter from './CtaCounter'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='flex-parent'>
                <div className='hero-video'>
                    <div className="responsive-item has-shadow">
                        <iframe
                            title="Academy"
                            src="https://www.videoask.com/fse3pf1rl"
                            allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;">
                        </iframe>
                    </div>
                    <h3>The <u>Life</u> You Want, The <u>Marriage</u> You Want... The <u>Family</u> That You Want, Is Going To Be <strong>Fueled By The Business You Build...</strong></h3>
                </div>
                <div className="hero-action">
                    <h3>The Next <strong>'ONE FUNNEL AWAY'</strong> Challenge Starts On Mar 22nd...</h3>
                    <img src="images/product-sample.webp" alt="Placeholder image" width='500' height='281' />
                    
                    <p>Registration Ends Mar 21st At 10PM ET!</p>
                    <div className='spacer' />
                    <h3><strong>Join The Challenge Now For A One-Time Discounted Payment Of Only $100</strong></h3>
                    <CtaButton size="small" />
                </div>
            </div>
        </div>
    )
}

export default Hero
