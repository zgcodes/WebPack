import './main.css';
import generateText from './sub';
import 'imports?jQuery=jquery!./plugin.js';

let app  = document.createElement('div');
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());

const myPromise = Promise.resolve(42);
myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + '</p>');
  $('p').greenify();
});

