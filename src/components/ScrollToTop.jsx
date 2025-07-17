import { FaArrowUp } from 'react-icons/fa'
import '../styles/styles.css'

const ScrollToTop = () => {

    const handle = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        }
        )
    }
    return (
        <button className='scroll' onClick={handle}>
            <FaArrowUp className='scroll_icon' />
        </button>
    )
}

export default ScrollToTop