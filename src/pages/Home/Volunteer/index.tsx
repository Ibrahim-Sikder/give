import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../ui/Container";
import volunteer from '../../../assets/images/volunteer.jpg'
import volunteer2 from '../../../assets/images/volunteer2.jpg'
import volunteer3 from '../../../assets/images/volunteer3.jpg'
import volunteer4 from '../../../assets/images/volunteer4.jpg'
import './Volunteer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Volunteer = () => {
    const VolunteerData = [
        {
            id:1,
            name: 'Jasmin Jaquline',
            title: 'Cheif Executive CEO',
            img: volunteer
        },
        {
            id:1,
            name: 'Annie Hawklin',
            title: 'Volunteer',
            img: volunteer2
        },
        {
            id:1,
            name: 'Jothan Manning',
            title: 'Cheif Executive CEO',
            img: volunteer3
        },
        {
            id:1,
            name: 'Mikal Greek',
            title: 'Volunteer',
            img: volunteer4
        },

    ]
    return (
        <div className="my-24">
            <Container className="">
            <SectionTitle title='Meet Our Volunteer' text='Praising pain was born and I will give you a complete accountwill give you a complete account' />
            
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
            {
                VolunteerData?.map((data)=>(
                     <div key={data.id} className="volunteerCard">
                <img src={data.img} alt="" />
                <div className="volunteerContent">
                    <h4 className="text-xl font-semibold">Jothan Manning </h4>
                    <small>Cheif Executive CEO </small>
                    <p>Bangladesh </p>
                    <div className="flex items-center justify-center mt-2 space-x-3">
                        <FaFacebookF/>
                        <FaLinkedinIn/>
                        <FaTwitter/>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
                ))
            }
           </div>
        </Container>
        </div>
    );
};

export default Volunteer;