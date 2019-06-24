let backendHost;

const hostName = window && window.location && window.location.hostname;

if(hostName === "localhost"){
    backendHost = "http://localhost:8080";
}else{
    backendHost = "https://frozen-badlands-71872.herokuapp.com";
}

const URL_ROOT = `${backendHost}`;
export default  URL_ROOT;