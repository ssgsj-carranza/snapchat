import React, {useEffect} from 'react'
import './Preview.css';
import {useSelector} from 'react-redux';
import {selectCameraImage} from './features/cameraSlice';
import {useHistory} from 'react-router-dom';

function Preview() {
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();

    useEffect (() => {
        if (!cameraImage) {
            history.replace('/')
        }
    },[cameraImage, history]);

    return (
        <div className="preview">
            <h2>preview</h2>
            <img src={cameraImage} alt=''/>        
        </div>
    )
}

export default Preview;
