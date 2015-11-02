import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    const styles = require('./Footer.scss');

    return (
      <footer className={styles.footer}>
        <div className={styles['centered-content']}>
          <div className={styles['mobile-app-button-container']}>
            <a href="https://play.google.com/store/apps/details?id=ae.propertyfinder.propertyfinder" target="_blank" className={styles['app-btn'] + ' ' + styles['google-play']}>
              <span>https://play.google.com/store/apps/details?id=ae.propertyfinder.propertyfinder</span>
            </a>
            <a href="https://itunes.apple.com/app/apple-store/id897540233?pt=94765875&amp;mt=8&amp;ct=sitefoot" target="_blank" className={styles['app-btn'] + ' ' + styles['apple-store']}>
              <span>https://itunes.apple.com/app/apple-store/id897540233?pt=94765875&amp;mt=8&amp;ct=sitefoot</span>
            </a>
          </div>

          <div className={styles['link-wrap']}>
            <nav className={styles['footer-nav']}>
              <ul className={styles['footer-links']}>
                <li className={styles['f-lst'] + ' ' + styles.first}>
                  <a href="/en/about-us.html" rel="nofollow" className={styles['footer-link']}>About us</a>
                </li>
                <li className={styles['f-lst']}>
                  <a href="/en/terms-and-conditions.html" rel="nofollow" className={styles['footer-link']}>Terms &amp; Conditions</a>
                </li>
                <li className={styles['f-lst']}>
                  <a href="/en/privacy-policy.html" rel="nofollow" className={styles['footer-link']}>Privacy Policy</a>
                </li>
                <li className={styles['f-lst']}>
                  <a href="https://www.propertyfinder.ae/manager" rel="nofollow" className={styles['footer-link']}>Client Login</a>
                </li>
              </ul>
            </nav>
            <p className={styles['site-name']}>© property<span className={styles['red-color']}>finder</span></p>
          </div>
        </div>
      </footer>
    );
  }
}
