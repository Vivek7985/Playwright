// Topic 6: Async/Await

function waitForWebsite() {

    return new Promise(resolve => {

        setTimeout(()=>
       {
        resolve("Website Loaded Successfully");

       }, 2000);
        
    });
}

async function openWebsite() {
    
    console.log("Opening Website...");

    const result = await waitForWebsite();

    console.log(result);
    console.log("Test Completed");
}

openWebsite();