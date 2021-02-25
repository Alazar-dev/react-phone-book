function purchase() {

    setTimeout(() => {
       console.log('purchased') 
    }, 2000);
}

async function pay() {
    console.log('paying');
    console.log(purchase())
    console.log("finished");
}

pay();