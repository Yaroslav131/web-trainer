import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SlideBlock from './SlideBlock/SlideBlock';
import taskImg from "../../../imgs/screens/taskScreen.png"
import answerImg from "../../../imgs/screens/answerScreen.png"
import cssBlockImg from "../../../imgs/screens/cssBlockScreen.png"
import htmlBlockImg from "../../../imgs/screens/htmlBlockScreen.png"
import resoultBlockImg from "../../../imgs/screens/resoultBlockScreen.png"
import correctAnswerImg from "../../../imgs/screens/correctAnswerScreen.png"
import wrongAnswerImg from "../../../imgs/screens/wrongAnswerScreen.png"
import submitImg from "../../../imgs/screens/submitScreen.png"
import hintImg from "../../../imgs/screens/hintScreen.png"
import helpImg from "../../../imgs/screens/helpScreen.png"
import navImg from "../../../imgs/screens/navScreen.png"
import listImg from "../../../imgs/screens/listScreen.png"
import navToExScreenImg from "../../../imgs/screens/navToExScreen.png"
import resetImg from "../../../imgs/screens/resetScreen.png"

export default function SlideCarousel() {

    // function loadImg(name: string) {
    //     return require(`../../../imgs/screens/${name}.png`)
    // }

    return (
        <Carousel>
            <SlideBlock text={"Для каждого задания выводится текст с задачей для выполнения."} slideImg={taskImg} />
            <SlideBlock text={"Для каждого задания есть пояснения с дополнительной информациеей и примерами"} slideImg={hintImg} />
            <SlideBlock text={"Ответ на задачу вводится в поле привиденное ниже."} slideImg={answerImg} />
            <SlideBlock text={"При введении значений мы изменяем стиль background-color для тегов находищихся в HTML коде."} slideImg={cssBlockImg} />
            <SlideBlock text={"HTML код для которогомы применяем CSS стили."} slideImg={htmlBlockImg} />
            <SlideBlock text={"Результат применения стилей отбражается в окне приведенном ниже."} slideImg={resoultBlockImg} />
            <SlideBlock text={"Для отправки ответа нажмите на кнопку или Enter."} slideImg={submitImg} />
            <SlideBlock text={"Если возникли проблемы или вопросы с выполнением задания, нажмите на кнопк подсказки."} slideImg={helpImg} />
            <SlideBlock text={"При правильном ответе на задание тренажер отреагирует следуйщим образом."} slideImg={correctAnswerImg} />
            <SlideBlock text={"При не правильном ответе на задание тренажер отреагирует следуйщим образом."} slideImg={wrongAnswerImg} />
            <SlideBlock text={"Для навигации по задниям используются две кнопке."} slideImg={navImg} />
            <SlideBlock text={"Для перехода к списку заданий используется следующая кнопка."} slideImg={listImg} />
            <SlideBlock text={"Для навигации по задания может осуществлятся нажатием на них в списке."} slideImg={navToExScreenImg} />
            <SlideBlock text={"Для сброса прогресса используется следующая кнопка."} slideImg={resetImg} />
        </Carousel>
    );
}