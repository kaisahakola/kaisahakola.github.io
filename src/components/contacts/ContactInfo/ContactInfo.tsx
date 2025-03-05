import ArrowItem from "../../shared/ArrowItems/ArrowItem";
import './ContactInfo.scss';
import Link from "../../shared/Link/Link";

interface ContactInfoProps {
    email: string;
    github: string;
    linkedIn: string;
}

const Contacts = (props: ContactInfoProps) => {
  const { email, github, linkedIn } = props;
  return (
    <div className='wrapper-contact-info'>
        <div className="contact-info">
            <ArrowItem title="Email: " />
            <p className="email">{email}</p>
        </div>
        <div className="contact-info">
            <ArrowItem title="GitHub: " /> 
            <div className="space">
                <Link text={github} url={`https://${github}`} />
            </div>
        </div>
        <div className="contact-info">
            <ArrowItem title="LinkedIn: " />
            <div className="space">
                <Link text={linkedIn} url={`https://${linkedIn}`} />
            </div>
        </div>
    </div>
  );
};

export default Contacts;
