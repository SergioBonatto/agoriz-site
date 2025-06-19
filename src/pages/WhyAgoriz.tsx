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
              The world has changed — but payments haven’t.
            </p>
            <p>
              For decades, money has gone increasingly digital. Today, you can pay for almost anything with an app on your phone.
              But behind that sleek interface, the system remains the same: closed, controlled by banks, subject to governments and middlemen.
            </p>
            <p>
              Every payment flows through layers of intermediaries — each taking a cut, each setting the rules, and sometimes deciding whether or not you can even get paid.
              That’s a problem. And it’s getting worse.
            </p>
            <p>In recent years, we’ve seen:</p>
            <ul>
              <li>Accounts frozen for political reasons</li>
              <li>Transfers blocked without explanation</li>
              <li>Rising fees</li>
              <li>Financial censorship</li>
              <li>Inflation eroding the value of money</li>
            </ul>
            <p>
              That’s why Bitcoin was created: a digital form of money — peer to peer, free from control, immune to censorship.
              But Bitcoin solves money.
              It didn’t yet solve payments.
              How do businesses and creators actually use this new money in everyday life?
            </p>
            <p>
              That’s why we built Agoriz.
            </p>
          </div>
        </section>

        <section className="why-content">
          <div className="why-content__container">
            <h2>What is Agoriz?</h2>
            <p>
              Agoriz is the infrastructure that turns the promise of crypto into real-world tools for businesses and creators.
            </p>
            <p>Instead of relying on banks or traditional processors, you can:</p>
            <ul>
              <li>Accept crypto payments directly to your wallet — no intermediaries</li>
              <li>Automate payment contracts</li>
              <li>Run marketplaces and subscription platforms</li>
              <li>Manage royalties and revenue splits — all in code, no permissions needed</li>
              <li>Eliminate fees, delays, and red tape</li>
            </ul>
            <p>
              No banks. No custody. No censorship.
            </p>

            <h2>Why does this matter — and why now?</h2>
            <p>
              Trust in old systems is fading fast.
              High inflation, transfer limits, frozen accounts — these are no longer rare.
            </p>
            <p>
              You work, you build, you create — yet you still rely on institutions just to access what’s already yours.
              That’s no longer acceptable.
            </p>
            <p>
              The new internet of money already exists.
              It’s open. It’s global. It knows no borders.
            </p>
            <p>
              But businesses need a simple, safe way to use it.
              That’s where we come in.
            </p>

            <h2>What does this change for you?</h2>
            <p>
              If you run a business, an online store, a service, or a creative project, with Agoriz you can:
            </p>
            <ul>
              <li>Accept payments globally, 24/7</li>
              <li>Get paid without needing a bank</li>
              <li>Ensure your income can’t be frozen or censored</li>
              <li>Automate your revenue flows</li>
              <li>Tap into the new digital economy — where you control your own money</li>
            </ul>
            <p>
              And you don’t need to be a blockchain expert — the tools are ready, the tech is simple.
            </p>

            <h2>At the end of the day, it’s simple:</h2>
            <p>Your money should be yours.</p>
            <p>Your payments should reach you.</p>
            <p>Your business should run without needing anyone’s permission.</p>
            <p>
              If Bitcoin solved the problem of money, Agoriz solves the problem of payments, contracts, and the infrastructure driving this new economy.
            </p>

            <p className="why-cta">
              The new internet of money has no middlemen.
              With Agoriz, neither does your business.
              Start today.
            </p>
          </div>
        </section>
      </main>
    </ThemeProvider>
  )
}

export default WhyAgoriz
