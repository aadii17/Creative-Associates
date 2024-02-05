import React, { useContext, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { yPosContext } from '../context/global-state';
import '../styles/scroll_to_top.css';

function ScrolltoTop() {
    const { yPos } = useContext(yPosContext);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        yPos === 0 ? setShowButton(false) : setShowButton(true);
    }, [yPos]);

    return (
        <div
            className={showButton ? "scrolltop show" : "scrolltop hide"}
            role="button"
            onClick={() => window.scrollTo(0, 0)}
        >
            <FaArrowUp className={showButton ? "icon show" : "icon hide"}></FaArrowUp>
        </div>
    );
}

export default ScrolltoTop;
