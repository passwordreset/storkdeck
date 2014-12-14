var css = 'ul.tweet-actions, ul.tweet-detail-actions{display:none}' +
          'button.btn-compose{display:none}' +
          'button.js-follow-button{display:none}' +
          'div.inline-reply{display:none}' +
          'div.js-inline-reply.inline-reply.is-inline-active{display:none}' + 
          'div.js-detail-view-inline.detail-view-inline{display:none}';

var head  = document.head,
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
