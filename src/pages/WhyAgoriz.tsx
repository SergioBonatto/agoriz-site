import { type FC } from 'react'
import { ThemeProvider } from '../contexts/theme/ThemeContext'
import Navbar from '../components/layout/Navbar'
import { SEO } from '../utils/SEO'
import '../styles/pages/WhyAgoriz.css'
import { ScrollToTop } from '../utils/ScrollToTop'

export const WhyAgoriz: FC = () => {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <SEO
        title="Why Agoriz? | The New Internet of Money"
        description="Understand why Agoriz is the infrastructure powering the new economy: open, global, permissionless payments — with no middlemen."
      />
      <Navbar />
      <main className="why-page">
        <section className="why-hero">
          <div className="why-hero__container">
            <h1>Why Agoriz?</h1>
            <p className="why-hero__intro">
              The crypto payment revolution is here. But most solutions force you to choose: either trust someone else with your money, or build complex systems yourself.
            </p>
            <p>
                  <b className='why-note why-note--black'>
                    Agoriz changes the game
                  </b>
            </p>
          </div>
        </section>

        <section className="why-content">
          <div className="why-content__container">
            <h2>Own Your Money, Control Your Destiny</h2>
            <p>
              <b className="why-note">True zero-custody. </b> Your funds never leave your wallet until the moment you decide to send them. No frozen accounts, no "maintenance windows," no "sorry, we got hacked." Just pure, unstoppable financial sovereignty.
            </p>
            <p>
              Most "non-custodial" solutions still hold your money during processing. We don't. Ever.
            </p>

            <h2>Built to Beat the Bots</h2>
            <p>
              While others talk about security, we engineered it:
            </p>
            <ul>
              <li><b className='why-note'>Dynamic MEV protection</b> that adapts to stop front-running attacks </li>
              <li><b className='why-note'>Circuit breaker</b>  that pause suspicious activity in real-time</li>
              <li><b className='why-note'>Smart rate limiting</b> that learns your patterns and blocks abuse</li>
              <li><b className='why-note'>Commit-reveal schemes</b> for high-value transactions</li>
            </ul>
            <p>
              Your payments are protected by the same tech that secures DeFi protocols handling billions.
            </p>

            <h2>Fees That Make Sense</h2>
            <p>
              Our algorithm watches how you use the system. Regular merchants doing honest business? You pay less. Heavy users pushing the network to its limits? They cover the cost of keeping everyone secure.
            </p>
            <p>
              Fair pricing isn't just good business — it's how we keep Agoriz sustainable and attack-resistant.
            </p>

            <h2>Ready for Real Business</h2>
            <p>
              <b className='why-note'>ETH and USDT support.</b> Multi-chain deployment. EIP-712 signatures for gasless operations. Emergency functions protected by timelock. Events that integrate seamlessly with any monitoring system.
            </p>
            <p>
              This isn't a weekend project — it's enterprise-grade infrastructure that happens to be radically simple to use.
            </p>

            <h2>From Marketplace to Multi-Chain</h2>
            <p>
              Started for P2P marketplaces, but built for everything:
            </p>
            <ul>
              <li><b className='why-note'>Service platforms</b> that need escrow without custody risk</li>
              <li><b className='why-note'>DeFi protocols</b> requiring payment rails that won't break</li>
              <li><b className='why-note'>Traditional businesses</b>  ready to accept crypto the right way</li>
              <li><b className='why-note'>Developers</b> who want payment infrastructure that just works</li>
            </ul>

            <h2>The Future Is Modular</h2>
            <p>
              Our core never changes — it's lean, auditable, and battle-tested. But extensions let us adapt to any token, any chain, any regulatory requirement.
            </p>

            <p>
              <b className='why-note'>Built once. Deployed everywhere.</b>
            </p>

            <h2> Ready to Build the Future? </h2>
            <p>
              Crypto payments shouldn't be scary, expensive, or risky. They should be inevitable. Agoriz makes the inevitable simple.
            </p>

            <p>
              <b className='why-note'>Born in the spirit of ancient agoras — where anyone could trade freely — Agoriz brings that openness to digital payments. No gatekeepers. No compromises. Just the future of money, available today</b>
            </p>

            <h2>Start Building</h2>
            <p>
              <ul>
                <li> <b className='why-note'>For Developers</b>  Integrate with our smart contracts today. APIs and SDKs coming soon.</li>
                <li> <b className='why-note'>For Merchants:</b> Accept USDT and ETH payments without changing how you work.</li>
                <li> <b className='why-note'>For Everyone</b>Experience crypto payments the way they should be — secure, fair, and yours.</li>
              </ul>
            </p>
            <p className="why-cta">
              Ready to get started? The protocol is live and waiting for you.
            </p>
          </div>
        </section>
      </main>
    </ThemeProvider>
  )
}

export default WhyAgoriz
