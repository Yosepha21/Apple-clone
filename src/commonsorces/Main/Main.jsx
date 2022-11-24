import React from "react";
import watch from "../../project/logo/watch-series-7/promo_logo_watch_lte__emrof7zzkriq_medium.png";
import ipadair from "../../project/logo/ipadair/promo_logo_ipadair__frwnnsqveeye_medium.png";
import applefitnes from "../../project/logo/applfitnes/logo_promo_katy_perry__bb5nun6svbsi_medium.png";
import applcard from "../../project/logo/applcard/logo__dcojfwkzna2q_medium.png";
import tvplus from "../../project/logo/tv-plus/logo__dcojfwkzna2q_medium.png";
import Youtube1 from "../Youtube/Youtube1";
import Slider1 from "../Sliders/Slider1";
// import Slider from '../Slider/Slider';
function Main() {
  return (
    <div>
      <div className="container-fluid">
        <div className="unicef-logo-text d-md-flex">
          <div className="unicef-logo col-md-4 "></div>
          <div className="unicef-text col-md-8 text-md-left">
            <a href="#">
              Donate to support families affected by the war in Ukraine
            </a>
          </div>
        </div>

        <div className="container-fluid">
          <div className="main-section1">
            <div className="title-wrapper text-center">
              <h2 className="head-title">MacBook Air</h2>
              <h3 className="head-title-img"></h3>
              <p className="avail-text">Available next month</p>
              <div className="links-learn-more">
                <ul className="list-inline links">
                  <li className="list-inline-item pr-2">
                    <a href="##">Learn more</a>
                  </li>
                  <li className="list-inline-item pl-2">
                    <a href="##">View pricing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="macBook-pro-13 text-center pt-5 col-12">
          <h1 className="font-weight-bolder  ">MacBook pro 13"</h1>
          <img
            src="./logo/macbook pro/logo_hero_mbp13__gdqp6kikbxe2_medium.png"
            alt=""
          />
          <p>Available starting 6.24</p>
          <ul className="list-inline links">
            <li className="list-inline-item pr-2">
              <a href="#">learn more</a>
            </li>
            <li className="list-inline-item pl-2">
              <a href="#">Order now</a>
            </li>
          </ul>
        </div>

        <div className="iphone-13  pt-4 text-center col-12 mb-2">
          <h1>iPhone 13</h1>
          <p>Your new superpower</p>
          <ul className="list-inline pr-2 links">
            <li className="list-inline-item ">
              <a href="#">learn more</a>
            </li>
            <li className="list-inline-item pl-2">
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>

        <div className="row my-2">
          <div className="iPhone-13-pro col-xs-12  col-md mr-md-2 text-center pt-4 mb-2">
            <h1>iPhone 13 Pro</h1>
            <p>Oh. So.Pro</p>
            <ul className="list-inline links">
              <li className="list-inline-item pr-2">
                <a href="#">learn more</a>
              </li>
              <li className="list-inline-item pl-2">
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
          <div className="watch col-md ml-md-2 text-center pt-4 mb-2 mb-2 ">
            <div>
              <img src={watch} alt="apple-tv-logo" />
            </div>
            <p>It's our largest display yet.</p>
            <ul className="list-inline links">
              <li className="list-inline-item pr-2">
                <a href="#">learn more</a>
              </li>
              <li className="list-inline-item pl-2">
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row my-2">
          <div className="ipadair col-xs-12 col-md mr-md-2 text-center pt-4 mb-2">
            <img src={ipadair} alt="ipad air" />
            <p>Light.Bright.full of might.</p>
            <ul className="list-inline links">
              <li className="list-inline-item pr-2">
                <a href="#">learn more</a>
              </li>
              <li className="list-inline-item pl-2">
                <a href="#">buy</a>
              </li>
            </ul>
          </div>
          <div className="appleFitness col-xs-12 col-md ml-md-2 text-center pt-4 pb-5 mackbook-pro mb-2">
            <img src={applefitnes} alt="" />
            <p>
              New Artist Spotlight workouts <br />
              with music by Katy perry.
            </p>
            <ul className="list-inline links">
              <li className="list-inline-item pr-2">
                <a href="">See what's new</a>
              </li>
              <li className="list-inline-item pl-2">
                <a href="">
                  Try it free <span>1</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row my-2">
          <div className="Card  col-md mr-md-2 text-center pt-4 mb-2 ">
            <img src={applcard} alt="" />
            <p className="pt-2">
              Get up to 30% Daily cash back <br />
              with every purchase.
            </p>
            <ul className="list-inline links">
              <li className="list-inline-item pr-2">
                <a href="">learn more</a>
              </li>
              <li className="list-inline-item pl-2">
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
          <div className="tv-section  col-md ml-md-2  text-center pt-4 mb-2">
            <div className="Tv-logosiz">
              <img src={tvplus} alt="" />
            </div>

            <ul className="links">
              <a href="#">Stream now</a>
            </ul>
          </div>
        </div>
      </div>
      <Slider1/>
      <div>
        <Youtube1 />
        </div>
      
    </div>
  );
}
export default Main;
