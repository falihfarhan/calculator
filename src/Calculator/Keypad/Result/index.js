import React from 'react'

class Result extends React.Component {

    state = {
        angka1: null,
        angka2: null,
        operasi: null,
        isChanged: false,
        hasil: '0'
    }

    simpanAngka = angka => {
        if (this.state.angka1 === null ) {
            this.setState({
                angka1: angka,
                hasil: angka
            })
        } else if(this.state.angka1 === null && angka === 0 ){
             return
        } 
        else if (this.state.isChanged === false) {
            this.setState({
                angka1: this.state.angka1 + `${angka}`,
                hasil: this.state.angka1 + `${angka}`
            })
        } else if (this.state.angka2 === null && this.state.isChanged) {
            this.setState({
                angka2: angka,
                hasil: this.state.hasil + `${angka}`
            })
        } else if (this.state.isChanged) {
            this.setState({
                angka2: this.state.angka2 + `${angka}`,
                hasil: this.state.hasil + `${angka}`
            })
        }
    }

    simpanOperasi = operator => {
        if (this.state.operasi === null) {
            this.setState({
                operasi: operator,
                hasil: this.state.hasil + `${operator}`,
                isChanged: true
            })
        }
    }

    calculate = (angka1, operasi, angka2) => {
        var nilai = 0;
        var angkaPertama = parseFloat(angka1);
        var angkaKedua = parseFloat(angka2);
        
        if (operasi === '+') {
            nilai = angkaPertama + angkaKedua;
        } else if (operasi === '-') {
            nilai = angkaPertama - angkaKedua;
        } else if (operasi === '*') {
            nilai = angkaPertama * angkaKedua;
        } else if (operasi === ':') {
            nilai = angkaPertama / angkaKedua;
        }
        this.setState({
            hasil: nilai,
            angka1: nilai,
            angka2: null,
            operasi: null,
            isChanged: false
        })
    }

    refresh = () => {
        this.setState({
            angka1: null,
            angka: null,
            operasi: null,
            isChanged: false,
            hasil: '0'
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="keypad">
                    <table border="4" >
                        <tbody>
                            <tr>
                                <th colSpan="4">
                                    {this.state.hasil}
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <button name="1" onClick={() => this.simpanAngka('1')}>1</button>
                                </th>
                                <th>
                                    <button name="2" onClick={() => this.simpanAngka('2')}>2</button>
                                </th>
                                <th>
                                    <button name="3" onClick={() => this.simpanAngka('3')}>3</button>
                                </th>
                                <th>
                                    <button name="+" onClick={() => this.simpanOperasi('+')}>+</button>
                                </th>
                            </tr>

                            {/* baris 2 */}
                            <tr>
                                <th>
                                    <button name="4" onClick={() => this.simpanAngka('4')}>4</button>
                                </th>
                                <th>
                                    <button name="5" onClick={() => this.simpanAngka('5')}>5</button>
                                </th>
                                <th>
                                    <button name="6" onClick={() => this.simpanAngka('6')}>6</button>
                                </th>
                                <th>
                                    <button name="-" onClick={() => this.simpanOperasi('-')}>-</button>
                                </th>
                            </tr>

                            {/* baris 3 */}
                            <tr>
                                <th>
                                    <button name="7" onClick={() => this.simpanAngka('7')}>7</button>
                                </th>
                                <th>
                                    <button name="8" onClick={() => this.simpanAngka('8')}>8</button>
                                </th>
                                <th>
                                    <button name="9" onClick={() => this.simpanAngka('9')}>9</button>
                                </th>
                                <th>
                                    <button name="*" onClick={() => this.simpanOperasi('*')}>x</button>
                                </th>
                            </tr>

                            {/* baris 4 */}
                            <tr>
                                <th>
                                    <button name="C" onClick={() => this.refresh()}>C</button>
                                </th>
                                <th>
                                    <button name="0" onClick={() => this.simpanAngka('0')}>0</button>
                                </th>
                                <th>
                                    <button name="=" onClick={() => this.calculate(this.state.angka1, this.state.operasi, this.state.angka2)}>=</button>
                                </th>
                                <th>
                                    <button name="/" onClick={() => this.simpanOperasi(':')}>:</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default Result