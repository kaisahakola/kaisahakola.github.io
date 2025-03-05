import SecondaryHeader from '../../shared/SecondaryHeader/SecondaryHeader';
import Contacts from '../ContactInfo/ContactInfo';
import { ContactInfo } from '../../../common/const/ContactInfo';
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