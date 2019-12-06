import React, { Component } from 'react'

class Buttons extends Component {
    constructor(props){
        super(props)
         this.state = { 
            banana: 0,
            bananaPrice: 0,
            durian: 0,
            durianPrice: 0,
            apple: 0,
            applePrice: 0,
            cranberry: 0,
            cranberryPrice: 0,
            grandTotal: 0
         }
    }

    // get the current state of all fruit information on initial page load
    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {'Accept': 'application/json','Content-type': 'application/json', 'mode': 'no-cors'},
        }
        fetch('http://localhost:3000', options)
        .then(res => res.json())
        .then(data => {
            let bananaCounter = 0;
            let durianCounter = 0;
            let appleCounter = 0;
            let cranberryCounter = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === 'banana') {
                    bananaCounter++;
                } 
                if (data[i].type === 'durian'){
                    durianCounter++
                }
                if (data[i].type === 'apple') {
                    appleCounter++
                }
                if (data[i].type === 'cranberry'){
                    cranberryCounter++
                }
            }
            this.setState({ 
                banana: bananaCounter,
                bananaPrice: 12 * bananaCounter,
                durian: durianCounter,
                durianPrice: 0.15 * durianCounter,
                apple: appleCounter,
                applePrice: appleCounter,
                cranberry: cranberryCounter,
                cranberryPrice: 1.25 * cranberryCounter,
                grandTotal: this.state.bananaPrice + this.state.applePrice + this.state.durianPrice + this.state.cranberryPrice
            })
        }).catch((err) => console.warn('there was an error!!!!', err))
    }


    // add durian method =======================================
    durian() {
        const options = {
            method: 'POST',
            headers: {'Accept': 'application/json','Content-type': 'application/json', 'mode': 'no-cors'},
            body: JSON.stringify({
                fruit: 'durian'
            })
        }
        fetch('http://localhost:3000/durian', options)
        .then(res => res.json())
        .then(data => {
            let durianCounter = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === 'durian') {
                    durianCounter++
                }
            }
            this.setState({ 
                durian: durianCounter,
                durianPrice: 0.15 * durianCounter,
                grandTotal: 0.15 * durianCounter
            })
        })
        .catch((err) => console.warn('there was an error!!!!', err))
    }

    // add banana method ====================================
    banana(){
        const options = {
            method: 'POST',
            headers: {'Accept': 'application/json','Content-type': 'application/json', 'mode': 'no-cors'},
            body: JSON.stringify({
                fruit: 'banana'
            })
        }
        fetch('http://localhost:3000/banana', options)
        .then(res => res.json())
        .then(data => {
            let bananaCounter = 0;
            for (let i = 0; i < data.length; i++){
                if (data[i].type === 'banana') {
                    bananaCounter++
                }
            }
            this.setState({
                banana: bananaCounter,
                bananaPrice: 12 * bananaCounter,
                grandTotal: 12 * bananaCounter
            })
        })
        .catch((err) => console.warn('there was an error!!!!', err))
    }

    // add apple method ====================================
    apple() {
        const options = {
            method: 'POST',
            headers: {'Accept': 'application/json','Content-type': 'application/json', 'mode': 'no-cors'},
            body: JSON.stringify({
                fruit: 'apple'
            })
        }
        fetch('http://localhost:3000/apple', options)
        .then(res => res.json())
        .then(data => {
            let appleTotal = data.length;
            for (let i = 0; i < appleTotal; i++){
                if (appleTotal[i] % 4 === 0) {
                    this.setState({
                        apple: appleTotal,
                        applePrice: i+1,
                        grandTotal: i+1
                    })
                } else {
                    this.setState({
                        apple: data.length,
                        applePrice: data.length * 2,
                        grandTotal: data.length * 2
                    })
                }
            }           
        })
        .catch((err) => console.warn('there was an error!!!!', err))
    }

    // add cranberry ==========================================
    cranberry() {
        const options = {
            method: 'POST',
            headers: {'Accept': 'application/json','Content-type': 'application/json', 'mode': 'no-cors'},
            body: JSON.stringify({
                fruit: 'cranberry'
            })
        }
        fetch('http://localhost:3000/cranberry', options)
        .then(res => res.json())
        .then(data => {
            let cranberryCounter = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === 'cranberry') {
                    cranberryCounter++
                }
            }
            this.setState({
                cranberry: cranberryCounter,
                cranberryPrice: 1.25 * cranberryCounter,
                grandTotal: 1.25 * cranberryCounter
            })
        })
    }

    // clear all fields =======================================
    clear() {
        const options = {
            method: 'DELETE',
            headers: {'Accept': 'application/json','Content-type': 'application/json', 'mode': 'no-cors'}
        }
        fetch('http://localhost:3000', options)
        this.setState({
            banana: 0,
            bananaPrice: 0,
            durian: 0,
            durianPrice: 0,
            apple: 0,
            applePrice: 0,
            cranberry: 0,
            cranberryPrice: 0,
            grandTotal: 0
        })
    }

    // get grand total =========================================
    grandTotal(){
        const options = {
            method: 'GET',
            headers: {'Accept': 'application/json','Content-type': 'application/json', 'mode': 'no-cors'},
        }
        fetch('http://localhost:3000', options)
        .then(res => res.json())
        .then(data => {
            let bananaCounter = 0;
            let durianCounter = 0;
            let appleCounter = 0;
            let cranberryCounter = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === 'banana') {
                    bananaCounter++;
                } 
                if (data[i].type === 'durian'){
                    durianCounter++
                }
                if (data[i].type === 'apple') {
                    appleCounter++
                }
                if (data[i].type === 'cranberry'){
                    cranberryCounter++
                }
            }
            this.setState({ 
                banana: bananaCounter,
                bananaPrice: 12 * bananaCounter,
                durian: durianCounter,
                durianPrice: 0.15 * durianCounter,
                apple: appleCounter,
                applePrice: appleCounter,
                cranberry: cranberryCounter,
                cranberryPrice: 1.25 * cranberryCounter,
                grandTotal: this.state.bananaPrice + this.state.applePrice + this.state.durianPrice + this.state.cranberryPrice
            })
        }).catch((err) => console.warn('there was an error!!!!', err))
    }

    render() { 
        return ( 
            <div className='outerContainer'>
              <div className='container'>
                <div>
                    <button className ='btn apple' onClick={() => this.apple()}>Id: A (Apple)</button>
                    <div className='header'>Total Apples: {this.state.apple} </div>
                    <div>Total Price: ${this.state.applePrice} </div>
                </div>
                <div>
                    <button className='btn banana' onClick={() => this.banana()}>Id: B (Banana)</button>
                    <div className='header'>Total Bananas: {this.state.banana}</div>
                    <div>Total Price: ${this.state.bananaPrice}</div>
                </div>
                <div>
                    <button className='btn cranberry' onClick={() => this.cranberry()}>Id: C (Cranberry)</button>
                    <div className='header'>Total Cranberries: {this.state.cranberry}</div>
                    <div>Total Price: ${this.state.cranberryPrice.toFixed(2)} </div>
                </div>
                <div>
                    <button className='btn durian' onClick={() => this.durian()}>Id: D (Durian)</button>
                    <div className='header'>Total Durian: {this.state.durian}</div>
                    <div>Total Price: ${this.state.durianPrice.toFixed(2)}</div>
                </div>
              </div>
              <div className='grandTotal'>Grand Total: ${this.state.grandTotal.toFixed(2)}</div>
                <div>
                  <button className = 'btn clear' onClick={() => this.clear()}>CLEAR</button>
                </div>
            </div>
         );
    }
}
 
export default Buttons;