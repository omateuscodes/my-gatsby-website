import React from "react";
import MyFormStyles from './MyForm.module.scss'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className={MyFormStyles.container}>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xoqkloqk"
          method="POST"
        >
          <div className={MyFormStyles.group}>
            <input type="email" required name="email"/>
            <span className={MyFormStyles.highlight}></span>
            <span className={MyFormStyles.bar}></span>
            <label>Email</label>
          </div>

          <div className={MyFormStyles.group}>
            <input type="text" required name="message" />
            <span className={MyFormStyles.highlight}></span>
            <span className={MyFormStyles.bar}></span>
            <label>Message</label>
          </div>

          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>

    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}