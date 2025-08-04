import { FaAngleUp, FaArrowUp } from 'react-icons/fa'
import '../styles/styles.css'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false)


    useEffect(() => {
        const scroll = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        scroll()

        document.addEventListener('scroll', scroll)
        return () => document.removeEventListener('scroll', scroll)
    }, [])

    const handle = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        }
        )
    }

    return (
        <>{visible &&
            (<button className='scroll' onClick={handle}>
                <div className="scroll_relative">
                    <FaAngleUp className='scroll_arrow' />
                    <FaAngleUp className='scroll_arrow2' />
                    {/* <FaArrowUp className='scroll_arrow'/> */}
                    <FaArrowUp className='scroll_icon' />
                </div>
            </button>)}
        </>
    )
}

export default ScrollToTop