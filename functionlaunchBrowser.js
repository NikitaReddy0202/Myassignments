function launchBrowser(browserName){
    if (browserName=="chrome")
    {
        console.log("Launched browser successfully")
    }
    else{
        console.log("Please enter valid browser")
    }
}
function runTests(testType) {
    switch(testType){
    case "smoke":
        console.log("Running smoke testcase")
    case "sanity":
        console.log("Running sanity testcase")
    case "regression":
        console.log("Running regression testcase")
    default:
        console.log("Running smoke testcase")
    break;
    }
}
launchBrowser();
runTests();