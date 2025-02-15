import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full p-4 shadow-md h-[290px]">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary transition duration-500 ease-in-out transform hover:rotate-90">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-lg font-medium leading-relaxed text-gray-400">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
