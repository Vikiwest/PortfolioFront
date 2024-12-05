import resumeFile from '../../File/Olorunda Victory Resume.pdf';
import { FaDownload } from "react-icons/fa6";


function Resumebtn() {
  return (
    <div className='flex'>
      <a href={resumeFile} target='_blank'  rel="noopener noreferrer">
        <button className='flex bg-brandyellow p-2 w-28 items-center gap-3  rounded-lg text-lg'><FaDownload color='#fff' />Resume</button>
      </a>

{/* <a href={resumeFile} download>
        <button className='flex bg-brandyellow p-2 w-28 items-center gap-3  rounded-lg text-lg'><FaDownload color='#fff' />Download Resume</button>
      </a> */}

      </div>
  )
}

export default Resumebtn
