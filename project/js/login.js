async function user_login() {
    let email_input = document.getElementById("email").value;
    let password_input = document.getElementById("password").value;
    let obj = {
        email: email_input,
        password: password_input
    }
    console.log(obj);
    if (email_input != '' && password_input != '') {
        let response = await fetch(`http://localhost:8080/login?email=${email_input}&password=${password_input}`, {
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
                    alert("Form submitted successfully!")

                } else {
                    alert(data.message + "😒😒😒")
                    return;
                }
            })
            .then(data => {
                // window.location.href = 'http://127.0.0.1:5501/project/html/dum.ht ml', '_blank'
                console.log(data);
            })
            .catch(error => {
                console.log("Error:", error);
                alert("An error occured while submitting the form.")
            })
    } else {
        alert("Please fill mandatory *  fields")
    }
}
// user_login();

// function user_login() {
//     let id = document.getElementById("id").value;
//     // fetch(`http://localhost:8080/fetch?id=${id}`)
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         alert("Form submitted successfully!")
//     //         window.location.href = 'http://127.0.0.1:5501/project/login.html'
//     //         console.log(data);
//     //     })
//     //     .catch(error => {
//     //         console.log("Error:", error);
//     //         alert("An error occured while submitting the form.")
//     //     })

//     fetch(`http://localhost:8080/fetch?id=${id}`)
//         .then(reponse => reponse.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error))

// }
// user_login();

// function pikachu() {
//     let id = prompt("enter Id")
//     fetch(`http://localhost:8080/fetch?id=${id}`)
//         .then(reponse => reponse.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
// }

// pikachu();

// ======================================working======================================
// async function user_login() {
//     let email_input = document.getElementById("email").value;
//     let password_input = document.getElementById("password").value;
//     let obj = {
//         'Email': email_input,
//         'password': password_input
//     }
//     console.log(obj);
//     console.log(typeof email_input);
//     console.log(typeof password_input);

//     if (email_input != '' && password_input != '') {
//         try {
//             let response = await fetch(`http://localhost:8080/login?email=${email_input}&password=${password_input}`, {
//                 method: "GET", headers: {
//                     'Content-Type': 'Application/json'
//                 },
//                 // body: JSON.stringify(obj)
//             })
//             console.log(response.status);
//             const data = await response.json();
//             if (response.status === 302) {
//                 console.log("Success", data);
//             }
//             else {
//                 window.alert(data.message + " 😮😮😮");
//             }
//         }
//         catch (error) {
//             console.log("Error:", error);
//             alert("An error occured while submitting the form.")
//         }
//     }
//     else {
//         window.alert("Field is empty...");
//     }


// }
// user_login();

// function login() {
//     var email_input = document.getElementById("email").value;
//     var password_input = document.getElementById("password").value;

//     // var errorMessage = document.getElementById("errorMessage");
//     // errorMessage.innerHTML = '';
//     // if (!email_input || !password_input) {
//     //     errorMessage.innerHTML = 'All fields are required'
//     //     return;
//     // }
//     let obj = {
//         email: email_input,
//         password: password_input
//     }
//     fetch(`http://localhost:8080/login`, {
//         method: "POST", headers: {
//             'Content-Type': 'Application/json'
//         },
//         body: JSON.stringify(obj)
//     })
//         .then(response => console.log(response.json()))
//         .then(data => {
//             alert("Form submitted successfully!")
//             window.location.href = 'http://localhost:8080/login'
//             console.log(data);
//         })
//         .catch(error => {
//             console.log("Error:", error);
//             alert("An error occured while submitting the form.")
//         })
//     // document.getElementById("registrationform").reset();

// }



// Admin signin

// let email = document.getElementById('email');
// let pswd = document.getElementById('password');
// let signin = document.getElementById('signin');
// signin.addEventListener('click', async (e) => {
//     e.preventDefault();

//     if (email.value === '') {
//         email.style.borderColor = 'red';
//     }
//     else if (pswd.value === '') {
//         pswd.style.borderColor = 'red';
//     }
//     let obj = {
//         'Email': email.value,
//         'password': pswd.value
//     }

//     if (email.value != '' && pswd.value != '') {
//         try {
//             // for integration to the backend database
//             const response = await fetch(`http://localhost:8080/fetchAllBloodGroup`, {
//                 method: 'GET',
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 // body: JSON.stringify(obj),
//             });

//             let x = await response.json();
//             console.log(x.data.firstName);
//             console.log(obj.Email);
//             console.log(obj.password);
//             if (x.status === 302) {
//                 // window.localStorage.setItem('admin_id', x.data.id);
//                 // window.localStorage.setItem('admin_name', x.data.name);
//                 window.alert("helo" + " 😎😎");
//                 console.log(x);

//                 window.open(URL = "http://127.0.0.1:5501/project/html/dum.html", "_blank");
//             }
//             else if (response.status === 400 && response.status === 404) {
//                 window.alert("Please enter the correct EMAIL Id and PASSWORD...");
//             }
//             else {
//                 window.alert(x.message + " 😮😮😮");
//             }

//         } catch (error) {
//             window.alert('Error occured when we try to login... please check connection');
//         }
//     }
//     else {
//         window.alert("Field is empty...");
//     }


// }, false);

let submit = document.getElementsByClassName("submit");
console.log(submit);

submit[0].addEventListener("click", async (e) => {
    console.log(e.target);
    e.preventDefault()
    let email_input = document.getElementById("email").value.trim();
    let password_input = document.getElementById("password").value.trim();

    if (email_input != '' && password_input != '') {
        try {
            let response = await fetch(
                `http://localhost:8080/login?email=${email_input}&password=${password_input}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "Application/json",
                    },
                }
            )
            let x = await response.clone().json();
            if (x.status === 302) {
                window.location.href = "http://127.0.0.1:5501/project/html/usermain.html";
                localStorage.setItem('email', email_input)
                localStorage.setItem('password', password_input)
                return response.json();
            }
            else if (response.status === 400 && response.status === 404) {
                window.alert("Please enter the correct EMAIL Id and PASSWORD...");
            }
            else {
                window.alert(x.message + "😒😒😒");
            }
            //     .then(async (response) => {
            //     console.log(response.status);
            //     let x = await response.json();
            //     if (x.status === 302) {
            //         return response.json();
            //     } else {
            //         alert(x.message + "😒😒😒")
            //         return;
            //     }
            // })
            //     .then((data) => {
            //         alert("login succesfullll....");
            //         console.log(data.message);
            //     })
            //     .catch((error) => {
            //         alert("invalid user name or password....");
            //     });
        } catch (error) {
            alert("invalid user name or password....");

        }
    } else {
        alert("All fields are required")
    }
});