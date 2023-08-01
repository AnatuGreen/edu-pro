import { useRouter } from "next/router";
import courses from "@/data/courses";

function CoursePage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the course with the matching id
  const course = courses.find((course) => course.id === Number(id));

  // If no course is found, return null
  if (!course) {
    return null;
  }

  // Otherwise, return the course details
  return (
    <main className="flex w-full bg-white min-h-screen flex-col items-center p-24" >
        <div className=" h-96 w-full bg-slate-600 p-5 relative bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${course.image})`}}>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
            <h1 className='text-transparent text-center
            text-9xl mt-10 font-black bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text'>{course.name}</h1>
        </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        </div>
        <div className="w-[90%] p-5 bg-slate-100 rounded-md -mt-10 z-10">
            <p className="text-black">{course.detail}</p>
            <p className="text-black font-bold">Instructor: {course.instructor}</p>
            <p className="text-black font-bold">Students enrolled: {course.students}</p>
        </div>

    </main>
  );
}

export default CoursePage;
