import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow text-lg">
        {starIcon}
      </span>,
    );
  }

  return (
    <div data-aos="fade-down" className="w-full">
      <div className=" border-b-8 border-primary bg-white p-6 lg:p-8 shadow-two duration-300 hover:shadow-one  lg:px-5 xl:px-8 h-[350px] lg:h-[400px]">
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b-2 border-primary  pb-5 text-[15px] lg:text-base font-medium leading-relaxed text-body-color">
          “{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 ">
            <Image src={image} alt={name}  className="w-[100px] lg:w-[200px] h-[100px] lg:h-[150px] object-cover" 
             width={150}
             height={150}
           />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark lg:text-base xl:text-lg">
              {name}
            </h3>
            {/* <p className="text-sm text-body-color">{designation}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
