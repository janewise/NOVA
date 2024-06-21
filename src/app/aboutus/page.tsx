import style from './about.module.css' 

export default function Whitepaper() {
    return (
     <div className={style.aboutbg}>
      <div className={style.aboutbox}>
        <h2>Nova Metaverse: Your Gateway to New Realms of Possibility.</h2>
       <p>At Nova Metaverse, we believe in the power of technology to transform lives. Founded in 2024 amidst the digital revolution, our journey began with a simple yet profound mission: to create innovative solutions that empower businesses and enrich everyday experiences.</p>
       <p><span>Our Roots</span>: Born out of a passion for progress and a vision for the future. With a deep understanding of the industry’s needs and an unwavering commitment to excellence, we set out to chart a new course in the tech world.</p>
       <p><span>Our Evolution</span>: From our humble beginnings, we have grown into a beacon of innovation, constantly pushing the boundaries of what’s possible. Our team of experts brings together diverse skills and perspectives, united by a shared dedication to delivering cutting-edge products and services.</p>
       <p><span>Our Values</span>: Integrity, creativity, and collaboration are the cornerstones of our culture. We are driven by a desire to make a positive impact, both through our work and our community engagement. Our commitment to sustainability and ethical practices is unwavering, as we strive to build a better tomorrow.</p>
       <p><span>Our Promise</span>: To our clients, partners, and the communities we serve, we pledge to remain at the forefront of technological advancement, offering solutions that are not only effective but also responsible and forward-thinking.</p>
       <p><span>Join Us</span>: As we continue to grow and explore new horizons, we invite you to be a part of our story. Together, let’s shape the future of technology and create a world where possibilities are endless.</p>
      
       <div className={style.socialbox}>
        <h3>Follow us :</h3>
        <a className={style.icon} href="https://twitter.com/i/flow/login"><i className="bi bi-twitter-x"></i></a>
        <a className={style.icon} href="https://discord.com/"><i className="bi bi-discord"></i></a>
        <a className={style.icon} href="https://www.facebook.com/login.php/"><i className="bi bi-facebook"></i></a>
        <a className={style.icon} href="https://web.telegram.org/"><i className="bi bi-telegram"></i></a>
       </div>
      </div>
     </div>
     
    );
  }