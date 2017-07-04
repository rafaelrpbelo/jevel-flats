import React, { Component } from 'react';
import Settings from '../settings';

const { form_post_alias } = Settings;

class ContactForm extends Component {
  render() {
    return (
      <form action={`https://formpost.co/mail/${form_post_alias}`} method="post">
        <input type="text" name="trapit" value="" style={{display: 'none'}} />

        <div className="field">
          <label className="label">Nome</label>

          <p className="control">
            <input className="input" type="text" placeholder="Text input" />
          </p>
        </div>

        <div className="field">
          <label className="label">Email</label>

          <p className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="text" placeholder="Email input" />

            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>

            <span className="icon is-small is-right">
              <i className="fa fa-warning"></i>
            </span>
          </p>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Mensagem</label>

          <p className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </p>
        </div>

        <div className="field is-grouped">
          <p className="control">
            <input type="submit" className="button is-primary" value="Enviar" />
          </p>
        </div>
      </form>
    );
  }
}

export default ContactForm;
