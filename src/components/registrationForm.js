import React, { Component } from 'react';
import { Input, Button } from 'antd';

export default class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          login: '',
          email: '',
          phone: '',
          password: ''
        };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
      console.log('form submitted login value is', this.state.login);
      console.log('form submitted email value is', this.state.email);
      console.log('form submitted phone value is', this.state.phone);
      console.log('form submitted password value is', this.state.password);  
      }
      
      handleLoginChange(event) {
        console.log('handleLOginChange', this);
        this.setState({login: event.target.value});
      }
      
      handleEmailChange(event) {
        console.log('handleEmailChange', this);
        this.setState({email: event.target.value});
      }
    
      handlePhoneChange(event) {
        console.log('handlePhoneChange', this);
        this.setState({phone: event.target.value});
      }
    
      handlePasswordChange(event) {
        console.log('handlePasswordChange', this);
        this.setState({password: event.target.value});
      }
      
      
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <h2>Пройдите регистрацию, пожалуйста: </h2>
              <label>Login</label>
              <Input type="text" 
                     onChange={this.handleLoginChange} id="inputName" 
                     value={this.state.login}
                     placeholder="Name" 
                     required autofocus />
              <label>Email address</label>
              <Input type="email" 
                     onChange={this.handleEmailChange}
                     value={this.state.email} 
                     id="inputEmail" 
                     placeholder="Email address" 
                     required autofocus />
              <label>Phone</label>
              <Input type="phone" 
                    onChange={this.handlePhoneChange}
                    value={this.state.phone} 
                    id="inputPhone" 
                    placeholder="Phone" 
                    required autofocus />
              <label >Password</label>
              <Input type="password" 
                     onChange={this.handlePasswordChange}
                     value={this.state.password} 
                     id="inputPassword" 
                     placeholder="Password" required />
                                    
              <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
            </form>
          </div>




    
//   render() {
//     return (
//     //   <div>
//     //     <input type="text" placeholder="test" ref={(input) => this.testInput = input} />
//     //     <button onClick={this.submit.bind(this)}>Submit</button>
//     //   </div>
//     <form>
//         <label>Login </label>
//         <Input 
//           type="text"
//           placeholder="login"
//         //   ref={(input) => this.testInput = input}
//           value={this.state.login}
//           onChange={this.handleLoginChange}
//          />
//         <br></br>      
//         <label>Email: </label>
//         <Input 
//           type="email"
//           placeholder="email"
//           value={this.state.email}
//           onChange={this.handleEmailChange}
         
//         />
//         <br></br>

//         <label>Ваш телефон: </label>
//         <Input 
//           type="phone"
//           placeholder="phone"
//           value={this.state.phone}
//           onChange={this.handlePhoneChange}
//         />
//         <br></br>

//         <label>Пароль: </label>
//         <Input 
//           type="password"
//           placeholder="password"
//           value={this.state.password}
//           onChange={this.handlePasswordChange}
//         />
//         <br></br>

//         <label>Повторите пароль: </label>
//         <Input 
//           type="password"
//           placeholder="password"
//           value={this.state.password}
//           onChange={this.handlePasswordChange}
//         />
//         <br></br>


//         {/* <Button type="primary" onClick={this.submit.bind(this)}>Сохранить</Button> */}
//         <Button  type="primary">Сохранить</Button>
//       </form>
    );
  }
}