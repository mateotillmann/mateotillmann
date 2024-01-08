import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Schneider - Jobbagyféltekés Oktatás</title>
        <meta
          property="og:title"
          content="Schneider - Jobbagyféltekés Oktatás"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <Link to="/" className="home-navlink">
          <svg viewBox="0 0 1022.8297142857142 1024" className="home-icon">
            <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
          </svg>
        </Link>
        <Link to="/" className="home-navlink1">
          Jobbagyféltekés tanfolyamok
        </Link>
        <div className="home-container01">
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <div>
                <div className="home-container03">
                  <Script
                    html={`<script>
  (function (w, d, s, o, f, js, fjs) {
    w["botsonic_widget"] = o;
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");
  Botsonic("init", {
    serviceBaseUrl: "https://api.botsonic.ai",
    token: "343a60ba-9613-45a9-848f-4b1095456afb",
  });
</script>`}
                  ></Script>
                </div>
              </div>
              <span>Rólam</span>
              <Link to="/oktatsaink" className="home-navlink2">
                Tanfolyamok
              </Link>
              <span className="home-text01">Pricing</span>
              <span className="home-text02">Team</span>
              <span className="home-text03">Blog</span>
            </nav>
          </div>
        </div>
        <Link to="/jelentkezs" className="home-navlink3 button">
          Jelentkezem
        </Link>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <svg
                viewBox="0 0 1022.8297142857142 1024"
                className="home-icon04"
              >
                <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
              </svg>
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <Link to="/oktatsaink" className="home-navlink4">
                Oktatásaink
              </Link>
              <span className="home-text04">Features</span>
              <span className="home-text05">Pricing</span>
              <span className="home-text06">Team</span>
              <span className="home-text07">Blog</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon08">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon12">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <div>
          <div className="home-container05">
            <Script
              html={`<script>
  (function (w, d, s, o, f, js, fjs) {
    w["botsonic_widget"] = o;
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");
  Botsonic("init", {
    serviceBaseUrl: "https://api.botsonic.ai",
    token: "343a60ba-9613-45a9-848f-4b1095456afb",
  });
</script>`}
            ></Script>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container06">
          <h1 className="home-text08">
            A Tehetség: Egy nem adott, tanulandó kincs mindenki számára
          </h1>
          <span className="home-text09">
            <span>
              Ne hagyd, hogy a képességeid határt szabjanak! Csatlakozz
              képzéseink valamelyikéhez, és tanuld meg hogy a tehetség nem
              születik, hanem építkezik.
            </span>
            <br></br>
            <span>
              Fedezd fel a benned rejlő potenciált, és lépj túl hatáaidon
              tanfolyamunk segítségével!
            </span>
            <br></br>
            <span> Indítsd el utad a siker felé még ma!</span>
            <br></br>
          </span>
          <div className="home-btn-group">
            <Link to="/jelentkezs" className="home-navlink5 button">
              Jelentkezés!
            </Link>
            <Link to="/oktatsaink" className="home-navlink6 button">
              Tudj meg többet!
            </Link>
          </div>
        </div>
        <img
          alt="image"
          src="/telihold-hiddal-q1rvyg9su9bnyl4yg9480qgzjbwj4ije86w20ev5z4-1200w.jpg"
          loading="lazy"
          className="home-image"
        />
      </div>
      <div className="home-testimonial">
        <div className="home-testimonial1">
          <div className="home-container07">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="home-text16">
            <span>
              A kreatívabb és müvészi irányzatú emberek általában nagyobb
              részben használják a jobb agyféltekéjüket.
            </span>
            <br></br>
          </span>
          <div className="home-container08">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon16">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="home-text19">Times Magazin 2023.</span>
      </div>
      <div className="home-steps">
        <h1 className="home-text20">
          Hogyan is fogsz a semmiből szemet kápráztató műveket készíteni?
        </h1>
        <span className="home-text21">
          <span>
            Oktatónk minden lépésedben segíteni fog mindaddig amig már saját
            magad fogsz alkotni!
          </span>
          <br></br>
        </span>
        <div className="home-container09">
          <div className="home-step">
            <div className="home-container10">
              <div className="home-line"></div>
              <div className="home-container11">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M725.333 810.667h-469.333c-94.123 0-170.667-76.544-170.667-170.667 0-79.403 54.485-146.304 128.043-165.291-0.043-1.792-0.043-3.584-0.043-5.376 0-141.184 114.816-256 256-256 110.379 0 205.824 69.888 241.067 171.307 125.525-10.496 228.267 90.155 228.267 212.693 0 117.632-95.701 213.333-213.333 213.333zM251.947 554.411c-43.008 0.256-81.28 38.528-81.28 85.589s38.272 85.333 85.333 85.333h469.333c70.571 0 128-57.429 128-128s-57.429-128-128-128c-10.368 0-21.333 1.749-34.56 5.547l-45.867 13.099-7.936-47.061c-13.867-82.432-84.352-142.251-167.637-142.251-94.123 0-170.667 76.544-170.667 170.667 0 11.605 1.152 23.253 3.499 34.603l10.411 51.157-60.629-0.683z"></path>
                </svg>
              </div>
              <div className="home-line1"></div>
            </div>
            <div className="home-container12">
              <h1 className="home-text24">Megálmodod</h1>
              <span className="home-text25">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="home-step1">
            <div className="home-container13">
              <div className="home-line2"></div>
              <div className="home-container14">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M554 554q80 0 168 35t88 93v86h-512v-86q0-58 88-93t168-35zM838 562q74 12 130 43t56 77v86h-128v-86q0-68-58-120zM554 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38zM768 470q-20 0-38-6 38-54 38-122t-38-122q18-6 38-6 52 0 90 38t38 90-38 90-90 38zM342 426v86h-128v128h-86v-128h-128v-86h128v-128h86v128h128z"></path>
                </svg>
              </div>
              <div className="home-line3"></div>
            </div>
            <div className="home-container15">
              <h1 className="home-text28">Jelentkezel</h1>
              <span className="home-text29">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-step2">
            <div className="home-container16">
              <div className="home-line4"></div>
              <div className="home-container17">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M422 826l-298-58 16-86 210 42 68-346-78 30v146h-84v-200l222-94q6 0 17-2t17-2q42 0 72 42l42 68q58 102 184 102v86q-142 0-234-106l-26 128 90 84v320h-86v-256l-90-84zM576 234q-34 0-60-26t-26-60 26-59 60-25 59 25 25 59-25 60-59 26z"></path>
                </svg>
              </div>
              <div className="home-line5"></div>
            </div>
            <div className="home-container18">
              <h1 className="home-text32">Oktatásokon veszel részt</h1>
              <span className="home-text33">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-step3">
            <div className="home-container19">
              <div className="home-line6"></div>
              <div className="home-container20">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M384 640l128-64 448-448-64-64-448 448-64 128zM289.3 867.098c-31.632-66.728-65.666-100.762-132.396-132.394l99.096-272.792 128-77.912 384-384h-192l-384 384-192 640 640-192 384-384v-192l-384 384-77.912 128z"></path>
                </svg>
              </div>
              <div className="home-line7"></div>
            </div>
            <div className="home-container21">
              <h1 className="home-text36">Lerajzolod amit megálmodtál!</h1>
              <span className="home-text37">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container22">
        <div className="home-testimonial-card">
          <div className="home-testimonial2">
            <span className="home-text40">Oktatónk bemutatkozása</span>
            <span className="home-text41">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
              lorem, malesuada in metus vitae, scelerisque accumsan ipsum.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem,
              malesuada in metus vitae, scelerisque accumsan ipsum.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. In lorem lorem,
              malesuada in metus vitae, scelerisque accumsan ipsum.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. In lorem lorem,
              malesuada in metus vitae, scelerisque accumsan ipsum.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. In lorem lorem,
              malesuada in metus vitae, scelerisque accumsan ipsum.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. In lorem lorem,
              malesuada in metus vitae, scelerisque accumsan ipsum.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. In lorem lorem,
              malesuada in metus vitae, scelerisque accumsan ipsum.
            </span>
            <span className="home-text42">
              <span>Schneider Erika</span>
              <br></br>
              <span className="home-text45">Jobbagyféltekés oktató</span>
              <br></br>
            </span>
          </div>
          <img
            alt="profile"
            src="/screenshot_20230913_203730_faceapp%5B381%5D-400w.jpg"
            className="home-image1"
          />
        </div>
      </div>
      <img
        alt="image"
        src="/neutral%20modern%20before%20and%20after%20progress%20instagram%20post-1500w.png"
        className="home-image2"
      />
      <footer className="home-footer">
        <svg viewBox="0 0 1022.8297142857142 1024" className="home-icon26">
          <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
        </svg>
        <span className="home-text47">
          © 2024 Schneider Erika, Minden jog fenntartva.
        </span>
        <div className="home-icon-group1">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon28">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon30">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon32">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
    </div>
  )
}

export default Home
