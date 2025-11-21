import resumeFile from '../../File/Olorunda Victory Resume.pdf';
import { FaDownload, FaFilePdf } from "react-icons/fa6";

function Resumebtn() {
  const handleDownload = () => {
    // Optional: Add tracking or analytics here
    console.log('Resume download initiated');
  };

  return (
    <div className="flex gap-4">
      {/* Primary Download Button */}
      <a 
        href={resumeFile} 
        download="Olorunda_Victory_Resume.pdf"
        target='_blank'  
        rel="noopener noreferrer"
        onClick={handleDownload}
        className="group relative overflow-hidden"
      >
        <button className='flex items-center gap-3 bg-gradient-to-r from-brandyellow to-orange-500 hover:from-orange-500 hover:to-brandyellow text-black font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brandyellow/25 border-2 border-transparent hover:border-white/20'>
          <FaDownload className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
          <span className="text-lg">Download Resume</span>
        </button>
        
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10"></div>
      </a>

      {/* Secondary View Button */}
      <a 
        href={resumeFile} 
        target='_blank'  
        rel="noopener noreferrer"
        className="group"
      >
        <button className='flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-brandyellow/50 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg hover:shadow-brandyellow/10'>
          <FaFilePdf className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-lg">View PDF</span>
        </button>
      </a>
    </div>
  );
}

export default Resumebtn;