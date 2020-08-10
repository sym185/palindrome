export function checkPalindrom (str) {
  if (str){
    return str == str.split('').reverse().join('');
  }
  else{
    return false;
  }
}
