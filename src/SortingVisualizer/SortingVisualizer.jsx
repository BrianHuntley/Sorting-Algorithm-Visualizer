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
let ANIMATION_SPEED = 30;
let BAR_COLOR = "#588c7e";
let COMPARE_COLOR = "red";

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
        const animations = insertionSortAnimation(this.state.array);
        for(let i = 0; i < animations.length; ++i){
            const colorChange = (i % 4 === 0) || (i % 4 === 1);
            const arrayBars = document.getElementsByClassName('arrayBar');
            if(colorChange){
                const [barOneIndex, barTwoIndex] = animations[i];
                const color = (i % 4 === 0) ? COMPARE_COLOR : BAR_COLOR;
                
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED);
                
            }
            else{
                const [barOneIdx, newHeight] = animations[i];
                if(barOneIdx === -1){
                    continue;
                }
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() =>{
                barOneStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED);
            }
        }
    }

    bubbleSort(){
        const animations = bubbleSortAnimation(this.state.array);
        for (let i = 0; i < animations.length; ++i) {
            const colorChange = (i % 4 === 0) || (i % 4 === 1);
            const arrayBars = document.getElementsByClassName('arrayBar');
            if(colorChange){
                const [barOneIndex, barTwoIndex] = animations[i];
                const color = (i % 4 === 0) ? COMPARE_COLOR : BAR_COLOR;
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED);
                
            }
            else{
                const [barOneIdx, newHeight] = animations[i];
                if(barOneIdx === -1){
                    continue;
                }
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() =>{
                barOneStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED);
            }
        }
    }

    mergeSort(){
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
                },i * ANIMATION_SPEED);
                
            }
            else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                  },i * ANIMATION_SPEED);
            }
        }
    
    }

    quickSort(){

    }

    resetArray(){
        const array = [];
        for(let i = 0; i < NUMBER_OF_BARS; ++i){
            //Random numbers 1 - MAX_HEIGHT
            array.push(Math.ceil(Math.random() * MAX_HEIGHT));
        }
        this.setState({array});
    }

    render(){
        const {array} = this.state;

        return(
            <div className="arrayContainer" style={{position:'absolute', bottom:`5px`, left: `${PADDING}px`}}>
                {array.map((value, idx) => (
                    <div className="arrayBar" key={idx} style={{height: `${value}px`}}></div>
                ))}
                <div className="buttonContainer" style={{width:`${NUMBER_OF_BARS*32}px`}}>
                        <button onClick={() => this.resetArray()}>New Array</button>
                        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                        <button onClick={() => this.mergeSort()}>Merge Sort</button>
                        <button onClick={() => this.quickSort()}>Quick Sort</button>
                </div>
            </div>
            
        );
    }
}