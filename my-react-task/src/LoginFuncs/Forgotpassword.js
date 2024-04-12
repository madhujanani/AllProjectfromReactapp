import React,{ useState } from 'react'



const Forgotpassword = () => {
    const initialValues = { email: ""}
const [formValues, setFormValues] = useState(initialValues);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
};

 const handleSubmit=(e)=>{
    e.preventDefault();
}
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="ui divider"></div>
                <div className="ui form">
                    <h2 style={{textAlign:'center'}}>Forgot password</h2>
                    <div className="field" style={{width:200}}>
                        <label></label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter email address"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <button className="fluid ui button red">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Forgotpassword