import React from 'react'
import Result from './Result';

class Keypad extends React.Component {

    state = {
        angka1: null,
        angka2: null,
        operasi: null,
        isChanged: false,
        hasil: '0'
    }

    simpanAngka = angka => {
        if (this.state.angka1 === null) {
            this.setState({
                angka1: angka,
                hasil: angka
            })
        } else if (this.state.isChanged === false) {
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
            <Result hasil={this.state.hasil} />
        )
    }
}

export default Keypad