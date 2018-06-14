function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

i = 0;

function nowServing(line) {
  i++;
  return i;
}

 function currentLine(line) {
  let arr=line.map((elem, i) => i+1 +'. ' + elem)
  return !line.length ? 'The line is currently empty.' : 'The line is currently: ' + arr.join(', ') 
}
