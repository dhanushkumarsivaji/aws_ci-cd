import React ,{useContext,useEffect}from 'react';
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../context/auth/authContext'
import Quotes from './Quotes' 
const Home = () => {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser()
        //eslint-disable-next-line
    },[])

    return(
        <div>
        <div className='grid-2 container'>
            <div>
                <ContactForm/>
            </div>
            <div>
                <ContactFilter/>
                <Contacts/>
            </div>
        </div>
            <Quotes/>
        </div>
    )
}

export default Home;