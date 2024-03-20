import Container from "../../ui/Container";
import img from "../../assets/images/community.webp";
import CommunityReport from "./CommunityReport";
import ProgressBar from "./ProgressBar";
import DontateCard from "./DontateCard";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddCommentMutation, useGetCommentsQuery } from "../../redux/feature/comments/commentApi";
import { toast } from "sonner";
import { TCommunity } from "../../type/type";


const Community = () => {
  const { register, handleSubmit,reset } = useForm()
  const [addComment,{isSuccess}] = useAddCommentMutation()
  const {data:commentsData, isLoading} = useGetCommentsQuery(undefined)
if(isLoading){
  return <p>Loading.......</p>
}

  const onSubmit: SubmitHandler<FieldValues> = async (data) =>{
    const commentData = {
      comment: data.comment
    }
    if(isSuccess){
      toast.success('Your comment has been successful! ')
      reset()
    }
  addComment(commentData)

  } 

  return (
    <div className="mb-14">
      <Container className="mt-8">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-9">
            <img
              className="w-full h-[400px] object-cover "
              src={img}
              alt="donors image"
            />
            <div className="mt-10">
              <CommunityReport />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 ">
            <div className="shadow-md px-3 py-5 ">
              <div className="flex items-center">
                <h4 className="text-xl font-semibold mr-2 text-[#00715D]">
                  $1,873,660
                </h4>
                <p> raised of $5,000,000</p>
              </div>
              <ProgressBar />
              <div className="flex items-center justify-between mt-3 ">
                <b>5,157 donations</b>
                <p>$3,126,340 to go</p>
              </div>
            </div>
            <DontateCard />
          </div>
        </div>
        <div className="mt-10">
          <h3>What Our Users Say </h3>
         {
          commentsData?.map((data:TCommunity)=>(
            <div key={data._id} className="my-5">
            <p>
              {data.comment}
            </p>
          </div>

          ))
         }
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
            <textarea
            {...register("comment")}
              placeholder="Expressing Your Gratitude"
              name="comment"
              className="w-full lg:max-w-[80%] border h-[170px] border-[#ddd] resize-none"
            ></textarea><br />
            <button type="submit" className="bg-[#00715D] w-[200px] mt-3 py-3 text-white">Give Your Feedback</button>
          </form>
         
        </div>
      </Container>
    </div>
  );
};


export default Community;
