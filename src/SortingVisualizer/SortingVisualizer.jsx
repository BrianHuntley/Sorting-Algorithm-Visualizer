import React from 'react';
import './SortingVisualizer.css';
import '../SortingAlgorithms/BubbleSort.js';
import {insertionSortAnimation} from '../SortingAlgorithms/InsertionSort.js';
import {mergeSortAnimation} from '../SortingAlgorithms/MergeSort.js';
import {bubbleSortAnimation} from '../SortingAlgorithms/BubbleSort.js';
import {quickSortAnimation} from '../SortingAlgorithms/QuickSort.js';

//Browser width & height determine how many values we can display and how tall
//32px width per bar
let NUMBER_OF_BARS = Math.floor(window.innerWidth / 32);
let PADDING = (window.innerWidth % 32)/2;
let MAX_HEIGHT = window.innerHeight - 80;
let ANIMATION_SPEED = 20;
let BAR_COLOR = "#588c7e";
let COMPARE_COLOR = "red";
let DISABLE_COLOR = "gray";
let ENABLE_COLOR = "#ffcc5c"

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    insertionSort(){
        this.disableButtons();
        const animations = insertionSortAnimation(this.state.array);
        for(let i = 0; i < animations.length; ++i){
            const colorChange = (animations[i][0] === "firstCompare") || (animations[i][0] === "secondCompare");
            const arrayBars = document.getElementsByClassName('arrayBar');
            if(colorChange){
                const barOneIndex = animations[i][1];
                const barTwoIndex = animations[i][2];
                const color = (animations[i][0] === "firstCompare") ? COMPARE_COLOR : BAR_COLOR;
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i+1 === animations.length){
                        this.enableButtons();
                    }
                },i * ANIMATION_SPEED);
            }
            else{
                const barOneIdx = animations[i][1];
                const newHeight = animations[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() =>{
                barOneStyle.height = `${newHeight}px`;
                if(i+1 === animations.length){
                    this.enableButtons();
                }
                },i * ANIMATION_SPEED);
            }
        }
    }

    bubbleSort(){
        this.disableButtons();
        const animations = bubbleSortAnimation(this.state.array);
        for (let i = 0; i < animations.length; ++i) {
            const colorChange = (animations[i][0] === "firstCompare") || (animations[i][0] === "secondCompare");
            const arrayBars = document.getElementsByClassName('arrayBar');
            if(colorChange){
                const barOneIndex = animations[i][1];
                const barTwoIndex = animations[i][2];
                const color = (animations[i][0] === "firstCompare") ? COMPARE_COLOR : BAR_COLOR;
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i+1 === animations.length){
                        this.enableButtons();
                    }
                },i * ANIMATION_SPEED);
                
            }
            else{
                const barOneIdx = animations[i][1];
                const newHeight = animations[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() =>{
                barOneStyle.height = `${newHeight}px`;
                if(i+1 === animations.length){
                    this.enableButtons();
                }
                },i * ANIMATION_SPEED);
            }
        }
    }

    mergeSort(){
        this.disableButtons();
        const animations = mergeSortAnimation(this.state.array);
        for (let i = 0; i < animations.length; ++i) {
            const colorChange = (i % 3 !== 2);
            const arrayBars = document.getElementsByClassName('arrayBar');
            if(colorChange){
                const [barOneIndex, barTwoIndex] = animations[i];
                const color = (i % 3 === 0) ? COMPARE_COLOR : BAR_COLOR;
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i+1 === animations.length){
                        this.enableButtons();
                    }
                },i * ANIMATION_SPEED);
                
            }
            else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    if(i+1 === animations.length){
                        this.enableButtons();
                    }
                  },i * ANIMATION_SPEED);
            }
        }
    }

    quickSort(){
        this.disableButtons();
        const animations = quickSortAnimation(this.state.array);
        for(let i = 0; i < animations.length; ++i){
            const colorChange = (animations[i][0] === "pivot") || (animations[i][0] === "compare");
            const arrayBars = document.getElementsByClassName('arrayBar');
            if(colorChange){
                const barOneIndex = animations[i][1];
                const barTwoIndex = animations[i][2];
                const color = (animations[i][0] === "pivot") ? COMPARE_COLOR : BAR_COLOR;
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i+1 === animations.length){
                        this.enableButtons();
                    }
                },i * ANIMATION_SPEED);
            }
            else{
                const barOneIdx = animations[i][1];
                const newHeight = animations[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() =>{
                barOneStyle.height = `${newHeight}px`;
                if(i+1 === animations.length){
                    this.enableButtons();
                }
                },i * ANIMATION_SPEED);
            }
        }
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < NUMBER_OF_BARS; ++i){
            //Random numbers 1 - MAX_HEIGHT
            array.push(Math.ceil(Math.random() * MAX_HEIGHT));
        }
        this.setState({array});
    }

    disableButtons(){
        document.getElementById("reset").disabled = true;
        document.getElementById("reset").style.backgroundColor = DISABLE_COLOR;
        document.getElementById("insertion").disabled = true;
        document.getElementById("insertion").style.backgroundColor = DISABLE_COLOR;
        document.getElementById("bubble").disabled = true;
        document.getElementById("bubble").style.backgroundColor = DISABLE_COLOR;
        document.getElementById("merge").disabled = true;        
        document.getElementById("merge").style.backgroundColor = DISABLE_COLOR;
        document.getElementById("quick").disabled = true;
        document.getElementById("quick").style.backgroundColor = DISABLE_COLOR;

    }
    enableButtons(){
        document.getElementById("reset").disabled = false;
        document.getElementById("reset").style.backgroundColor = ENABLE_COLOR;
        document.getElementById("insertion").disabled = false;
        document.getElementById("insertion").style.backgroundColor = ENABLE_COLOR;
        document.getElementById("bubble").disabled = false;
        document.getElementById("bubble").style.backgroundColor = ENABLE_COLOR;
        document.getElementById("merge").disabled = false;
        document.getElementById("merge").style.backgroundColor = ENABLE_COLOR;        
        document.getElementById("quick").disabled = false;
        document.getElementById("quick").style.backgroundColor = ENABLE_COLOR;
    }

    render(){
        const {array} = this.state;

        return(
            <div className="arrayContainer" style={{position:'absolute', bottom:`5px`, left: `${PADDING}px`}}>
                {array.map((value, idx) => (
                    <div className="arrayBar" key={idx} style={{height: `${value}px`}}></div>
                ))}
                <div className="buttonContainer" style={{width:`${NUMBER_OF_BARS*32}px`}}>
                        <button id="reset" onClick={() => this.resetArray()}>New Array</button>
                        <button id="insertion" onClick={() => this.insertionSort()}>Insertion Sort</button>
                        <button id="bubble" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                        <button id="merge" onClick={() => this.mergeSort()}>Merge Sort</button>
                        <button id="quick" onClick={() => this.quickSort()}>Quick Sort</button>
                </div>
            </div>
            
        );
    }
}