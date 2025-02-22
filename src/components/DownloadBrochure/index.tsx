"use Client";
// components/DownloadBrochure.tsx
import { useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import BrochureFormModal from "@/components/BrochureFormModal";

const DownloadBrochure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloadable, setIsDownloadable] = useState(false);

  return (
    <>
   
    <div>
      {isDownloadable ? (
        // Replaces the "Download Brochure" button with "Click to Download" after submission
        <a
          href="/FFOI-Brochure.pdf" // Make sure this PDF is inside the `public/` folder
          download
          className="flex items-center bg-secondary px-6 py-2 text-white  hover:bg-blue-700"
        >
          <ArrowDownToLine className="mr-2 text-lg text-white" />
          Click to Download
        </a>
      ) : (
        // Show this button before form submission
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex bg-primary px-3 lg:px-6 py-[6px] lg:py-2 text-white rounded hover:bg-[#375210]"
        >
          <ArrowDownToLine className="mr-2 text-lg text-white" />
          <span>Download Brochure</span>
        </button>
      )}

      
    </div>
    {/* Modal Component */}
    <BrochureFormModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        setDownloadable={setIsDownloadable} // Ensures the form submission updates the button
      />
    </>
  );
};

export default DownloadBrochure;
