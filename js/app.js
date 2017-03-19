
var Menu = function(options) {
  var menuSelector = options.menuSelector;
  var buttonSelector = options.buttonSelector;
  var itemsSelector = options.itemsSelector;

  var menu = document.querySelector(menuSelector);
  if (!menu) return;

  var button = menu.querySelector(buttonSelector);

  var menuOpenClass = options.menuOpenClass;
  var buttonOpenClass = options.buttonOpenClass;

  button.addEventListener('click', function(){
    menu.classList.toggle(menuOpenClass);
    button.classList.toggle(buttonOpenClass);
  })
}



Menu({
  menuSelector: '.menu',
  menuOpenClass: 'menu--open',

  buttonSelector: '.menu__toggle',
  buttonOpenClass: 'menu__toggle--open',

})
