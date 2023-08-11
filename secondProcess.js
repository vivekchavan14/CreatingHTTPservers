function logResponseBody(jsonBody)
{
    console.log(jsonBody);
}

function callBackFn(result)
{
    result.json().then(logResponseBody);
}

var sendObj = {
    method : "GET",
};

fetch("http://localhost:3011/handle?counter=10",sendObj).then(callBackFn);