var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DEFAULT_THUMBNIAILS = [].slice.call(document.querySelectorAll(THUMBNAIL_LINK_SELECTOR));

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function resetThumbnailImages() {
  var thumbnails = [].slice.call(document.querySelectorAll(THUMBNAIL_LINK_SELECTOR));
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].setAttribute('data-image-url', DEFAULT_THUMBNIAILS[i]);
  }
}

function changeARandomThumbnail() {
  var thumbnails = [].slice.call(document.querySelectorAll(THUMBNAIL_LINK_SELECTOR));
  var randomNumber = Math.floor((Math.random() * thumbnails.length));
  thumbnails[randomNumber].setAttribute('data-image-url', 'img/tacocat.jpg');
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    if (imageFromThumb(thumb) == 'img/tacocat.jpg') {
      resetThumbnailImages();
      changeARandomThumbnail();
    }
  });
}

function getThumbnailsArray() {
  'use strict';
  //condensed
  return [].slice.call(document.querySelectorAll(THUMBNAIL_LINK_SELECTOR));
}

function getDefaultImages() {
  for (var i = 0; i < DEFAULT_THUMBNIAILS.length; i++) {
    DEFAULT_THUMBNIAILS[i] = DEFAULT_THUMBNIAILS[i].getAttribute('data-image-url');
  }
}

function initializeEvents() {
  'use strict';
  getDefaultImages();
  changeARandomThumbnail();
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
