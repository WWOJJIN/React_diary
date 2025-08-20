import React, { useState } from 'react'
import "./Editor.css"
import Button from './Button'
import EmotionItem from './EmotionItem'

const emotionList = [
    { emotionId: 1, emotionName: "완전 좋음" },
    { emotionId: 2, emotionName: "좋음" },
    { emotionId: 3, emotionName: "그럭저럭" },
    { emotionId: 4, emotionName: "나쁨" },
    { emotionId: 5, emotionName: "끔찍함" },
];

const Editor = () => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        emootionId: 3,
        content: ""
    })
    // const emotionId = 1
    const onChangeInput = (e) => {
        let name = e.target.name;
        letvalue = e.target.value
        if (name === 'createdDate') {
            value = new Date(value)
        }
        setInput({
            ...input,
            [name]: value
        })
    }

    const onSubmitButtonClick = () => {

    }

    return (
        <div className='Editor'>
            <section className="date-section">
                <h4>오늘의 날짜</h4>
                <input type="date" name="" id="" />
            </section>
            <section className="emotion-section">
                {emotionList.map((item) => (
                    <EmotionItem
                        key={item.emotionId}
                        {...item}
                        isSelected={item.emotionId == emotionId}
                    />

                ))}


            </section>

            <section className="content-section">
                <h4>오늘의 일기</h4>
                <textarea placeholder='오늘은 어땠나요?'></textarea>
            </section>
            <section className="button-section">
                <Button text={"취소하기"} />
                <Button text={"작성완료"} type={'POSITIVE'} />
            </section>
        </div >
    )
}

export default Editor