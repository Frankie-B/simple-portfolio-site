function myFunction() {
  let navBar = document.getElementById('myTopnav');

  if (navBar.className === 'topnav') {
    navBar.className += ' responsive';
  } else {
    navBar.className = 'topnav';
  }
}
