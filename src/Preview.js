import React from 'react'
import './Preview.css';
import {useSelector} from 'react-redux';
import {selectCameraImage} from './features/cameraSlice';

function Preview() {
    const cameraImage = useSelector(selectCameraImage);

    return (
        <div className="preview">
            <h2>preview</h2>
            <img src={cameraImage} alt=''/>        
        </div>
    )
}

export default Preview;
