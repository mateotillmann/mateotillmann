import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './oktatsaink.css'

const Oktatsaink = (props) => {
  return (
    <div className="oktatsaink-container">
      <Helmet>
        <title>Oktatsaink - Schneider - Jobbagyféltekés Oktatás</title>
        <meta
          property="og:title"
          content="Oktatsaink - Schneider - Jobbagyféltekés Oktatás"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="oktatsaink-navbar-interactive">
        <Link to="/" className="oktatsaink-navlink">
          <svg
            viewBox="0 0 1022.8297142857142 1024"
            className="oktatsaink-icon"
          >
            <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
          </svg>
        </Link>
        <Link to="/" className="oktatsaink-navlink1">
          Jobbagyféltekés tanfolyamok
        </Link>
        <div className="oktatsaink-container01">
          <div data-thq="thq-navbar-nav" className="oktatsaink-desktop-menu">
            <nav className="oktatsaink-links">
              <div>
                <div className="oktatsaink-container03">
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
              <Link to="/oktatsaink" className="oktatsaink-navlink2">
                Tanfolyamok
              </Link>
              <span className="oktatsaink-text01">Pricing</span>
              <span className="oktatsaink-text02">Team</span>
              <span className="oktatsaink-text03">Blog</span>
            </nav>
          </div>
        </div>
        <Link to="/jelentkezs" className="oktatsaink-navlink3 button">
          Jelentkezem
        </Link>
        <div data-thq="thq-burger-menu" className="oktatsaink-burger-menu">
          <svg viewBox="0 0 1024 1024" className="oktatsaink-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="oktatsaink-mobile-menu">
          <div className="oktatsaink-nav">
            <div className="oktatsaink-top">
              <svg
                viewBox="0 0 1022.8297142857142 1024"
                className="oktatsaink-icon04"
              >
                <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
              </svg>
              <div data-thq="thq-close-menu" className="oktatsaink-close-menu">
                <svg viewBox="0 0 1024 1024" className="oktatsaink-icon06">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="oktatsaink-links1">
              <Link to="/oktatsaink" className="oktatsaink-navlink4">
                Oktatásaink
              </Link>
              <span className="oktatsaink-text04">Features</span>
              <span className="oktatsaink-text05">Pricing</span>
              <span className="oktatsaink-text06">Team</span>
              <span className="oktatsaink-text07">Blog</span>
            </nav>
            <div className="oktatsaink-buttons">
              <button className="oktatsaink-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="oktatsaink-icon08"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="oktatsaink-icon10"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="oktatsaink-icon12"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <div>
          <div className="oktatsaink-container05">
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
      <div className="oktatsaink-features">
        <h1 className="oktatsaink-text08">Tanfolyamunk segítségével:</h1>
        <div className="oktatsaink-container06">
          <FeatureCard2
            title="Büszkén mutogathatod rajzaid"
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="Te sem fogsz hinni a szemednek"
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
          <FeatureCard2
            title="Segítségemmel a saját tempódban haladhatsz"
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <div className="oktatsaink-pricing">
        <div className="oktatsaink-container07">
          <div className="oktatsaink-pricing-card">
            <span className="oktatsaink-text09">
              <span className="oktatsaink-text10">2023.05.02</span>
              <br className="oktatsaink-text11"></br>
              <span className="oktatsaink-text12">Hétfő</span>
              <br></br>
            </span>
            <div className="oktatsaink-container08">
              <span className="oktatsaink-text14">Ft</span>
              <span className="oktatsaink-text15">50,000</span>
            </div>
            <div className="oktatsaink-container09">
              <span className="oktatsaink-text16">
                ✔ Teljes hozzáférés oktatóanyagainkhoz
              </span>
              <span className="oktatsaink-text17">
                ✔ Minden eszköz az induáshoz
              </span>
              <span className="oktatsaink-text18">
                ✔ Oktatónk bármikor szivessen válaszol ha kérdésed támad
              </span>
              <span className="oktatsaink-text19">
                ✔ A kezdettől a profizmusig fogjuk a kezed
              </span>
            </div>
            <button className="oktatsaink-button button">Tovább</button>
          </div>
          <div className="oktatsaink-pricing-card1">
            <span className="oktatsaink-text20">
              <span className="oktatsaink-text21">2023.05.02</span>
              <br className="oktatsaink-text22"></br>
              <span className="oktatsaink-text23">Hétfő</span>
            </span>
            <div className="oktatsaink-container10">
              <span className="oktatsaink-text24">Ft</span>
              <span className="oktatsaink-text25">55,000</span>
            </div>
            <span className="oktatsaink-text26">Lorem ipsum dolor</span>
            <div className="oktatsaink-container11">
              <span className="oktatsaink-text27">
                ✔ Teljes hozzáférés oktatóanyagainkhoz
              </span>
              <span className="oktatsaink-text28">
                ✔ Minden eszköz az induáshoz
              </span>
              <span className="oktatsaink-text29">
                ✔ Oktatónk bármikor szivessen válaszol ha kérdésed támad
              </span>
              <span className="oktatsaink-text30">
                ✔ A kezdettől a profizmusig fogjuk a kezed
              </span>
            </div>
            <button className="oktatsaink-button1 button">Tovább</button>
          </div>
          <div className="oktatsaink-pricing-card2">
            <span className="oktatsaink-text31">
              <span className="oktatsaink-text32">2023.05.02</span>
              <br className="oktatsaink-text33"></br>
              <span className="oktatsaink-text34">Hétfő</span>
            </span>
            <div className="oktatsaink-container12">
              <span className="oktatsaink-text35">Ft</span>
              <span className="oktatsaink-text36">60,000</span>
            </div>
            <div className="oktatsaink-container13">
              <span className="oktatsaink-text37">
                ✔ Teljes hozzáférés oktatóanyagainkhoz
              </span>
              <span className="oktatsaink-text38">
                ✔ Minden eszköz az induáshoz
              </span>
              <span className="oktatsaink-text39">
                ✔ Oktatónk bármikor szivessen válaszol ha kérdésed támad
              </span>
              <span className="oktatsaink-text40">
                ✔ A kezdettől a profizmusig fogjuk a kezed
              </span>
            </div>
            <button className="oktatsaink-button2 button">Tovább</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Oktatsaink
