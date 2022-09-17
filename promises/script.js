const vendingmachine=new Promise(
    function(resolve,reject){
        console.log('Product status')
        setTimeout(function(){
            if(Math.random() >= 0.5)
            {
                resolve('Product delivered');
            }
            else
            {
                reject(new Error("Error occured: Product won't receive you"));
            }
        }, 2000 )

    }
);
vendingmachine.then(res=>console.log(res)).catch(err =>console.error(err));