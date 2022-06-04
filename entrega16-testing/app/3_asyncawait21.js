/* Nivell 1
Crea els tests corresponents per verificar el funcionament 
de l'exercici Async / Await Nivell 2 - Exercici 1 */
let funcionN2E1 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {resolve("Ok")}, 2000);})
}
async function fetchingN2E1 (){
    try{
        funcionN2E1().then(value => console.log(value)); 
        return value;
    }catch(error){
        console.log(error);
    }
}
module.exports = {fetchingN2E1, funcionN2E1};