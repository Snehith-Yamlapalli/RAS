"use client";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from '../Login/firebase'
import { setDoc, doc } from "firebase/firestore"
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react"

const Register = () => {
    const router = useRouter();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser
            if (user) {
                await setDoc(doc(db, 'Users', user.uid), {
                    UserEmail: email,
                    UserFirstName: fname,
                    UserLastName: lname,
                })
                alert("You can Now Login with your ccredidentials")
                router.push("/Login");
            }
        } catch (error) {
            alert(error.message)
            console.log(error.message)
        }
    }


    return (
        <>
            <Header />
            <form onSubmit={handleRegister} className="container">
                <div className='shadow-lg p-4 mb-3 rounded col-md-4 mx-auto' style={{ backgroundColor: 'rgb(182, 172, 171)', marginTop: '80px' }}>
                    <h1>Sign Up</h1>
                    <div className='mb-3'>
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" value={fname} onChange={(e) => { setfname(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" value={lname} onChange={(e) => { setlname(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </form>
            <Footer />
        </>

    )
}
export default Register
