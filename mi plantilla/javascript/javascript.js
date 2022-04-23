

const contacto = document.querySelector("#mail");

contacto.addEventListener("mouseout", () => {
	alert("¿A que esperas?, Contactame!");
});


const pagina = document.querySelector("#four-txt");

pagina.addEventListener("click", () => {
	alert("Bienvenido a mi pagina Web :)");

});

const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');

(() => {
  const mouseFollower          = document.querySelector('.mouse-follower');
  const mouseFollowerSibling   = document.querySelector('.mouse-follower-sibling');

   if( mouseFollower && mouseFollowerSibling ) {
       window.addEventListener('mousemove', ( e ) => {
          const mousePosition = {x: e.x, y: e.y };
          const shapeTl = gsap.timeline();

          shapeTl.to(mouseFollower, mousePosition, 0);
          shapeTl.to(mouseFollowerSibling, 1,{x: e.x, y: e.y, ease: Power2.easeIn}, '-=1');
      });
   }
})(); 