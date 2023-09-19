let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #d9839b;'>|</span>",

});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d9839b;"> Desarrollo sitios web y soy Ingeniera Eléctrica Electrónica.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
