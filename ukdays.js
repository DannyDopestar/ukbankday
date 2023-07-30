fetch("https://www.gov.uk/bank-holidays.json")
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    let target = data["england-and-wales"].events;
    let t = "";
    for (i = 0; i < target.length; i++) {
      console.log(target[i]);
      t += `<div>${target[i].title}</div>`;
    }

    //console.log(target);
    //console.log(target[0].title);
    //let many;
    document.querySelector("#event").innerHTML = `
        <div>
            ${t}
            
        </div>
        
      `;
  });
