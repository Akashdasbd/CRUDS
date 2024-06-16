const getDataLds = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } else {
        false;
    }
}


const setDataLds = (key, newData) => {
    const data = localStorage.getItem(key);
  let mydata;
  if (data) {
    mydata = JSON.parse(data);
  }else{
    mydata=[];
  };

  mydata.push(newData);
  localStorage.setItem(key , JSON.stringify(mydata));
}

