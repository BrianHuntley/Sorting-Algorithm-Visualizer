import React from 'react';
import './SortingVisualizer.css';

//Browser width & height determine how many values we can display and how tall
//32px width per bar
let NUMBER_OF_BARS = Math.floor(window.innerWidth / 32);
let PADDING = (window.innerWidth % 32)/2;
let MAX_HEIGHT = window.innerHeight - 80;

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

    }

    bubbleSort(){

    }

    mergeSort(){

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