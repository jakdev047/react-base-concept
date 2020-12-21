import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';

import $ from "jquery";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// images
import triangleImg from "../assets/images/triangle.png";
import mackbookImg from "../assets/images/macbook.png";


class Home extends Component {
    onScrollFunc = () => {
        // Detect request animation frame
        var scroll = window.requestAnimationFrame ||
            // IE Fallback
            function (callback) { window.setTimeout(callback, 1000 / 60) };
        var elementsToShow = document.querySelectorAll('.show-on-scroll');

        function loop() {

            elementsToShow.forEach(function (element) {
                if (isElementInViewport(element)) {
                    element.classList.add('is-visible');
                } else {
                    element.classList.remove('is-visible');
                }
            });

            scroll(loop);
        }

        // Call the loop for the first time
        loop();

        function isElementInViewport(el) {
            // special bonus for those using jQuery
            if (typeof $ === "function" && el instanceof $) {
                el = el[0];
            }
            var rect = el.getBoundingClientRect();
            return (
                (rect.top <= 0
                    && rect.bottom >= 0)
                ||
                (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight))
                ||
                (rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            );
        }
    }

    // real-time event
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollFunc);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home" />
                <div className="home-section">
                    <h2>React Base Foundation</h2>
                    <ul className="menu">
                        <li><Link to="/transion-effect">Transtion Effect</Link></li>
                        <li><Link to="/registration">Registration</Link></li>
                    </ul>
                    <div className="rotate-animation">
                        <img src={triangleImg} alt="effects" />
                    </div>
                </div>
                <div style={{ background: "#ddd", height: "100vh" }}></div>
                <div className="mackbook-section text-center show-on-scroll">
                    <img src={mackbookImg} alt="mackbook" />
                </div>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                    <div style={{ background: "#ddd", height: "100vh" }}></div>
                </ScrollAnimation>

                <ScrollAnimation delay={4000}
                    animateIn='tada'
                    initiallyVisible={true}>
                    <div style={{ background: "#eb1", height: "100vh" }}></div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                    <div style={{ background: "#eb1b33", height: "100vh" }}></div>
                </ScrollAnimation>

            </Fragment>
        )
    }
}

export default withRouter(Home);
