const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
//console.log(checkboxes)

let lastChecked

function handleCheck(e){
    //console.log(e)
    //check if they had the shift key down
    // and check that they are checking it
    let inBetween = false
    if(e.shiftKey && this.checked){
        //go ahead and do what we please
        //loop over every single checkbox
        checkboxes.forEach(checkbox =>{
            console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween
                console.log('Starting to check them inBetween')
            }
            if(inBetween){
                checkbox.checked = true
            }
        })
    }
    lastChecked = this
    //console.log(lastChecked)
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))