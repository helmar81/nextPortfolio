import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Helmar Bachle - Web Design: <a href="https://uspekhi.web.app/home" target="blank">USPEKHI</a>. Built with: <a href="https://github.com/zeit/next.js" target="blank">Next.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
