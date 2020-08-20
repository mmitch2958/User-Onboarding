import React, { useState} from 'react'


const OBForm = (props) => {
    const [user, setUser] = useState({
        id: Date.now(),
        name: '',
        email: '',
        pass: '',
        terms: true,
    });
    const [buttonDisabled, setButtonDisabled] = useState(true)

    function dataChange(e) {
        console.log('what is target.value', e);
        setUser({ ...user, [e.target.name]: e.target.type==='checkbox' ? e.target.checked: e.target.value});
    
    };
     
    

    const submitForm = e => {
        e.preventDefault();
        console.log('Form Submitted')
       
        props.setNewValue(user)
        setUser({id:{Date}, name: "", email: "", pass: "", terms: true})
    }

    return (
        <form onSubmit={submitForm}>
            <lable htmlFor='id'>
                ID
            <input
                type= {Number}
                name='id'
                placeholder='ID'
                value={user.id}
                onChange={dataChange}
                />
            </lable>
            <lable htmlFor='name'>
                Name
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={user.name}
                onChange={dataChange}
                />
            </lable>
            <lable htmlFor='email'>
                Email
            <input
                type='text'
                name='email'
                placeholder='Website'
                value={user.email}
                onChange={dataChange}
                />
            </lable>
            <lable htmlFor='pass'>
                Pass
            <input
                type='text'
                name='pass'
                placeholder='Please Enter Your Password'
                value={user.pass}
                onChange={dataChange}
            />
            </lable>   <lable htmlFor='tos'>
              Terms Of Service
            <input
                    type='checkbox'
                    name='terms'
                    checked={user.terms}
                    onChange={dataChange}
            />
            Terms Of Service
            </lable>
            
            <button type='submit'>Submit</button>
        </form>
    )   

}
export default OBForm;