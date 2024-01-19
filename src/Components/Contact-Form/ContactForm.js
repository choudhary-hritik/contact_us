import Buttons from "../Buttons/Buttons";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./ContactForm.module.css";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<MdMessage font-size="24px" />}
          />
          <Buttons text="VIA CALL" icon={<FaPhoneAlt font-size="24px" />} />
        </div>
        <Buttons
          isSecondary={true}
          text="VIA EMAIL FORM"
          icon={<MdMessage font-size="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">E-Mail</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea type="text" rows="8" />
          </div>
          <div className={styles.submit_btn}>
            <Buttons text="SUBMIT" />
          </div>
        </form>
        <div>{name + " " + email + " " + text + " "}</div>
      </div>
      <div className={styles.contact_logo}>
        <img src="./Service.png" alt="service-logo" />
      </div>
    </div>
  );
}
