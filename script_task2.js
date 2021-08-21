//XHR object
//XmlHttpRequest object
//creating an XHR object
var request = new XMLHttpRequest();
//opening a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//sending a connection
request.send();

//Once the server responds, then process the data
request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);

    for(var i=0; i<250; i++){
        console.log(data[i].name + ", Capital : " + data[i].capital + ", Flag : " + data[i].flag);
    }
}