import React from 'react'
import { gsap } from "gsap";


function Password() {
    function test() {
        let pass = document.getElementById('text').value;
        console.log(pass);
        if (pass === '111') {
            document.getElementById('head').style.backgroundColor = '#f87171'

            gsap.to('#test',{
                height: 0,
                duration:0.8
            })

        }
    }

    function checkelem(e) {
        let row = e.target.parentNode.parentNode;
        row.style.display = "none"
    }
    let i = 1;
    function generate() {
        let usrname = ""
        let usrpass = ""
        usrname = prompt("Enter your username")
        usrpass = prompt("Enter your password")
        let row = document.createElement("tr");
        row.style.border = "1px solid #172554"
        row.style.textAlign = "center"
        let data1 = document.createElement("td");
        data1.style.border = "1px solid #172554"
        let data2 = document.createElement("td");
        data2.style.border = "1px solid #172554"
        let data3 = document.createElement("td");
        data2.style.border = "1px solid #172554"
        let del = document.createElement("button")
        del.textContent = "Delete"
        del.style.backgroundColor = "#172554"
        del.style.color = "#fff"
        del.style.padding = "0rem 1rem"
        del.style.margin = "0.2rem 1rem"
        del.style.borderRadius = "0.3rem"
        del.addEventListener("click", checkelem);
        del.setAttribute('id', i++)
        data3.appendChild(del)
        data1.innerHTML = usrname
        data2.innerHTML = usrpass
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);

        document.querySelector('#table').appendChild(row)

    }

    return (
        <>


            <div className="main flex flex-col items-center justify-center">
                <div id='head' className='absolute z-50 top-0 bg-cyan-500 flex items-center justify-center mt-10'>

                    <h1 className=" text-3xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-5xl">Welcome to <mark className="px-6 text-black bg-lime-400 rounded">Vault</mark> - Password Manager</h1>

                </div>

                <div className="relative password flex flex-col items-center justify-center h-screen w-screen bg-red-400">
                    <table className='my-2' id='table' style={
                        { border: "1px solid #172554" }}>
                        <tr style={{ border: "1px solid #172554" }}>
                            <th className='px-16' style={{ border: "1px solid #172554" }}>Username</th>
                            <th className='px-16' style={{ border: "1px solid #172554" }}>Password</th>
                            <th className='px-8'>Action</th>
                        </tr>
                    </table>
                    <button className='border-2 border-gray-800 bg-lime-400 px-3 py-2 my-4' onClick={generate}>Add Credentials</button>
                </div>

                <h1 id="test" className="absolute overflow-hidden flex items-center justify-center gap-6 flex-wrap bottom-0 h-[100vh] w-screen ">
                    <div id="test1" className={` card bg-cyan-500 flex items-center justify-center h-[100vh] w-screen`}>
                        <textarea className='px-4 py-2 rounded-lg resize-none' name="password" id="text" cols="17" rows="1" placeholder='Enter Password'></textarea>
                        <button className="mx-2 px-4 py-2 bg-white rounded-lg" onClick={test}>Login</button>
                    </div>
                </h1>
            </div>

        </>
    )
}

export default Password
