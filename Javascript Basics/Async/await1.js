function waitForDinner () {

    return new Promise(resolve => {
        
        setTimeout(()=>
        {
            resolve ("Dinner is Ready");
        }, 2000);
        
    });
}

async function serveDinner() {
    
    console.log("Serving Dinner....");

    const result = await waitForDinner();

    console.log(result);
    console.log("Dinner served Completed");
}

serveDinner();