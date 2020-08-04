
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faPinterest from '@fortawesome/fontawesome-free-brands/faPinterest'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About me</h2>
          <span className="image main"><img src="/static/images/PassportPhoto.jpg" alt="coronavirus" /></span>
          <p>I am a self-taught Frontend Developer who is addicted to learning new web techniques and loves open source.</p>
          <p>I love what I do - When I wake up I am excited to write code and learn something new and feel accomplished when building an Application and don't wory about WIX taking Developer jobs. </p>
          <p>I have been spending plenty of time learning on blog posts, watching tutorials on YouTube and reading documentation from the popular Frameworks</p>
        <p>I created my first blog on Wordpress and figured out that there are better options building Websites and Apps.</p>
          <p>Angular, React, Gatsby and Ionic are my favorite Frameworks, they will continue to grow in 2021 and beyond.</p>
         <p>In the meantime I have created a portfolio of real projects</p>
          {close}
        </article>

      
        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <h3>Get the latest data</h3>
          <span className="image main"><img src="/static/images/covid.jpg" alt="" /></span>
          <p>Created with React using API from John Hopkins University </p>
        
        <h1 className="icons"> website
         <a href="https://covidthepandemic.web.app/"  target="_blank" rel="noopener noreferrer" >
           <FontAwesomeIcon icon={faPinterest} />
         </a>
       </h1>

       {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h3>Vietnam is awesome</h3>
        <span className="image main"><img src="/static/images/vietnamese.webp" alt="vietnamese" /></span>
        <p>Blazing fast created with Gatsby</p>
        <h1 className="icons"> website
         <a href="https://vietnam-is-awesome.web.app/"  target="_blank" rel="noopener noreferrer" >
           <FontAwesomeIcon icon={faPinterest} />
         </a>
       </h1>
        {close}
      </article>

      <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
      <h3>Travel Guide</h3>
      <span className="image main"><img src="/static/images/vt.jpg" alt="" /></span>
      <p>Created with Ionic and deployed on Firebase </p>
      <h1 className="icons"> website
         <a href="https://vungtaulike.web.app/"  target="_blank" rel="noopener noreferrer" >
           <FontAwesomeIcon icon={faPinterest} />
         </a>
       </h1>
      {close}
    </article>

    <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h3>Where have you been</h3>
    <span className="image main"><img src="/static/images/travel.png" alt="" /></span>
    <p>Created with Ionic using Angular DragAndDrop </p>
    <h1 className="icons"> website
       <a href="https://mytopcountries.web.app/"  target="_blank" rel="noopener noreferrer" >
         <FontAwesomeIcon icon={faPinterest} />
       </a>
     </h1>
    {close}
  </article>

  <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
  <h3>Learning English</h3>
  <span className="image main"><img src="/static/images/TheSeedsLogo.jpg" alt="" /></span>
  <p>On request of a friend I created this project on the fly </p>
  <h1 className="icons"> website
     <a href="https://seeds-vungtau.firebaseapp.com/"  target="_blank" rel="noopener noreferrer" >
       <FontAwesomeIcon icon={faPinterest} />
     </a>
   </h1>
  {close}
</article>

  <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
  <h3>CV / Resume</h3>
  <span className="image main"><img src="/static/images/MyCVLogo.jpg" alt="" /></span>
  <p>Created with Angular and Bootstrap </p>
  <h1 className="icons"> website
     <a href="https://helmarbachle.web.app/"  target="_blank" rel="noopener noreferrer" >
       <FontAwesomeIcon icon={faPinterest} />
     </a>
   </h1>
  {close}
</article>

<article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
<h3>Athens Guide</h3>
<span className="image main"><img src="/static/images/come2greece.jpeg" alt="" /></span>
<p>The result while I was working in Greece </p>
<h1 className="icons"> website
   <a href="https://come2athens.web.app/"  target="_blank" rel="noopener noreferrer" >
     <FontAwesomeIcon icon={faPinterest} />
   </a>
 </h1>
{close}
</article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Experience</h2>
          <span className="image main"><img src="/static/images/grapefruit.jpg" alt="grapefruit" /></span>
         <h3>Why I started to learn programming:</h3>
         <ul>
         <li>learn to solve problems that are not just computer related</li>
         <li>become a better thinker and learn things quicker</li>
         <li>not standarzided and mind numbing</li>
         <li>think in more logical manner</li>
         <li>unleash my creatvity</li>
         <li>extremly satisfying</li>
         </ul>
         
         <h4> experience</h4>
        
         
         <table>
         <tr>
           <th>Language</th>
          <th>years</th>
           <th>strength</th>
         </tr>
         <tr>
         <td>Wordpress</td>
        <td>+5</td>
         <td>++++</td>
       </tr>

       <tr>
       <td>HTML</td>
      <td>+5</td>
       <td>+++++</td>
     </tr>

     <tr>
     <td>CSS</td>
    <td>+5</td>
     <td>+++++</td>
   </tr>

   <tr>
   <td>Google Analytics</td>
  <td>+5</td>
   <td>++++</td>
 </tr>


   <tr>
   <td>Javascript</td>
  <td>+2</td>
   <td>++</td>
 </tr>

 

 <tr>
 <td>Firebase</td>
<td>+2</td>
 <td>+++</td>
</tr>




         <tr>
           <td>Angular</td>
          <td>+2</td>
           <td>++</td>
         </tr>
         <tr>
           <td>Ionic</td>
          <td>+2</td>
           <td>+++</td>
         </tr>

         <tr>
         <td>React</td>
        <td>+1</td>
         <td>++</td>
       </tr>

       <tr>
       <td>Gatsby</td>
      <td>+1</td>
       <td>++</td>
     </tr>

     <tr>
     <td>Vue</td>
    <td>+1</td>
     <td>++</td>
   </tr>

   <tr>
<td>Jamstack</td>
<td>+1</td>
<td>++</td>
</tr>

       </table>
          {close}
          </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="POST" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="https://www.facebook.com/helmar.baechle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="https://www.instagram.com/helmar.baechle/"  target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="https://github.com/helmar81/"  target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main
