async function specialist_login() {
    let email_input = document.getElementById("email").value;
    let password_input = document.getElementById("password").value;
    let obj = {
        email: email_input,
        password: password_input
    }
    console.log(obj);
    if (email_input != '' && password_input != '') {
        let response = await fetch(`http://localhost:8080/loginspecialist?email=${email_input}&password=${password_input}`, {
            method: "GET", headers: {
                'Content-Type': 'Application/json'
            },
            // body: JSON.stringify(obj)
        })

            .then(async response => {
                console.log(response);
                const data = await response.json();
                if (response.status === 302) {

                    console.log("Success", data);
                } else {
                    alert(data.message + "😒😒😒")
                    return;
                }
            })
            // .then(data => {
            //     alert("Form submitted successfully!")
            //     // window.location.href = 'http://127.0.0.1:5501/project/html/dum.html'
            //     console.log(data);
            // })
            .catch(error => {
                console.log("Error:", error);
                alert("An error occured while submitting the form.")
            })
    } else {
        alert("Please fill mandatory *  fields")
    }
}


let submit = document.getElementsByClassName("submit");

console.log(submit[0]);
submit[0].addEventListener("click", async (e) => {
    console.log(e.target);
    e.preventDefault();
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value;
    if (email != '' && password != '') {
        try {
            let response = await fetch(`http://localhost:8080/loginspecialist?email=${email}&password=${password}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "Application/json"
                },
            })

            let x = await response.clone().json();
            if (x.status === 302) {
                localStorage.setItem('email', email)
                localStorage.setItem('password', password)
                window.location.href = "http://127.0.0.1:5501/project/html/specialist_main.html";
                return response.json();
            }
            else if (response.status === 400 && response.status === 404) {
                window.alert("Please enter the correct EMAIL Id and PASSWORD...");
            }
            else {
                window.alert(x.message + "😒😒😒");
            }
            // .then(response => {
            //     if (response.status === 302) {
            //         return response.json()
            //     } else {
            //         throw new Error("Invalid User name or Password");
            //     }
            // })
            // .then(data => {
            //     alert("login successful...🙌🙌")
            //     console.log(data);
            // })
            // .catch(error => {
            //     alert("invalid username or password");
            // })
        } catch (error) {
            alert("invalid user name or password....");
        }
    } else {
        alert("All fields are required")
    }
})