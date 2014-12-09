var css = 'ul.tweet-actions, ul.tweet-detail-actions{display:none}'    +
          'button.tweet-button{display:none}' +
          'button.js-follow-button' +
          'div.js-detail-view-inline.detail-view-inline.item-box-full-bleed.padding-axl.scroll-conversation{display:none}';

var head  = document.head,
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
