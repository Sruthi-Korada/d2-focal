function joinList(list) {
  let str = '';
  let i = 0;
  let len = list.length;
  while (i < len) {
    if (i != len - 1) {
      str += list[i] + ', ';
    } else  {
      str += list[i];
    }
  
    i++;
  }
  return str;
}

console.log(joinList(["hello","World"]));