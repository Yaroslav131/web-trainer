import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SlideBlock from './SlideBlock/SlideBlock';
import taskImg from "../../../imgs/screens/helptask.png"
import ansImg from "../../../imgs/screens/helptpinput.png"
import inputImg from "../../../imgs/screens/whereinputhelp.png"
import outputImg from "../../../imgs/screens/whereoutputhelp.png"
import correctImg from "../../../imgs/screens/correctAnswer.png"
import helpImg from "../../../imgs/screens/helphelp.png"
import submitImg from "../../../imgs/screens/submithelp.png"
import discrubImg from "../../../imgs/screens/discribehelp.png"
import listImg from "../../../imgs/screens/exListhelp.png"

export default function SlideCarousel(props: any) {

    return (
        <Carousel>

            <SlideBlock text={"Задание для решения выводится в выделеном блоке"} slideImg={taskImg} />
            <SlideBlock text={"Поле для ввода ответа находется в выделеном блоке"} slideImg={ansImg} />
            <SlideBlock text={"Результат выполнения формируется из выделеных полей"} slideImg={inputImg} />
            <SlideBlock text={"Результат выполнения отражается в выделеном поле"} slideImg={outputImg} />
            <SlideBlock text={"Для отправки ответа на задание нажмите Enter или выделеную кнопку"} slideImg={submitImg} />
            <SlideBlock text={"Правитьный отмечается следуйщеей анимацией"} slideImg={correctImg} />
            <SlideBlock text={"Если затрудняетесь с решение задачи, нажите навыеленый блок"} slideImg={helpImg} />
            <SlideBlock text={"Описание и пояснение к задание нахоидтся ввыделеном блоке"} slideImg={discrubImg} />
            <SlideBlock text={"Список всех заданий открывется по нажатию кнопки вправом левом углу, с послдуещеей навигциеей по заданиям"} slideImg={listImg} />
        </Carousel>
    );
}