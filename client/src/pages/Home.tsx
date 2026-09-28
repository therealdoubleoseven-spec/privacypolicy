import { ArrowDownRight, ArrowUpRight, Camera, Check, ShieldCheck } from "lucide-react";

const sections = [
  { id: "information", number: "01", title: "Information we collect" },
  { id: "third-parties", number: "02", title: "Third-party services" },
  { id: "retention", number: "03", title: "Retention & deletion" },
  { id: "permissions", number: "04", title: "Permissions & control" },
  { id: "children", number: "05", title: "Children’s privacy" },
  { id: "changes", number: "06", title: "Policy changes" },
  { id: "contact", number: "07", title: "Contact us" },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <ShieldCheck size={19} strokeWidth={1.65} />
    </span>
  );
}

function HeroSeal() {
  return (
    <div className="hero-art" aria-hidden="true">
      <span className="hero-orbit hero-orbit-one" />
      <span className="hero-orbit hero-orbit-two" />
      <span className="hero-spark hero-spark-one">✳</span>
      <span className="hero-spark hero-spark-two">·</span>
      <div className="hero-seal">
        <div className="seal-inner">
          <ShieldCheck size={58} strokeWidth={1.15} />
          <span className="seal-check"><Check size={16} strokeWidth={2} /></span>
        </div>
      </div>
      <span className="seal-caption">PRIVATE BY DESIGN</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Privacy policy, back to top">
          <BrandMark />
          <span className="brand-copy">
            <span className="brand-name">Gamedayy APPs</span>
            <span className="brand-subtitle">PRIVACY CENTER</span>
          </span>
        </a>
        <div className="header-note"><span className="status-dot" /> A straightforward guide to your data</div>
        <a className="header-date" href="#policy">
          <span>Effective September 27, 2026</span>
          <ArrowDownRight size={15} strokeWidth={1.7} />
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <div className="eyebrow"><span>PRIVACY POLICY</span><span className="eyebrow-rule" /><span>SEPTEMBER 27, 2026</span></div>
            <h1 id="page-title">Your life is personal.<br /><em>Your data should be, too.</em></h1>
            <p className="hero-description">A clear, plain-language look at what happens to information when you use our app—and what stays in your hands.</p>
            <a className="hero-link" href="#policy">Read the policy <ArrowDownRight size={16} strokeWidth={1.8} /></a>
          </div>
          <HeroSeal />
          <span className="hero-index" aria-hidden="true">01 — 07</span>
        </section>

        <section className="privacy-summary" aria-label="Privacy at a glance">
          <div className="summary-icon"><ShieldCheck size={22} strokeWidth={1.65} /></div>
          <div className="summary-copy">
            <p className="summary-title">Your personal logs stay on your device.</p>
            <p>We don’t send your logs or photos to external servers. Google AdMob may collect limited device and advertising information to serve and measure ads.</p>
          </div>
          <div className="summary-tag"><span /> ON-DEVICE BY DESIGN</div>
        </section>

        <div className="policy-layout" id="policy">
          <aside className="contents-panel" aria-label="Policy contents">
            <p className="contents-label">IN THIS POLICY</p>
            <nav className="contents-nav">
              {sections.map((section) => (
                <a className="contents-link" href={`#${section.id}`} key={section.id}>
                  <span className="contents-number">{section.number}</span>
                  <span>{section.title}</span>
                  <ArrowUpRight className="contents-arrow" size={14} strokeWidth={1.7} />
                </a>
              ))}
            </nav>
            <div className="contents-card">
              <div className="contents-card-icon"><Camera size={16} strokeWidth={1.7} /></div>
              <p className="contents-card-title">Made to stay yours.</p>
              <p>Your entries and photos are stored on your device, where you stay in control.</p>
            </div>
          </aside>

          <article className="policy-document" aria-label="Privacy policy details">
            <div className="document-heading">
              <span className="document-kicker"><span className="document-dot" /> THE DETAILS</span>
              <span className="document-count">7 sections <span>·</span> 4 min read</span>
            </div>

            <section className="policy-section" id="information">
              <div className="section-index">01</div>
              <div className="section-body">
                <h2>Information we collect <span>&amp; local storage</span></h2>
                <p>We believe in data minimization. Your core personal data and app content are stored locally on your device and are never transmitted to or stored on external servers or cloud databases.</p>
                <ul className="detail-list">
                  <li><span className="list-mark" /><div><strong>Calorie and event logs</strong><p>Any text, numbers, dates, or meal descriptions you manually enter are saved strictly on your device’s internal storage.</p></div></li>
                  <li><span className="list-mark" /><div><strong>Camera and photo library data</strong><p>With your permission, the app uses your camera to capture food or event photos, or accesses your gallery so you can select images for your logs. These photos remain on your device and are not uploaded to an external server.</p></div></li>
                  <li><span className="list-mark" /><div><strong>Image metadata</strong><p>Any location or time metadata attached to your photos is processed entirely on-device to help organize your logs.</p></div></li>
                </ul>
              </div>
            </section>

            <section className="policy-section" id="third-parties">
              <div className="section-index">02</div>
              <div className="section-body">
                <h2>Third-party services <span>&amp; advertising</span></h2>
                <p>While your personal logs remain private on your device, the app integrates third-party software development kits (SDKs) to serve advertisements.</p>
                <p>Specifically, we use Google AdMob to display ads. Google AdMob may automatically collect and use certain non-personal data from your device to serve relevant ads, limit how many times you see an ad, and track ad performance. This data may include:</p>
                <ul className="simple-list">
                  <li>Your device’s Advertising ID (AAID).</li>
                  <li>IP address and general location (country/city level).</li>
                  <li>Device manufacturer, model, and operating system version (Android).</li>
                </ul>
                <p>Google’s use of this data is governed by the <a className="inline-link" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy &amp; Terms <ArrowUpRight size={13} /></a>.</p>
              </div>
            </section>

            <section className="policy-section" id="retention">
              <div className="section-index">03</div>
              <div className="section-body">
                <h2>Data retention <span>&amp; deletion</span></h2>
                <p>Because your data is stored locally, we do not control or have access to your logs.</p>
                <ul className="simple-list">
                  <li>You can delete individual entries or photos at any time within the app.</li>
                  <li>Uninstalling the app from your device will permanently delete all of your calorie logs, tracked events, and app settings. We cannot recover this data for you.</li>
                </ul>
              </div>
            </section>

            <section className="policy-section" id="permissions">
              <div className="section-index">04</div>
              <div className="section-body">
                <h2>Permissions <span>&amp; control</span></h2>
                <p>You have full control over your device permissions and can change them at any time through your Android settings (Settings &gt; Apps &gt; [Insert App Name] &gt; Permissions):</p>
                <ul className="simple-list">
                  <li><strong>Camera &amp; storage:</strong> Revoking these permissions will prevent you from adding photo logs, but you will still be able to manually type in your text and calorie data.</li>
                  <li><strong>Personalized ads:</strong> You can opt out of personalized advertising by resetting or turning off your Advertising ID in your Android system settings (Settings &gt; Privacy &gt; Ads).</li>
                </ul>
              </div>
            </section>

            <section className="policy-section" id="children">
              <div className="section-index">05</div>
              <div className="section-body">
                <h2>Children’s privacy</h2>
                <p>Our app is not intended for use by children under the age of 13. Because we do not collect personal logs on external servers, we do not knowingly gather or store data from children. Ad networks utilized by the app are configured to comply with child safety laws (such as COPPA).</p>
              </div>
            </section>

            <section className="policy-section" id="changes">
              <div className="section-index">06</div>
              <div className="section-body">
                <h2>Changes to this policy</h2>
                <p>We may update our Privacy Policy from time to time to reflect changes in our practices or ad network requirements. We will notify you of any changes by updating the “Effective Date” at the top of this policy and making the text accessible within the app.</p>
              </div>
            </section>

            <section className="policy-section policy-section-last" id="contact">
              <div className="section-index">07</div>
              <div className="section-body">
                <h2>Contact us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <div className="contact-card"><span className="contact-label">EMAIL</span><span className="contact-value"><a href="mailto:the.real.double.o.seven@gmail.com">Send Email</a></span></div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top"><BrandMark /><span>Privacy, kept simple.</span></a>
        <span className="footer-note">Effective September 22, 2026 <span>·</span> <a href="#top">Back to top ↑</a></span>
      </footer>
    </div>
  );
}
