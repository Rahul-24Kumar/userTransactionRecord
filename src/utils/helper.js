
function random(){
    let r = Math.random().toString(36).slice(2, 10);
    //console.log(r);
}
random();

module.exports = { random };