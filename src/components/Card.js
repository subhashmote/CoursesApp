import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import { CiHeart } from "react-icons/ci";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;


  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // Matlab pehle se like hua pada hai 
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    }
    else {
      // pehle se like nahi hai
      // toh muzhe ye course insert karna hai ye vala corse liked courses mai

      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else {
        // non empty
        setLikedCourses((prev) => [...prev], course.id);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className='w-[300px] bg-black rounded-md overflow-hidden bg-opacity-80'>
      <div className='relative'>
        <img src={course.image.url} />

        <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center absolute right-2 bottom-1'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ?
                (<FaHeart fontSize={'1.25rem'} />) :
                (<CiHeart fontSize={'1.25rem'} />)
            }
          </button>
        </div>
      </div>



      <div className='p-4'>
        <p className='text-white leading-6 font-semibold text-lg'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.length > 100 ?
              (course.description.slice(0, 100) + "....") :
              (course.description)
          }
        </p>
      </div>
    </div>
  )
}



export default Card;