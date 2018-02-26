
let domEl;

export function bootstrap(props) {
  return Promise
    .resolve()
    .then(() => {
      domEl = document.createElement('div');
      domEl.id = 'stage-app';
      domEl.style = "margin-top:100px";
      document.body.appendChild(domEl);
    });
}

export function mount(props) {
  console.log('mount');
  return Promise
    .resolve()
    .then(() => {
      // This is where you would normally use a framework to mount some ui to the dom. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-ecosystem.md.
      domEl.textContent = 'Stage app is mounted!';
    })
}

export function unmount(props) {
  return Promise
    .resolve()
    .then(() => {
      // This is normally where you would tell the framework to unmount the ui from the dom. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-ecosystem.md
      domEl.textContent = '';
    })
}
