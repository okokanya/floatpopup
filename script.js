var rights = document.getElementsByClassName('rights');
var rightsArray = Array.from(rights);

rightsArray.forEach(oneRightItem => 
  window.addEventListener('scroll', function() {
    var topPosR = oneRightItem.getBoundingClientRect();
      if (topPosR.top > 600 || topPosR.top < -10 ) {
        oneRightItem.style.left = '-560px';
      }
      else  {
        oneRightItem.style.left = '0';
      }
    }
  )
);

var lefts = document.getElementsByClassName('lefts');
var leftsArray = Array.from(lefts);

leftsArray.forEach(oneLeftItem => 
  window.addEventListener('scroll', function() {
    var topPosR = oneLeftItem.getBoundingClientRect();
      if (topPosR.top > 600 || topPosR.top < -10 ) {
        oneLeftItem.style.right = '-560px';
        oneLeftItem.style.opacity = '0';
    }
      else  {
        oneLeftItem.style.right = '0';
        oneLeftItem.style.opacity = '10';
    }
  })
);
