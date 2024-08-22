import React from 'react';

const Modal = ({component}) => {
    return (
        <div className="modal">
            <div className='modal-content'>
                {component}
            </div>
        </div>
    )
}


export default Modal