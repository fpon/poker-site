const FadeUp = document.querySelector('.text-animation');

window.addEventListener('DOMContentLoaded', (e) =>{
    FadeUp.classList.add( "fade-up" );
});

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
  const clickEventType = (( window.ontouchstart!==null ) ? 'click':'touchend');
  smoothScrollTrigger[i].addEventListener(clickEventType, (e) => {
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const target = rect + window.pageYOffset - 55;
  });
}

class MobileMenu {
    constructor() {
      this.DOM = {}; 
      this.DOM.btn = document.querySelector('.mobile-menu-btn');
      this.DOM.cover = document.querySelector('.mobile-nav__list');
      this.DOM.container = document.querySelector('#global-container');
      this.eventType = this._getEventType();
      this._addEvent();
    }
  
    _getEventType() {
      const isTouchCapable =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;
  
      return isTouchCapable ? "touchstart" : "click";
    }
  
    _toggle() {
      this.DOM.container.classList.toggle("menu-open");
    }
  
    _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
  }
  
  new MobileMenu();