console.log = function (...objects) {
  if (objects?.length === 1 && typeof objects[0] === 'undefined') {
    document.write('undefined');
    document.write('<br/>');
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
    document.write(`[${result}]`);
    document.write('<br/>');
    return;
  };

  const result = objects.join(' ');
  document.write(result);
  document.write('<br/>');
}

console.error = function (...objects) {
  if (objects?.length === 1 && typeof objects[0] === 'undefined') {
    document.write('<p style="color:red">undefined</p>');
    document.write('<br/>');
    return;
  }

  if (objects?.length === 1 && Array.isArray(objects[0])) {
    document.write('<p style="color:red">[' + objects[0].join(', ') + ']</p>');
    document.write('<br/>');
    return;
  };

  const result = objects.join(' ');
  document.write('<p style="color:red">' + result + '</p>');
  document.write('<br/>');
}
