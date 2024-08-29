document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.createElement('header');
    headerContainer.className = 'main-header';
    headerContainer.innerHTML = `
        <nav class="main-menu">
            <div class="main-menu__wrapper">
                <div class="main-menu__wrapper-inner">
                    <div class="main-menu__logo">
                        <a href="index.html"><img src="assets/images/resources/logo-1.png" alt=""></a>
                    </div>
                    <div class="main-menu__wrapper-inner-content">
                        <div class="main-menu__top">
                            <div class="main-menu__top-inner">
                                <div class="main-menu__top-left">
                                    <ul class="list-unstyled main-menu__contact-list">
                                        <li>
                                            <div class="icon">
                                                <i class="fas fa-map-marker"></i>
                                            </div>
                                            <div class="text">
                                                <p><a href="https://maps.app.goo.gl/c8w3QJLR4ucRWnub7" target="_blank">SCF 24 1st Floor, Kabir Park Market Opp. G.N.D.U. Asr (143001)</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                            <div class="text">
                                                <p><a href="mailto:admissions.globalmovers@gmail.com">admissions.globalmovers@gmail.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fas fa-clock"></i>
                                            </div>
                                            <div class="text">
                                                <p>Mon - Sat 10.00 am - 6.00 pm</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="main-menu__bottom">
                            <div class="main-menu__bottom-inner">
                                <div class="main-menu__main-menu-box">
                                    <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                                    <ul class="main-menu__list">
                                        <li class="dropdown megamenu">
                                            <a href="../">Home </a>
                                        </li>
                                        <li>
                                            <a href="../about-us/">About Us</a>
                                        </li>
                                        <li class="dropdown">
                                            <a href="">Services</a>
                                            <ul class="sub-menu">
                                                <li><a href="../study-visa/">Study Visa</a></li>
                                                <li><a href="../visitor-visa/">Visitor Visa</a></li>
                                                <li><a href="../tourist-visa/">Tourist Visa</a></li>
                                                <li><a href="../immigration/">Immigration</a></li>
                                                <li><a href="../tour-packages/">Tour Packages</a></li>
                                                <li><a href="../career-counseling/">Career Counseling</a></li>
                                                <li><a href="../application-assistance/">Application Assistance</a></li>
                                                <li><a href="../post-study-support/">Post Study Support</a></li>
                                                <li><a href="../pre-departure-orientation/">Pre-Departure Orientation</a></li>
                                                <li><a href="../permanent-residency-consultation/">Permanent Residency Consultation</a></li>
                                                <li><a href="../visa-immigration-support/">Visa and Immigration Support</a></li>
                                                <li><a href="../university-selection-guidance/">University Selection Guidance</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="">Countries</a>
                                            <ul class="sub-menu">
                                                <li><a href="../australia/">Australia</a></li>
                                                <li><a href="../canada/">Canada</a></li>
                                                <li><a href="../usa/">USA</a></li>
                                                <li><a href="../germany/">Germany</a></li>
                                                <li><a href="../singapore/">Singapore</a></li>
                                                <li><a href="../ireland/">Ireland</a></li>
                                                <li><a href="../new-zealand/">New Zealand</a></li>
                                                <li><a href="../united-kingdom/">United Kingdom</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="../gallery/">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="../contact-us/">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="main-menu__right">
                                    <div class="main-menu__call">
                                        <div class="main-menu__call-icon">
                                            <img src="assets/images/icon/main-menu-comment-icon.png" alt="">
                                        </div>
                                        <div class="main-menu__call-content">
                                            <p class="main-menu__call-sub-title">Have Question?</p>
                                            <h5 class="main-menu__call-number"><a href="tel:9988788966"><span>Free</span> +91 &nbsp;99887-88966</a></h5>
                                        </div>
                                    </div>
                                    <div class="main-menu__btn-box">
                                        <a href="#contact-form" class="thm-btn contact-five__btn">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `;

    // Append header to the body or another container
    document.body.prepend(headerContainer);
});


document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.createElement('footer');
    footerContainer.className = 'site-footer';
    footerContainer.innerHTML = `
        <div class="container">
            <div class="site-footer__top">
                <div class="site-footer__map float-bob-x">
                    <img src="assets/images/shapes/site-footer-map-1.png" alt="">
                </div>
                <div class="site-footer__top-left">
                    <div class="site-footer__visa-box">
                    </div>
                </div>
            </div>
            <div class="site-footer__middle">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="footer-widget__column footer-widget__about">
                            <div class="footer-widget__logo">
                                <a href="index.html"><img src="assets/images/resources/footer-logo.png" alt=""></a>
                            </div>
                            <p class="footer-widget__about-text">Global Movers Consultants, based in Amritsar, has been offering expert visa and immigration services since 2010, providing personalized solutions for your global mobility needs.</p>
                            <div class="site-footer__social">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-1 col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div class="footer-widget__column footer-widget__link">
                            <div class="footer-widget__title-box">
                                <h3 class="footer-widget__title">Explore</h3>
                            </div>
                            <ul class="footer-widget__link-list list-unstyled">
                                <li><a href="about.html">About</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div class="footer-widget__column footer-widget__visa">
                            <div class="footer-widget__title-box">
                                <h3 class="footer-widget__title">Visa</h3>
                            </div>
                            <ul class="footer-widget__visa-list list-unstyled">
                                <li><a href="study-visa.html">Study Visa</a></li>
                                <li><a href="business-visa.html">Business Visa</a></li>
                                <li><a href="immigration-visa.html">Immigration</a></li>
                                <li><a href="tourism-visa.html">Tourism Visa</a></li>
                                <li><a href="medical-visa.html">Medical Visa</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div class="footer-widget__column footer-widget__gallery">
                            <div class="footer-widget__title-box">
                                <h3 class="footer-widget__title">Instagram</h3>
                            </div>
                            <ul class="footer-widget__gallery-list list-unstyled clearfix">
                                <li>
                                    <div class="footer-widget__gallery-img">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-1.jpg" alt="">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="footer-widget__gallery-img">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-2.jpg" alt="">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="footer-widget__gallery-img">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-3.jpg" alt="">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="footer-widget__gallery-img">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-4.jpg" alt="">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="footer-widget__gallery-img">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-5.jpg" alt="">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="footer-widget__gallery-img">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-6.jpg" alt="">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div class="footer-widget__column footer-widget__Contact">
                            <div class="footer-widget__title-box">
                                <h3 class="footer-widget__title">Contact</h3>
                            </div>
                            <ul class="footer-widget__Contact-list list-unstyled">
                                <li>
                                    <div class="icon">
                                        <span class="fas fa-envelope"></span>
                                    </div>
                                    <div class="text">
                                        <p><a href="mailto:admissions.globalmovers@gmail.com">admissions.globalmovers@gmail.com</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="fas fa-map-marker-alt"></span>
                                    </div>
                                    <div class="text">
                                        <p><a href="https://maps.app.goo.gl/c8w3QJLR4ucRWnub7" target="_blank">SCF 24 1st Floor, Kabir Park Market Opp. G.N.D.U. Asr (143001)</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="fas fa-clock"></span>
                                    </div>
                                    <div class="text">
                                        <p>Mon - Sat: 10:00 am to 6:00 pm <br> Sunday: Closed</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-footer__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="site-footer__bottom-inner">
                            <p class="site-footer__bottom-text">© Copyright 2010 to 2024 <a style="text-decoration: underline; color: white;" href="https://globalmoversconsultants.com/">Global Movers Consultants</a> | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append footer to the body or another container
    document.body.appendChild(footerContainer);
});






