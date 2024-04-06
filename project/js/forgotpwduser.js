
// function forgotpwduser() {
//     var email_input = document.getElementById("email").value;
//     if (email_input != '') {
//         fetch(`http://localhost:8080/otp?email=${email_input}`, {
//             method: "GET", headers: {
//                 'Content-Type': 'Application/json'
//             },
//         })
//             .then(response => response.json())
//             .then(data => {
//                 alert("Form submitted successfully!")
//                 window.location.href = "http://127.0.0.1:5500/html/login.html";
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.log("Error:", error);
//                 alert("An error occured while submitting the form.")
//             })
//         // document.getElementById("registrationform").reset();
//     } else {
//         alert("All fields are required")
//     }

// }

// async function profile() {
//     try {
//         let email = document.getElementById("email").value
//         let response = await fetch(`http://localhost:8080/fetchByEmail?email=${email}`, {
//             method: "GET",
//         });
//         let x = await response.json();
//         if (response.status === 302) {
//             set(x.data);
//         } else if (response.status === 400 || response.status === 404) {
//             throw new Error("Error");
//         } else {
//             window.alert(x.message);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// const set = (e) => {
//     id += e.id;
//     localStorage.setItem("id", e.id);
//     console.log(id);
// }
// let user_id = localStorage.getItem("id")
// profile()

let submit = document.getElementsByClassName("submit");

console.log(submit[0]);
submit[0].addEventListener("click", (e) => {
    console.log(e.target);
    e.preventDefault();
    let email = document.getElementById("email").value.trim()
    if (email != '') {
        fetch(`http://localhost:8080/otp?email=${email}`, {
            method: 'GET',
            headers: {
                "Content-Type": "Application/json"
            }
        })
            .then(response => {
                if (response.status === 302) {
                    console.log(email);
                    return response.json()
                } else {
                    throw new Error("Invalid Email");
                }
            })
            .then(x => {
                alert("OTP sent successful...🙌🙌")
                // localStorage.setItem("otp" + data.data)
                localStorage.setItem('email', email)
                localStorage.setItem('otp', x.data)
                window.location.href = "http://127.0.0.1:5501/project/html/user_otpsent.html";
                console.log(x);
            })
            .catch(error => {
                alert("invalid Email");
            })
    } else {
        alert("All fields are required")
    }
})