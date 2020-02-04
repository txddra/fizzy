function fizzy(num) {
if(num % 3 === 0 && num % 5 !==0){
return 'Fizz'
}
}

module.exports = {
  fizzy,
}