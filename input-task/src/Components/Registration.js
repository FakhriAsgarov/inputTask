import React, { Component } from 'react'
import './registration.css'
export default class Registration extends Component {
    state={
        name:'',
        passport:'',
        gender:'Male',
        age:'',
        email:'',
        phone:'',
        symptoms:'',
        accept:false

    }
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value}) 
}
 handleClick=(e)=>{
    e.preventDefault();
console.log('xeste qeydiyatdan kecdi')
console.log(this.state)
} 
handleAccept=(e)=>{
    this.setState({[e.target.name]:e.target.checked})
}

  render() {
    return (
      <div>
        <form >
<label htmlFor='name'>
    Name Surname: <input type="text" id='name' name="name" onChange={this.handleChange} required/>
</label>
<label htmlFor='passport'>
    Passport Serial Number:
    <input type="text" id='passport' name="passport" onChange={this.handleChange} required/>
</label>
<label htmlFor='gender'>
    Gender:
    <select id='gender' name="gender"  onChange={this.handleChange} >
        <option value='Male'>
            Male
        </option>
          <option value='Female'>
            Female
        </option>
    </select>
</label>

<label htmlFor='age'>
    Age:
    <input type="number" id='age' name="age"  onChange={this.handleChange} />
</label>

<label htmlFor='email'>
    E-mail
    <input type="email" id='email' name="email"  onChange={this.handleChange}/>
</label>
<label htmlFor='phone'>
    Phone Number:
    <input type="tel" id='phone' name="phone"  onChange={this.handleChange} />
</label>
<label htmlFor='symptoms'>
    Symptoms:
  <textarea id='syptoms' name="symptoms"  onChange={this.handleChange} >

  </textarea>
</label>
<label htmlFor='accept'>
    Reaccept:
    <input type="checkbox" id='accept' name="accept"  onChange={this.handleAccept}/>
</label>

<button type="submit" className="btn" onClick={this.handleClick}>
    Submit
</button>
</form>
 </div>
    )
  }
}
