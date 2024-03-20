import {
  HiChevronRight,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi"
import Container from '../../../ui/Container'
import SectionTitle from '../../../components/SectionTitle'
import { Link } from 'react-router-dom'
import './Donation.css'
import { useGetDonationsQuery } from "../../../redux/feature/donations/donationApi"

const LatestDonation = () => {
  type TData = {
    _id: string,
    image: string,
    categories: string,
    amount: string,
    title:string,
  }

  const {data:donationsData, isLoading, isError} = useGetDonationsQuery(undefined)

  
    if(isError){
      return <>Something went to wrong </>
    }
    if(isLoading){
      return <>Loading....... </>
    }

  return (
    <Container className='mb-20'>
      <div className="mt-20">
        <SectionTitle
          title="Latest Campaigns"
          text="Praising pain was born and I will give you a complete accountwill give you a complete account"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4 place-items-center justify-center place-content-center lg:px-5   xl:px-0 mt-5">
          {donationsData.map((data:TData) => (
            <div key={data._id} className='donationCard donationsCard2'>
              <div className='imgWrap'>
                <img
                  loading="lazy"
                  src={data.image}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className='donationImg'
                />
              </div>
              <div className='conationContent'>
                <div>
                  <h3 className=" font-bold mb-2 ">{data.title}</h3>
                 <p>{data.categories} </p>
                </div>
            
              </div>
              <div className="flex justify-between pr-3 ">
                <span>Goal $54000</span>
                <b>Raised ${data.amount}</b>
              </div>
              <div>
                <Link to={`/donations/${data._id}`}>
                  <button className='btn text-white mt-3'>
                    <span>View Details </span>
                    <HiOutlineArrowNarrowRight size={18} className="ml-1" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
       <Link to='/donations'>
       <div className="mt-10 flex items-center justify-center">
          <button className='btn text-white px-10 py-3 bg-[#191919]'>See All Donation <HiChevronRight size={20}/> </button>
        </div>
       </Link>
      </div>
    </Container>
  )
}

export default LatestDonation
