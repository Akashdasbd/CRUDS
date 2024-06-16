const careatMgs = (mgs , type = "danger") =>{
    return `<p class=" alert alert-${type} d-flex justify-content-between">${mgs}<button class=" btn-close" data-bs-dismiss="alert"></button></p>`
}


const isEmail = (email)=>{
    const patten = /^[a-z0-9\._]{1,}@[a-z0-9]{2,5}\.[a-z]{2,4}$/;
    
    return patten.test(email);
    
}



const isMobile = (mobile)=>{
    const patten =/^(\+880|8801|01)[0-9]{9}$/;

    return patten.test(mobile);
}


function generateUniqueId() {
    const timestamp = Math.floor(Date.now() / 1000).toString(16); // 4-byte timestamp
    const randomValue = Math.floor(Math.random() * 0xFFFFFF).toString(16); // 5-byte random value
    const counter = Math.floor(Math.random() * 0xFFFFFF).toString(16); // 3-byte counter

    return (
        timestamp.padStart(8, '0') +
        randomValue.padStart(10, '0') +
        counter.padStart(6, '0')
    );
}

