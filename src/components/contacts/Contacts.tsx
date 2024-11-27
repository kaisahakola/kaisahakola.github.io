import { ContactInfo } from "../../shared/const/ContactInfo";
import Linkdin from "../../assets/icons/linkedIn2.png";
import Github from "../../assets/icons/github.webp";
import Phone from "../../assets/icons/phoneIcon.webp";
import Email from "../../assets/icons/emailIcon.webp";
import cls from "./Contacts.module.scss";

const Contacts = () => {
  const { email, phone, github, linkedIn } = ContactInfo;
  return (
    <div className={cls.Wrapper}>
      <h1>Contact info</h1>
      <div className="Container">
        <img className={cls.Icon} src={Email} alt="Email icon" />
        <p className={cls.Text}>{email}</p>
      </div>
      <div className="Container">
        <img className="Icon" src={Phone} alt="Phone icon" />
        <p className="Text">{phone}</p>
      </div>
      <div className="Container">
        <img className="Icon" src={Github} alt="Github logo" />
        <p className="Text">{github}</p>
      </div>
      <div className="Container">
        <img className="Icon" src={Linkdin} alt="LinkedIn logo" />
        <p className="Text">{linkedIn}</p>
      </div>
    </div>
  );
};

export default Contacts;
