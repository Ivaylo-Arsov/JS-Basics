function password(input){
    let pass = (input[0]);
    if (pass === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
password(["s3cr3t.!P@ssw0rd"])