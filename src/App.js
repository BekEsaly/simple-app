
import drawers from './images/drawers.jpg';
import './App.css';
/*import share from './images/icon-share.svg';
import shareActive from './images/icon-share-active.svg';*/
import avatar from './images/avatar-michelle.jpg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';


function App() {

  return (
        <main class="main container">
            <div class="img-box">
              <img src={drawers} alt="drawers" />
            </div>
            
            <div class="content">
               <h2>
                 Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home
               </h2>
               <p>
                 Ever been in a room and felt like something was missing? Perhaps 
  it felt slightly bare and uninviting. I’ve got some simple tips 
  to help you make any room feel complete.
               </p>
               
               <div class="content-footer">
                 <div>
                   <img src={avatar} alt="avatar" />
                     <span>Michelle Appleton</span>
                     <p>28 Jun 2020</p>
                 </div>
             
                   <button class="share"></button>
                <ul class="social">
                      <li>Share</li>
                      <li><img src={facebook} alt="facebook" /></li>
                      <li><img src={twitter} alt="twitter"/></li>
                      <li><img src={pinterest} alt="pinterest"/></li>
               </ul>
               <div class="triangle-down">
               </div>
              
             </div> 
           </div>
        </main>
  );
 
}

export default App;
