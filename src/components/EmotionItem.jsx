import React from 'react'
import "./EmotionItem.css"
import { getEmotionImage } from '../util/getEmotionImage'
const EmotionItem = ({ emotionId, emotionName }) => {




    return (
        <div className='EmotionItem'>
            <img src={getEmotionImage(emotionId)} alt={emotionName} />
            <div>{emotionName}</div>
        </div>
    )
}

export default EmotionItem