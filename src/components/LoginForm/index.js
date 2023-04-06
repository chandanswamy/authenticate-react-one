// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isUsername: false,
    isPassword: false,
    credentials: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderRequired = () => <p className="required-label">Required*</p>

  renderRequiredCredentials = () => {
    const {errorMessage} = this.state

    return <p className="required-label">{errorMessage}</p>
  }

  onBlurUsername = event => {
    if (event.target.value === '') {
      this.setState({isUsername: true})
    } else {
      this.setState({isUsername: false})
    }
  }

  onBlurPassword = event => {
    if (event.target.value === '') {
      this.setState({isPassword: true})
    } else {
      this.setState({isPassword: false})
    }
  }

  renderUsername = () => {
    const {username, isUsername} = this.state

    return (
      <>
        <label htmlFor="username" className="label-input">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-element"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
          onBlur={this.onBlurUsername}
        />
        {isUsername ? this.renderRequired() : null}
      </>
    )
  }

  renderPassword = () => {
    const {password, isPassword} = this.state

    return (
      <>
        <label htmlFor="password" className="label-input">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-element"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
          onBlur={this.onBlurPassword}
        />
        {isPassword ? this.renderRequired() : null}
      </>
    )
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const errorMsg = data.error_msg
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({credentials: true, errorMessage: errorMsg})
    }
  }

  render() {
    const {credentials} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="login-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-mobile-screen"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="website-login-image"
            />
            <form className="login-form" onSubmit={this.submitForm}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="website-logo-desktop-screen"
              />
              <div className="input-container">{this.renderUsername()}</div>
              <div className="input-container">{this.renderPassword()}</div>
              <button type="submit" className="login-button">
                Login
              </button>
              {credentials ? this.renderRequiredCredentials() : null}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
