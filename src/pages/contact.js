import React from "react"
import Layout from "../components/layout"

export default class contact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} - ${this.state.lastName}!`)
  }

  render() {
    return (
        <Layout>
            <form id="contact-form" onSubmit={this.handleSubmit}>
                <label>
                    First name
                    <input
                        type="text"
                        name="firstName"
                        size="40"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Last name
                    <input
                        type="text"
                        name="lastName"
                        size="40"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    E-mail
                    <input
                        type="email"
                        required="required"
                        size="40"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Subject
                    <input
                        type="text"
                        name="subject"
                        size="40"
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Message
                    <textarea
                        type="text"
                        name="message"
                        rows="6"
                        cols="40"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
  }
}