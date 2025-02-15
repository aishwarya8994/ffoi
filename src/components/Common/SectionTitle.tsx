const SectionTitle = ({
  title,
  paragraph,
  width = "100%",
  center,
  mb = "50px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="wow fadeInUp  text-2xl md:text-4xl lg:text-5xl font-bold !leading-tight text-[#333333]  sm:text-4xl md:text-[45px]" data-wow-delay=".15s">
          {title}
        </h2>
        <p className="text-lg !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
