import { useEffect } from 'react';
import React from 'react'
import { gsap } from "gsap";


function Password() {
    useEffect(() => {
        session();
    }, []); 

    function login() {
        let pass = document.getElementById('text').value;
        document.getElementById('text').value = ""
        if (pass === 'admin@123') {
            document.getElementById('head').style.backgroundColor = '#f87171'
            localStorage.setItem("pass",pass);
            gsap.to('#login',{
                height: 0,
                duration:0.8
            })

        }
    }

     function session() {
        if (localStorage.getItem("pass") === "admin@123") {
            const loginElement = document.getElementById('login');
            if (loginElement) {
                loginElement.style.display = "none";
                document.getElementById('head').style.backgroundColor = '#f87171'
            }
        }
    }



    let i = 0; // Initialize the index for unique button IDs

function generate() {
    let usrname = "";
    let usrpass = "";
    usrname = prompt("Enter your username");
    usrpass = prompt("Enter your password");
    
    if (usrname && usrpass) {
        // Create an object to represent the credentials
        let passwords = localStorage.getItem("credentials");

        // Store the credentials in local storage with a unique key
        if (passwords == null) {
            let password = []
            password.push({ "username": usrname, "password": usrpass });
            localStorage.setItem("credentials", JSON.stringify(password))
            alert("First Credentials Added")
        }
        else {
            let cred = JSON.parse(localStorage.getItem("credentials"))
            cred.push({ "username": usrname, "password": usrpass });
            localStorage.setItem("credentials", JSON.stringify(cred))
            alert("Credentials Added")
        }

        // Create the table row and display the data
        let row = document.createElement("tr");
        row.style.border = "1px solid #172554";
        row.style.textAlign = "center";
        
        let data1 = document.createElement("td");
        data1.style.border = "1px solid #172554";
        let data2 = document.createElement("td");
        data2.style.border = "1px solid #172554";
        let data3 = document.createElement("td");
        data3.style.border = "1px solid #172554";
        
        let del = document.createElement("button");
        del.textContent = "Delete";
        del.style.backgroundColor = "#172554";
        del.style.color = "#fff";
        del.style.padding = "0rem 1rem";
        del.style.margin = "0.2rem 1rem";
        del.style.borderRadius = "0.3rem";
        del.addEventListener("click", deleteCredentials);
        del.setAttribute('id', i++);
        
        data3.appendChild(del);
        data1.innerHTML = usrname;
        data2.innerHTML = usrpass;
        
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);

        document.querySelector('#table').appendChild(row);
    } else {
        alert("Please enter both username and password.");
    }
}

// Function to delete credentials from both the table and local storage
function deleteCredentials(e) {
    localStorage.removeItem(`credential_${e.target.id}`);
    
    // Remove the row from the table
    let row = e.target.parentNode.parentNode;
        row.style.display = "none"
}

    function logout(){
        localStorage.removeItem("pass");
        const loginElement = document.getElementById('login');
        loginElement.style.display = "block";
        loginElement.style.height = "100vh";
        document.getElementById('head').style.backgroundColor = '#06b6d4'
        
    }

    return (
        <>

            <div className="main flex flex-col items-center justify-center">
                <div id='head' className='absolute z-50 top-0 bg-cyan-500 flex items-center justify-center mt-10'>

                    <h1 className=" text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 sm:text-3xl lg:text-5xl">Welcome to <mark className="px-6 text-black bg-lime-400 rounded">Vault</mark> - Password Manager</h1>

                </div>

                <div className=" relative password flex flex-col items-center justify-center h-screen w-screen bg-red-400">
                    <table className='my-2' id='table' style={
                        { border: "1px solid #172554" }}>
                        <tr style={{ border: "1px solid #172554" }}>
                            <th className='px-4 sm:px-16' style={{ border: "1px solid #172554" }}>Username</th>
                            <th className='px-3 sm:px-16' style={{ border: "1px solid #172554" }}>Password</th>
                            <th className='px-2 sm:px-16'>Action</th>
                        </tr>
                    </table>
                    <button className='border-2 border-gray-800 bg-lime-400 px-3 py-2 my-4' onClick={generate}>Add Credentials</button>
                    <div className="footer absolute bottom-0 right-0 p-4 pr-4">
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>

                <h1 id="login" className="login_body absolute overflow-hidden flex items-center justify-center gap-6 flex-wrap bottom-0 h-[100vh] w-screen ">
                    <div id="test1" className={` card bg-cyan-500 flex items-center justify-center h-[100vh] w-screen`}>
                        <textarea className='px-4 py-2 rounded-lg resize-none' name="password" id="text" cols="17" rows="1" placeholder='Enter Password'></textarea>
                        <button className="mx-2 px-4 py-2 bg-white rounded-lg" onClick={login}>Login</button>

                    </div>
                    
                </h1>
            </div>

        </>
    )
}

export default Password
