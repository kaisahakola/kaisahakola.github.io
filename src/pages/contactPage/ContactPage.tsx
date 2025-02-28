import SecondaryHeader from '../../components/secondaryHeader/SecondaryHeader';
import Contacts from '../../components/contactInfo/ContactInfo';
import { ContactInfo } from '../../shared/const/ContactInfo';
import './ContactPage.scss';

interface Props {
    title: string;
}

const ContactsPage = ({ title }: Props) => {

    return(
        <div className="wrapper-contacts-page">
            <SecondaryHeader title={title}/>
            <Contacts email={ContactInfo.email} github={ContactInfo.github} linkedIn={ContactInfo.linkedIn} />
        </div>
    )
}

export default ContactsPage