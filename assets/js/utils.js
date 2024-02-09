function log(...args) {
  if (args?.length === 1 && typeof args[0] === 'undefined') {
    return undefined;
  }

  if (args?.length === 1 && args[0] === null) {
    return null;
  }

  if (args?.length === 1 && typeof args[0] === 'string') {
    return args[0];
  }

  if (args?.length === 1 && typeof args[0] === 'number') {
    return args[0];
  }

  if (args?.length === 1 && typeof args[0] === 'boolean') {
    return args[0];
  }

  if (args?.length === 1 && typeof args[0] === 'symbol') {
    return args[0].toString();
  }

  if (args?.length === 1 && typeof args[0] === 'object' && args[0] instanceof Date) {
    return args[0].toString();
  }

  if (args?.length === 1 && typeof args[0] === 'object' && args[0] instanceof RegExp) {
    return args[0].toString();
  }

  if (args?.length === 1 && typeof args[0] === 'object' && !Array.isArray(args[0])) {
    let result = '';
    const obj = args[0];
    const keys = getKeys(obj);

    for (let i = 0; i <= keys.length - 1; i++ ) {
      if (typeof obj[keys[i]] === 'object' && obj[keys[i]] !== null) {
        if (i < keys.length - 1) {
          result += `${keys[i]}: ${log(obj[keys[i]])}, `;
        } else {
          result += `${keys[i]}: ${log(obj[keys[i]])}`;
        }
      } else if (Array.isArray(obj[keys[i]])) {
        if (i < keys.length - 1) {
          result += `${keys[i]}: ${log(obj[keys[i]])}, `;
        } else {
          result += `${keys[i]}: ${log(obj[keys[i]])}`;
        }
      } else if (typeof obj[keys[i]] === 'function') {
        if (i < keys.length - 1) {
          result += `${keys[i]}: f, `;
        } else {
          result += `${keys[i]}: f`;
        }
      } else if (typeof obj[keys[i]] === 'string') {
        if (i < keys.length - 1) {
          result += `${keys[i]}: '${obj[keys[i]]}', `;
        } else {
          result += `${keys[i]}: '${obj[keys[i]]}'`;
        }
      } else {
        if (i < keys.length - 1) {
          result += `${keys[i]}: ${obj[keys[i]].toString()}, `;
        } else {
          result += `${keys[i]}: ${obj[keys[i]].toString()}`;
        }
      }
    }

    return `{ ${result} }`;
  }

  if (args?.length === 1 && Array.isArray(args[0])) {
    let result = ''
    const array = args[0];
    
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'object' && array[i] !== null) {
        if (i < array.length - 1) {
          result += `${log(array[i])}, `;
        } else {
          result += `${log(array[i])}`;
        }
      } else if (Array.isArray(array[i])) {
        if (i < array.length - 1) {
          result += `${log(array[i])}, `;
        } else {
          result += `${log(array[i])}`;
        }
      } else if (typeof array[i] === 'function') {
        if (i < array.length - 1) {
          result += `f, `;
        } else {
          result += `f`;
        }
      } else if (typeof array[i] === 'string') {
        if (i < array.length - 1) {
          result += `'${array[i]}', `;
        } else {
          result += `'${array[i]}'`;
        }
      } else {
        if (i < array.length - 1) {
          result += `${array[i].toString()}, `;
        } else {
          result += `${array[i].toString()}`;
        }
      }
    }

    return `[${result}]`;
  };

  if (args?.length > 1) {
    let result = ''

    for (let i = 0; i <= args?.length - 1; i++) {
      if (i < args.length - 1) {
        result += `${log(args[i])} `;
      } else {
        result += `${log(args[i])}`;
      }
    }

    return result;
  }
}

function getKeys(obj) {
  let keys = []

  if (obj && typeof obj == 'object' && !Array.isArray(obj)) {
    do {
      keys = [...keys, ...Object.keys(obj)];
      obj = Object.getPrototypeOf(obj)
    } while (obj != null)
  }

  return keys;
}

function error(...args) {
  if (args?.length === 1 && typeof args[0] === 'undefined') {
    return '<p style="color:red">undefined</p>';
  }

  if (args?.length === 1 && Array.isArray(args[0])) {
    return '<p style="color:red">[' + args[0].join(', ') + ']</p>';
  };

  const result = args.join(' ');
  return '<p style="color:red">' + result + '</p>';
}

function write(segment) {
  let body = document.body;
  let div = document.createElement('div');
  div.innerHTML = segment;
  body.appendChild(div);
}

console.log = (...args) => write(log(...args));

console.error = (...args) => write(error(...args));
