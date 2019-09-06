import React from 'react'

class Buttons extends React.Component {

    state = {
        angka1: null,
        angka2: null,
        operasi: null,
        hasil : 0
    }

    simpanAngka = angka => {
        if (this.state.angka1 === null) {
            this.setState({
                angka1 : angka
            })
        } else {
            this.setState({
                angka2 : angka
            })
        }
    }

    simpanOperasi = operator => {
        if (this.state.operasi === null) {
            this.setState({
                operasi : operator
            })
        } 
    }

    calculate = (angka1, operasi, angka2) => {
        var nilai = null;
        if (operasi === '+') {
            nilai = angka1 + angka2;
        } else if (operasi === '-') {
            nilai = angka1 - angka2;
        } else if (operasi === '*') {
            nilai = angka1 * angka2;
        } else if (operasi === ':') {
            nilai = angka1 / angka2;
        }
        this.setState({
            hasil : nilai,
            angka1 : null,
            angka2 : null,
            operasi : null
        })
    }

    refresh = () => {
        this.setState({
            hasil : 0
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="button">

                    <button name="1" onClick={() => this.simpanAngka(1)}>1</button>
                    <button name="2" onClick={() => this.simpanAngka(2)}>2</button>
                    <button name="3" onClick={() => this.simpanAngka(3)}>3</button>
                    <button name="+" onClick={() => this.simpanOperasi('+')}>+</button><br />


                    <button name="4" onClick={() => this.simpanAngka(4)}>4</button>
                    <button name="5" onClick={() => this.simpanAngka(5)}>5</button>
                    <button name="6" onClick={() => this.simpanAngka(6)}>6</button>
                    <button name="-" onClick={() => this.simpanOperasi('-')}>-</button><br />

                    <button name="7" onClick={() => this.simpanAngka(7)}>7</button>
                    <button name="8" onClick={() => this.simpanAngka(8)}>8</button>
                    <button name="9" onClick={() => this.simpanAngka(9)}>9</button>
                    <button name="*" onClick={() => this.simpanOperasi('*')}>x</button><br />

                    <button name="C" onClick={() => this.refresh()}>C</button>
                    <button name="0" onClick={() => this.simpanAngka(0)}>0</button>
                    <button name="=" onClick={() => this.calculate(this.state.angka1,this.state.operasi,this.state.angka2)}>=</button>
                    <button name="/" onClick={() => this.simpanOperasi('/')}>÷</button><br />
                </div>

                <div>
                    <h1>Hasil : {this.state.hasil}</h1>
                </div>

            </React.Fragment>
        )
    }
}

export default Buttons