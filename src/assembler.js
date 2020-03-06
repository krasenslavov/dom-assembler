/*! dom-assembler v1.0.0 | (c) Krasen Slavov | https://krasenslavov.com/ */
const o = Object,
      d = document,
      f = d.createDocumentFragment();

export function assembler(chain, container) {

  container = container || 'body';
  chain = chain || 'div';

  const cont = d.querySelector(container);
  const parts = chain.split(/([\>\+\<])/g);

  parts.forEach((part, index) => {
    if (['>','+','<'].indexOf(part) === -1) {
      let tag = part.split(/(\.)|(\{(.*)\}|\((.*)\))/g).filter(Boolean)[0];
      parts[index] = tag + Math.random().toString(36).substr(1).replace('.', '#k') + part.replace(tag, '');
    } 
  });

  append('>', f, parts[0]);

  parts.forEach((part, index) => {
    if (['>','+','<'].indexOf(part) > -1) {
      if (parts[index - 1]) {
        let tagPrev = parts[index - 1].split(/(\{(.*)\}|\((.*)\))/g).filter(Boolean)[0];
        let elemNext = parts[index + 1];
        if (part === '>') {
          append(part, f.querySelector(tagPrev), elemNext);
        } else if (part === '+') {
          append(part, f.querySelector(tagPrev).parentNode, elemNext);
        } else { /*<*/
          append(part, f.querySelector(tagPrev).parentNode.firstElementChild, elemNext);
        }
      }
    }
  });

  function append(modifier, parent, element) {
    const parts = element.split(/(\.|\#|\{(.*)\}|\((.*)\))/g).filter(Boolean);
    let tagName = parts[0], 
        id = '',
        classList = '', 
        props = '{}',
        textNode = '';
     parts.forEach((part, i) => {
      if (part === '.') {
        classList += parts[i + 1] + ' ';
      } else if (part === '#') {
        id = parts[i + 1];
      } else if (part.match(/\{(.*)\}/g)) {
        props = part.replace(/[\{]/g, '{"')
          .replace(/[\}]/g, '"}')
          .replace(/[\:]/g, '":"')
          .replace(/[\,]/g, '","');
      } else if (part.match(/\((.*)\)/g)) {
        textNode = part.replace(/[\(\)]/g, '');
      }
    });
    if (parent) {
      console.log(props);
      parent.appendChild(
        o.assign(
          d.createElement(tagName),
          o.assign(
            { id: id, className: classList, innerText: textNode }, 
            JSON.parse(props)
          )
        )
      );
    }
  }
  cont.appendChild(f);
};