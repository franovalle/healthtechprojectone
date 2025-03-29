
document.querySelector('button').addEventListener('click', checkBefore)
function checkBefore() {
let meds = document.querySelector('input').value
    fetch(`https://api.fda.gov/drug/ndc.json?search=${meds}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            console.log(data.results[0]);
            console.log(data.results[0].brand_name)
            console.log(data.results[0].generic_name)
            //console.log(data.results[0].openfda.manufacturer_name)
            document.querySelector('h2').innerText = data.results[0].brand_name
            document.querySelector('h3').innerText = data.results[0].generic_name
           //document.querySelector('h4').innerText = data.results[0].openfda.pharm_class_moa
           //document.getElementById("my-form").reset();

        })
        .catch(err => {
            console.log(`error ${err}`);

        })
    

}
