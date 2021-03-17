import Hero from '../components/Hero'
import CtaButton from '../components/CtaButton'
import Testimony from '../components/Testimony'
import TotalValue from '../components/TotalValue'
import StepCards from '../components/StepCards'

export default function Home() {
  return (
  <>
    <div className='above-fold-wrapper'>
      <div className='container'>
        <div className='proem-wrapper'>
          <span className='proem-text-small'>"How Would You Like <strong>Us To Hold You By The Hand</strong> As You</span>
          <span className='proem-text-medium'>Launch Your First</span>
          <span className="proem-text-large">(Or Next) Funnel!"</span>
        </div>
        <Hero />
      </div>
    </div>
    <div className="content-wrapper">
      <div className="inner-content">

        <div className='question-section-intro'>
          <div className='flex-parent'>
            <img src='images/question.webp' className='question-mark' alt="Question mark" width='200' height='200'/>
            <div className='question-intro-text'>
              <h2 className='question-text-lg'>What Does...</h2>
              <h1 className='question-text-xl'>'One Funnel Away'</h1>
              <h3 className='question-text-lg'>Mean To You...?</h3>
            </div>
          </div>
        </div>

        <div className='flex-parent'>
          <div className='flex-lg'>
            <p><strong><span className='text-blue'>FROM:</span></strong> Russell Brunson</p>
            <p><strong><span className='text-blue'>WHERE:</span></strong> Boise, Idaho</p>
            <p>What does <strong>'One Funnel Away' mean for you...?</strong></p>
            <p>For everyone it's different...</p>
            <p>For some of you, <u>you're in a job that you hate</u>, and you're trying to get out.</p>
            <p>For others, you are entrepreneurs with your own company... <u>but you're stuck, and you're not sure why.</u></p>
            <p>And for others of you, you're looking for that one funnel that will help you to <strong>have more impact on the world!</strong></p>
            <p>Before I share with you MY GOAL for this 'One Funnel Away challenge for YOU... let me ask you a few questions...</p>
          </div>
          <div className='flex-sm'>
            <div style={{maxWidth: '300px'}}>
              <img src='images/russell-dark-new.webp' alt='Placeholder image' width='281' height='500' />
            </div>
          </div>
        </div>

        <div className='questionaire-section-box'>
          <h3 className='accent-header size-md'>Please Check All Of The Questions Where Your Answer Is YES!</h3>
          
          <div className='flex-parent nowrap'>
            <span><input type='checkbox' id='whereToStart' /></span>
            <label htmlFor='whereToStart'>Do you want to grow your business online, but you have <u>NO IDEA where to start</u>?</label>
          </div>
          <div className='flex-parent nowrap'>
            <span><input type='checkbox' id='feelingStuck' /></span>
            <label htmlFor='feelingStuck'>Do you have a company that's been successful, but for some reason <u>you're feeling stuck</u>?</label>
          </div>
          <div className='flex-parent nowrap'>
            <span><input type='checkbox' id='liveAccess' /></span>
            <label htmlFor='liveAccess'>Do you want <u>direct live access</u> to experts who can help you with your funnels, strategy offer, marketing, sales, and ANY question you have?</label>
          </div>
          <div className='flex-parent nowrap'>
            <span><input type='checkbox' id='biggerImpact' /></span>
            <label htmlFor='biggerImpact'>Are you trying to figure out a way to <strong>reach more people</strong>, or have a <u>bigger impact on the world</u>?</label>
          </div>
          <div className='flex-parent nowrap'>
            <span><input type='checkbox' id='convincedFunnel' /></span>
            <label htmlFor='convincedFunnel'>Are you <strong>convinced that you need a funnel</strong>, but you aren't quite sure what steps to take?</label>
          </div>
          <div className='flex-parent nowrap'>
            <span><input type='checkbox' id='launchNextFunnel' /></span>
            <label htmlFor='launchNextFunnel'>Are you <u>about to launch your next funnel</u>, and want to make sure it's a <strong>huge success!?!</strong></label>
          </div>

        </div>

        <div className='narrow-content'>
          <h4 className='center large-font'>If You Checked ANY Of The Boxes Above, Then I Want To Invite You To Join The <strong>'One Funnel Away'</strong> Challenge <u>And Change Your Business Forever</u>!</h4>
          <h4 className='accent-header size-lg'>So, Here Is How The Challenge Works...</h4>
        </div>

        <p><strong>The challenge costs $100 to join.</strong> This covers your materials during the challenge (more info on this below).</p>
        <div className="narrow-content">
          <img src='images/100dollars.webp' alt="Placeholder image" width='800' height='450' />
        </div>
        <p>With the <strong>One Funnel Away Challenge</strong>, we could easily charge $1,000 for the full 30 day challenge…</p>
        <p>Probably even $2,000, <em>or more, but...</em></p>
        <p className='accent-header size-xl'>All You Pay Is $100!</p>

        <Testimony name='Beatrice' img='images/avatar.webp'>
          <p><span className='highlight'>I don't think I have ever invested $100 more efficiently</span> and effectively in anything I have ever invested in...</p>
          <p>I have gained knowledge already that is absolutely PRICELESS!... I appreciate that you keep going to teach us and create more abundance for us. Thank You, Thank You!</p>
        </Testimony>

        <p className='accent-header size-md'>Then In Exchange For That Tiny $100 Investment, You Get ALL Of This:</p>
        <br />
        <div className='narrow-content'>
          <div className='accent-box box-blue'>
            <TotalValue />
            <div className='inner-content'>
              <CtaButton />
            </div>
          </div>
        </div>

        <h3 className='accent-header size-md text-blue'>Need More Information Before You Make Your Decision...?</h3>
        <p className='large-font text-blue center'>Let Me Break Down All The Awesome Stuff You'll Get When You Join The Challenge Today!</p>

      </div>

      <div className='accent-box box-red'>
        <div className='inner-content'>
          
          <div className="parallax-box dark">
            <div className="flex-parent">
              <div className="flex-xs">
                <img src='images/ofa_small-min.webp' alt='Placeholder image' width='500' height='281' />
              </div>
              <div className='flex-lg'>
                <p>The First Thing <strong>You’ll <u>Get Access</u> To Is The...</strong></p>
                <p className='med'>'One Funnel Away'</p>
                <p className='large'>CHALLENGE...</p>
              </div>
            </div>
          </div>

          <p>Led by Trainer <strong>Russell Brunson and The ‘One Funnel Away’ Consulting Team</strong>, this challenge is designed to help you <strong>Customize</strong> and <strong><u>IMPLEMENT</u></strong> your first (or next) funnel in just 30 days…</p>
          <StepCards />
          <p className='accent-header size-lg'>Here Is Your Mission,</p>
          <p className='large-font center'><strong>(Should You Choose To Accept This Challenge…)</strong></p>

          <div className="accent-box box-red">
            <div className="inner-content center">
              <p className='accent-header size-md text-red'>
                Your Challenge Is To <u>TAKE ACTION</u> <br />
                And Complete The Tasks Given To You,<br />
                <strong>Every Day For 30 Days</strong></p>
            </div>
          </div>

          <div className='flex-parent'>
            <div className="flex-lg">
              <p>Yes, there will be some prep-work involved…</p>
                <p>Yes, there will be homework…</p>
                <p>But every day, you’ll be taking steps toward building your business!</p>
                <p><strong>Our only question for you is…</strong></p>
                <h3 className='accent-header size-md'>“Do YOU Have What It Takes?”</h3>
                <p className='center'><strong>By the time the challenge is over, you will have a funnel that is <u>LIVE!</u></strong></p>
                <p>Not only will we help you figure out what that funnel is, but you’ll have it created and <strong>FINISHED</strong> by the end of the challenge!</p>
                <p>And, you’ll be able to launch it to the world, generate leads, and turn those leads into customers who buy from you again and again.</p>
            </div>
            <div className="flex-sm">
              <Testimony name='David Fee' img='images/avatar.webp'>
                <p>Thanks for this - <span className='highlight'>Genius Training</span> today - Totally turned my head around with my product - And all the past products I sold could have killed it but that is the past</p>
              </Testimony>
              <Testimony name='Debby Donaldson' img='images/avatar.webp'>
                <p>I have a tremendous amount of experience in marketing, sales, and leadership. I devoured Russell's books as soon as they arrived.</p>
                <p>However, I knew I needed Help... I signed up for OFA and Having a Function funnel thanks to you and Russell... <span className='highlight'>It has made almost $1,000 in just a few days.</span></p>
                <p>Thank You So Much.</p>
              </Testimony>
            </div>
          </div>
          <CtaButton />

        </div>
      </div>
      
      <div className="inner-content">
        
        <div className="parallax-box light">
          <div className="flex-parent">
            <div className="flex-xs">
              <img src='images/ofa_small-min.webp' alt='Placeholder image' width='500' height='281' />
            </div>
            <div className='flex-lg'>
              <p>Get These AMAZING Bonuses... </p>
              <p className='med'>
                When You Join The<br />
                "One Funnel Away"<br />
                Challenge Today... </p>
            </div>
          </div>
        </div>

        <div className="flex-parent">
          <div className="flex-sm">
            <h3 className='accent-header size-md'>Bonus # 1</h3>
            <h4 className='accent-header'>The “30 Days” 550 Page Digital EBook</h4>
            <p className='center'>($97 Value)</p>
            <img src="images/30daysbook.webp" alt="Placeholder image" width='300' height='169' />
            <CtaButton size='small' />

            <Testimony name='David Fee' img='images/avatar.webp'>
              <p>Thanks for this - <span className='highlight'>Genius Training</span> today - Totally turned my head around with my product - And all the past products I sold could have killed it but that is the past</p>
            </Testimony>
            <Testimony name='Justin Humphries' img='images/avatar.webp'>
              <p><strong>The One Funnel Challenge has changed my life!</strong> I'm not even joking. Let me explain... For the last 10 years I have been trying to make this internet marketing thing work. I bought course after course,
              training after training... I've logged thousands of hours learning and doing. But nothing - and I mean NOTHING stuck. I couldn't ever get any traxction. <strong>When the 30 Days Summit and book came out I got so excited</strong>
              because I thought, <span className='highlight'>"if I can learn from 30 millionaires</span> <strong>what they knew... During the pre-launch I started to believe again.</strong> Not believe that it's possible (in general)
              but that I can actually do it. No, not that I can do it, but that I WILL do it! </p>
            </Testimony>
            <Testimony name='Debby Donaldson' img='images/avatar.webp'>
              <p>I have a tremendous amount of experience in marketing, sales, and leadership. I devoured Russell's books as soon as they arrived.</p>
              <p>However, I knew I needed Help... I signed up for OFA and Having a Function funnel thanks to you and Russell... <span className='highlight'>It has made almost $1,000 in just a few days.</span></p>
              <p>Thank You So Much.</p>
            </Testimony>
            <Testimony name='Debby Donaldson' img='images/avatar.webp'>
              <p>I have a tremendous amount of experience in marketing, sales, and leadership. I devoured Russell's books as soon as they arrived.</p>
              <p>However, I knew I needed Help... I signed up for OFA and Having a Function funnel thanks to you and Russell... <span className='highlight'>It has made almost $1,000 in just a few days.</span></p>
              <p>Thank You So Much.</p>
            </Testimony>

          </div>
          <div className='flex-lg'>
            <p>Recently, I asked 30 of my ‘Two Comma Club’ members <em>(those who have generated over $1 Million+ inside their ClickFunnels funnel)</em> a very loaded question...</p>
            <h2 className="accent-header">“You Suddenly Lose EVERYTHING…</h2>
            <p>You lose all your money, along with your name and reputation, and only have your marketing know-how left.</p>
            <p>You have bills piled high, and people harassing you for money over the phone.</p>
            <p>Plus, you have a guaranteed roof over your head, a phone line, an internet connection, and a ClickFunnels account for only one month.</p>
            <p>You no longer have your big guru name, your following, or JV partners. Other than your vast marketing experience, <strong>you're an unknown newbie.</strong></p>
            <div className='center'>
              <h2 className="accent-header">What Would You Do?</h2>
              <p className="text-blue"><strong>(From Day 1 To Day 30) If You Knew You Only Had ONE FUNNEL To Make Back Your Millions?”</strong></p>
            </div>
            <p>Each of them replied to my email with a brilliant detailed 30-day plan of what they’d do to get back on TOP.</p>
            <p>They broke it down <strong>day-by-day…</strong></p>
            <p><strong>“Day 1, I’d do this…  Day 2, I’d do this… Day 3, I’d do this…”</strong></p>
            <p>Each of them laid out a complete <strong>30 day battle plan</strong> to get their business back on track...starting back at “square one” with:</p>
            <ul className='red-check'>
              <li><strong>No Product…</strong></li>
              <li><strong>No List…</strong></li>
              <li><strong>No Traffic...Running Errands...</strong></li>
              <li><strong>No Reputation...</strong></li>
              <li><strong>And No Funnel...</strong></li>
            </ul>
            <p>The <strong>“30 Days” book is a GIANT 550 page ebook</strong> of ALL their compiled battleplans (Day 1 through Day 30).</p>
            <p>30 chapters... <br /> 30 action plans...</p>
            <p>You can actually flip through the pages day-by-day, and SEE the “big picture” of their ONE FUNNEL plan <strong>laid out right in front of you!</strong></p>
            <p>You can page through, and reference it as you try out new business ideas...</p>
            <p><strong>If you’re starting from scratch</strong> (or starting again), with no name, no reputation, no list, no money, no traffic, and no product…</p>
            <p>The One Funnel Away Challenge is what I would do, from Day 1 to Day 30, if I lost everything, and had to create <strong>ONE FUNNEL</strong> to get back on track!</p>
          </div>
        </div>
        <hr />
        <div className='flex-parent'>
          <div className='flex-lg'>
            <p>Each day of the One Funnel Away Challenge, <strong>you’ll be given tasks</strong> that you’ll need to complete in order to get your funnel built and <strong>LIVE</strong>.</p>
            <p>The "One Pager" Digital Workbooks acts as your companion to the steaming training's (Day 1 through Day 30).</p>
            <p>Inside each "One Pager," you’ll find training that correspond with <strong>EACH day of the Challenge</strong>.</p>
            <p><strong>Each "One Pager" has:</strong></p>
            <ul className='red-check'>
              <li><strong>A CHECKLIST of tasks</strong> or reminders that need to be completed that day</li>
              <li><strong>Plenty of space for journaling and brainstorming your ideas,</strong> and answering key thought-provoking questions</li>
              <li><strong>The video training links</strong> that correspond with each day’s mission</li>
              <li><strong>And, any extra resource links</strong> you’ll need to complete the day’s tasks</li>
            </ul>
            <div style={{maxWidth: '300px', margin: '0 auto'}}>
              <img src='images/OFA-placeholder-step-2.webp' alt='Placeholder image' width='500' height='281' />
            </div>
          </div>
          <div className='flex-sm'>
            <h3 className='accent-header size-md'>Bonus # 2</h3>
            <h4 className='accent-header'>20 "One Pager" Digital Workbooks For The "One Funnel Away" Challenge!</h4>
            <img src='images/placeholder-pamphlets.webp' alt='Placeholder image' width='500' height='281' />
            <CtaButton size='small' />
            <Testimony name='David Fee' img='images/avatar.webp'>
              <p>Thanks for this - <span className='highlight'>Genius Training</span> today - Totally turned my head around with my product - And all the past products I sold could have killed it but that is the past</p>
            </Testimony>
            <Testimony name='Debby Donaldson' img='images/avatar.webp'>
              <p>I have a tremendous amount of experience in marketing, sales, and leadership. I devoured Russell's books as soon as they arrived.</p>
              <p>However, I knew I needed Help... I signed up for OFA and Having a Function funnel thanks to you and Russell... <span className='highlight'>It has made almost $1,000 in just a few days.</span></p>
              <p>Thank You So Much.</p>
            </Testimony>
          </div>
        </div>
        <hr />

        <h2 className='accent-header size-md'>These Bonuses Are <u>ALL</u> Inside The One Funnel Away Challenge...</h2>
        
        <div className="flex-parent">
          <div className="flex-sm">
            <Testimony name='Diego Rod' img='images/avatar.webp'>
              <p><span className='highlight'>This One Funnel Away Challenge is a Life Saver!!!</span> Extremely happy I joined and took up the challenge. <strong>Smartest investment I have ever made (Time &amp; Money!)</strong></p>
            </Testimony>
          </div>
          <div className="flex-sm">
            <ul className='red-check'>
              <li>The Challenge "One Pagers"… (act as a day-by-day companion guide to the Challenge)</li>
              <li>And, the BONUS 550 page <strong>digital “30 Days” eBook…</strong></li>
            </ul>
          </div>
        </div>

        <h2 className='accent-header'>You'll Get Immediate Access To The Bonuses The Moment You Join The ‘One Funnel Away’ Challenge Today!</h2>
        <br />
        <CtaButton />
        
      </div>

    </div>

    <div className="content-wrapper">
      <div className="inner-content">
        
        <div className="flex-parent">
          <div className="flex-sm">
            <Testimony name='David Fee' img='images/avatar.webp'>
              <p>Thanks for this - <span className='highlight'>Genius Training</span> today - Totally turned my head around with my product - And all the past products I sold could have killed it but that is the past</p>
            </Testimony>
            <Testimony name='Justin Humphries' img='images/avatar.webp'>
              <p><strong>The One Funnel Challenge has changed my life!</strong> I'm not even joking. Let me explain... For the last 10 years I have been trying to make this internet marketing thing work. I bought course after course,
              training after training... I've logged thousands of hours learning and doing. But nothing - and I mean NOTHING stuck. I couldn't ever get any traxction. <strong>When the 30 Days Summit and book came out I got so excited</strong>
              because I thought, <span className='highlight'>"if I can learn from 30 millionaires</span> <strong>what they knew... During the pre-launch I started to believe again.</strong> Not believe that it's possible (in general)
              but that I can actually do it. No, not that I can do it, but that I WILL do it! </p>
            </Testimony>
            <Testimony name='Debby Donaldson' img='images/avatar.webp'>
              <p>I have a tremendous amount of experience in marketing, sales, and leadership. I devoured Russell's books as soon as they arrived.</p>
              <p>However, I knew I needed Help... I signed up for OFA and Having a Function funnel thanks to you and Russell... <span className='highlight'>It has made almost $1,000 in just a few days.</span></p>
              <p>Thank You So Much.</p>
            </Testimony>
          </div>
          <div className='flex-lg'>
            <h2 className='accent-header'>The One Funnel Away Challenge Is Different!</h2>
            <div style={{maxWidth: '240px', margin: '3rem auto 1rem'}}>
              <img src='images/kea-triangle.webp' alt='Placeholder image' width='500' height='281' />
            </div>
            <p>The One Funnel Away Challenge is NOT just some “course” that you’ll never use…</p>
            <p>It combines the right marketing <strong><span className='text-blue'>KNOWLEDGE…</span></strong></p>
            <p>With the SHOVE you need to <strong><span className='text-blue'>EXECUTE</span></strong> your funnel…</p>
            <p>And a “no-excuses” <strong><span className='text-blue'>ACCOUNTABILITY</span></strong> team of coaches who are caring and supportive, while making sure that you get your tasks done…</p>
            <p>That’s the biggest challenge in getting your first (or next) funnel started…</p>
            <p>It’s almost NEVER a lack of knowledge that’s the problem...</p>
            <p className='accent-header'>It’s A Lack Of EXECUTION…</p>
            <p>(or, not executing the right way).</p>
          </div>
        </div>

        <img src="images/product-sample.webp" alt="Placeholder image" idth='500' height='281' />
        <br /><br />
        <CtaButton />
        <p>As you can probably see, <strong>getting access to the 'One Funnel Away' challenge</strong> is like having me, and my entire OFA Expert Consulting Team as your own personal funnel coaches!</p>
        <p>The only difference is that you couldn't buy a 1 hour consulting call with me for $100.</p>
        <p>In fact, right now the CHEAPEST you can hire me to "pick my brain" is $100,000 for a day.</p>
        <p>So, to get 30 days with all of us, for just $100 is crazy!</p>
        <p>Yet <strong><u>you get everything we talked about above for FREE when you join the 'One Funnel Away'</u></strong> challenge today!</p>
        <p>So, are you excited yet!?! <strong>If so, then NOW is the time to take action!</strong></p>

      </div>
    </div>

    <div className="content-wrapper">
      <div className="inner-text">

        <div className="flex-parent">
          <div className="flex-sm">
            <Testimony name='Debby Donaldson' img='images/avatar.webp'>
              <p>I have a tremendous amount of experience in marketing, sales, and leadership. I devoured Russell's books as soon as they arrived.</p>
              <p>However, I knew I needed Help... I signed up for OFA and Having a Function funnel thanks to you and Russell... <span className='highlight'>It has made almost $1,000 in just a few days.</span></p>
              <p>Thank You So Much.</p>
            </Testimony>
          </div>
          <div className="flex-lg">
            <h2 className='accent-header size-md'>This Challenge Is NOT For Everyone!</h2>
            <p>If you want to watch every day of the challenge, and say <em>“Thanks, Russell! That was some great info!”</em></p>
            <p>...but never actually do anything with it, that’s entirely up to you.</p>
            <p>(But chances are, nothing will actually change in your business…If that’s what you want to do, <em>then this challenge is probably not for you).</em></p>
            <p>
              <strong><u>But…</u></strong>
              <br />
              If you are willing to roll up your sleeves and do just a little bit of work for 30 days…
            </p>
            <p>If you want to be trained daily by Russell Brunson, and have him <strong>PULL</strong> you in the right direction...</p>
            <p>If you need a good hard PUSH from a coach who will hold you accountable, and make sure that you get these tasks <em><u>DONE</u></em> (no excuses!)...</p>
            <p>Then we invite you to <strong><u>accept the ‘One Funnel Away’ Challenge</u></strong>, get your funnel built, and start creating <em><u>momentum</u></em> in your business!</p>
          </div>
        </div>

      </div>
    </div>

    <div className="content-wrapper">
      <div className="inner-content">
        <h2 className='accent-header size-lg'>So, What's The Catch...?</h2>

        <div className="flex-parent">
          <div className="flex-md">
            <p>We're doing this challenge, because we KNOW that when you have success selling your products through funnels, you're <u>more likely to continue to use ClickFunnels</u> to grow your company...</p>
            <p>That's it... <strong><u>that's our "evil" ulterior motive</u></strong> - for you to have success so you keep using our software that is giving you that success.</p>
          </div>
          <div className="flex-md">
            <Testimony name='David Fee' img='images/avatar.webp'>
              <p>Thanks for this - <span className='highlight'>Genius Training</span> today - Totally turned my head around with my product - And all the past products I sold could have killed it but that is the past</p>
            </Testimony>
          </div>
        </div>

        <p>Plus, we also pay our affiliates who refer people to this challenge $100 for anyone they signup. Chances are you found out about this page from one of those affiliates. <strong>So, we actually lose money for each person who joins the challenge.</strong></p>
        <p>And the few of you who signup without an affiliate telling you about this challenge, you probably found out about it because I paid for an ad on Facebook or Youtube to get you here.</p>
        <p>Either way, I REALLY make very little, and in most cases lose money for each person who joins this challenge.</p>
        <p><strong>So, why would I do this?</strong></p>
        <p>Because we have a philosophy here at ClickFunnels, that <strong><u>if we can't make you money, then we don't deserve any of yours</u></strong>.</p>
        <p>So our goal is to help you make money... then hopefully you'll chose to re-invest some of those profits back into the products and services that we sell.</p>
        <p>Does that sound more than fair? :)</p>

        <CtaButton />
        <br />
        <h2 className='accent-header size-lg'>Why Time Is Of The Essence...</h2>

        <div className="flex-parent">
          <div className="flex-sm">
            <Testimony name='David Fee' img='images/avatar.webp'>
              <p>Thanks for this - <span className='highlight'>Genius Training</span> today - Totally turned my head around with my product - And all the past products I sold could have killed it but that is the past</p>
            </Testimony>
            <Testimony name='Justin Humphries' img='images/avatar.webp'>
              <p><strong>The One Funnel Challenge has changed my life!</strong> I'm not even joking. Let me explain... For the last 10 years I have been trying to make this internet marketing thing work. I bought course after course,
              training after training... I've logged thousands of hours learning and doing. But nothing - and I mean NOTHING stuck. I couldn't ever get any traxction. <strong>When the 30 Days Summit and book came out I got so excited</strong>
              because I thought, <span className='highlight'>"if I can learn from 30 millionaires</span> <strong>what they knew... During the pre-launch I started to believe again.</strong> Not believe that it's possible (in general)
              but that I can actually do it. No, not that I can do it, but that I WILL do it! </p>
            </Testimony>
          </div>
          <div className="flex-lg">
            <p><strong>The next challenge is starting VERY SOON!</strong></p>
            <p>If this page is open, it means that the challenge is still open for registrations, but it will be closing down soon.</p>
            <p>And if you're wondering... well, can't I just take the challenge next time it opens up?</p>
            <p>Well, the answer is MAYBE...</p>
            <p><u>I'm not sure if or when the next challenge will be...</u></p>
            <p>But, more importantly, what about the people you could have served with your products or services that won't have a chance to hear about them, because you waited to launch your next funnel!</p>
            <p>There is an old Chinese proverb that says, <strong>"the best time to plant a tree was 20 years ago... but the 2nd best time, is NOW."</strong></p>
            <p><u>NOW is the best time for you to take the 'One Funnel Away' challenge.</u></p>
          </div>
        </div>
        <CtaButton />
        <br />
        <h2 className='accent-header size-lg'>Is There A Guarantee?</h2>
        
        <div className='flex-parent'>
          <div className="flex-lg">
            <p>Of course... :)</p>
            <p>I guarantee that if you participate in the challenge, show up to the daily live calls, implement what you learn, by the time the challenge is done, <strong>you will have a complete funnel and a solid understanding of the core fundamentals of direct response marketing and funnel building.</strong></p>
            <p>If for some reason you don't feel like that is true, then you can email our support team within 30 days and receive a <u>full refund of $100.</u></p>
            <p>Pretty simple. </p>
            <p><strong><u>But if you're like most people, this experience will change your business (and for some of you, it'll change your life!)</u></strong></p>
          </div>
          <div className="flex-sm">
            <Testimony name='David Fee' img='images/avatar.webp'>
              <p>Thanks for this - <span className='highlight'>Genius Training</span> today - Totally turned my head around with my product - And all the past products I sold could have killed it but that is the past</p>
            </Testimony>
            <Testimony name='Justin Humphries' img='images/avatar.webp'>
              <p><strong>The One Funnel Challenge has changed my life!</strong> I'm not even joking. Let me explain... For the last 10 years I have been trying to make this internet marketing thing work. I bought course after course,
              training after training... I've logged thousands of hours learning and doing. But nothing - and I mean NOTHING stuck. I couldn't ever get any traxction. <strong>When the 30 Days Summit and book came out I got so excited</strong>
              because I thought, <span className='highlight'>"if I can learn from 30 millionaires</span> <strong>what they knew... During the pre-launch I started to believe again.</strong> Not believe that it's possible (in general)
              but that I can actually do it. No, not that I can do it, but that I WILL do it! </p>
            </Testimony>
          </div>
        </div>
        <CtaButton />
        <br />
        
        <h2 className='accent-header size-lg'>Here's What To Do Next...</h2>
        <p>From here it's just finalizing the details. <strong>Click on the button below and create your account</strong>, then we can finally get started!</p>
        <p>Thanks for taking the time to read this letter and watching the video and I look forward to hearing your success story at the end of the challenge!</p>
        <p><strong>Russell Brunson</strong></p>
        <p><strong>P.S.</strong> In case you're one of those people (like me) who just skip to the end of the letter, here's the deal:</p>
        <p><strong><em>When you join the "One Funnel Away" challenge today (for just $100) I'm going to give you the 550 page '30 Days' digital ebook, the Challenge "One Pagers" (act as a day-by-day companion guide to the Challenge)...</em></strong></p>
        <p><strong><em>PLUS, you’ll get a full 30 day experience where you work with myself, and the OFA Consulting Team to get your first (or next) funnel launched!</em></strong></p>
        <p>Oh, and if for some crazy reason you don't love the challenge - <u>Email us and we'll refund your $100</u>.</p>
        <p>Sound fair? Then what are you waiting for!?! <strong>Join the "One Funnel Away" challenge today!</strong></p>

      </div>
    </div>
    
    <div className="content-wrapper">
      <div className="inner-content">
        
        <div className="accent-box box-blue">
          <div className="box-header">
            <span className='large-font'>Here’s A Recap Of</span>
            <span className='header'>EVERYTHING You'll Get <u>FREE</u></span>
            <span className='large-font'>When You Accept The ‘One Funnel Away’ Challenge Today!</span>
          </div>
          <TotalValue />
          <div className="box-footer">
            <span className='large-font'><strong>Join The ‘One Funnel Away’ Challenge Today!</strong></span>
            <span className='accent-header size-xl text-red'>For Only $100</span>
            <br />
          </div>
        </div>

      </div>
    </div>
  </>
  )
}
