import React from 'react'
import "./EmotionItem.css"
import { getEmotionImage } from '../util/getEmotionImage'
const EmotionItem = ({ emotionId, emotionName, isSelcted }) => {




    return (
        <div className={`EmotionItem 
        ${isSelcted ? `item_on_${emotionId}` : ""}`
        }>
            <img src={getEmotionImage(emotionId)} alt={emotionName} />
            <div>{emotionName}</div>
        </div>
    )
}

export default EmotionItem