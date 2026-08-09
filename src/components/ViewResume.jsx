import { HiArrowUpRight } from "react-icons/hi2"

const ViewResume = () => {
  return (
    <a
        href="/Saqlain-Kazi-Resume.pdf" 
        className="btn bg-[var(--accent)] text-white border-[var(--accent)] inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
    >
        
        View Resume
        <HiArrowUpRight />
    </a>
  )
}

export default ViewResume