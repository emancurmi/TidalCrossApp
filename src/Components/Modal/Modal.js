import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    render() {
        return (
            <div className='modal'>
                <div className='modal_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closeModal}>close me</button>
                </div>
            </div>
        );
    }
}

export default Modal;