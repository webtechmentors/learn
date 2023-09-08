console.log = function (...objects) {
  if (objects?.length === 1 && typeof objects[0] === 'undefined') {
    write('undefined');
    return;
  }

  if (objects?.length === 1 && Array.isArray(objects[0])) {
    const array = objects[0];
    let result = ''
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string') {
        if (i < array.length - 1) {
          result += `'${array[i]}', `;
        } else {
          result += `'${array[i]}'`;
        }
      } else {
        if (i < array.length - 1) {
          result += `${array[i]}, `;
        } else {
          result += `${array[i]}`;
        }
      }
    }
    write(`[${result}]`);
    return;
  };

  const result = objects.join(' ');
  write(result);
}

console.error = function (...objects) {
  if (objects?.length === 1 && typeof objects[0] === 'undefined') {
    write('<p style="color:red">undefined</p>');
    return;
  }

  if (objects?.length === 1 && Array.isArray(objects[0])) {
    write('<p style="color:red">[' + objects[0].join(', ') + ']</p>');
    return;
  };

  const result = objects.join(' ');
  write('<p style="color:red">' + result + '</p>');
}

function write(segment) {
  let body = document.body;
  let div = document.createElement('div');
  div.textContent = segment;
  body.appendChild(div);
}
