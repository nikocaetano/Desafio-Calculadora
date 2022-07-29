import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
width: 30%;
height: 35vw;
position:relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
left:35%;
background-color:#9a8c98;
border-radius:10%;

div{
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    height:5vw;
}

.operacoes{
    display:flex;
    justify-content:space-around;
    width:15vw;
    padding-top:10%;   
    padding-bottom:4% 
}

button{
    width:2vw;
    height:2vw;
    border-radius:50%;
    border:none;
    cursor:pointer;
}

h1{
    color:#f1faee;
}

h1:hover{
    font-weight:200
}

input{
    text-align:center;
    width:5vw;
    border: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.numbers{
    display:flex;
    flex-wrap:wrap;
    width:15vw;
    justify-content:center;
    align-items:center;
    
}
.numbers button{
    width: 4vw;
    height:4vw;
}
p{
    text-align:center;
}
.igual{
    font-weight:800;
    width: 3vw;
    text-align:center;
}
`;
export default class Main extends Component {
    state = {
        n1: '',
        n2: '',
        result: '',
        n3: '',
        n4: '',
        placeOne: '',
        placeTwo: '',
    };

    Change = (event) => {
        this.setState({
            n1: Number(event.target.value),
        })
    };

    ChangeTwo = (event) => {
        this.setState({
            n2: Number(event.target.value)
        })
    };


    Somar = () => {
        const { n1, n2 } = this.state
        this.setState({
            result: n1 + n2,
            n3: this.state.n3 + 1,
            n4: this.state.n4 = "+"
        });
    };

    Sub = () => {
        const { n1, n2 } = this.state
        this.setState({
            result: n1 - n2,
            n3: this.state.n3 + 1,
            n4: this.state.n4 = "-"
        });
    };

    Multi = () => {
        const { n1, n2 } = this.state
        this.setState({
            result: n1 * n2,
            n3: this.state.n3 + 1,
            n4: this.state.n4 = "*"

        });
    };

    Divs = () => {
        const { n1, n2 } = this.state
        this.setState({
            result: this.state.n1 / this.state.n2,
            n3: this.state.n3 + 1,
            n4: this.state.n4 = "/"

        });
    };

    Resultado = () => {
        if (this.state.n4 === "+") {
            this.setState({
                result: Number(this.state.placeOne) + Number(this.state.placeTwo),
                n1: '',
                n3: '',
                n2: '',
            });
        } else if (this.state.n4 === "-") {
            this.setState({
                result: Number(this.state.placeOne) - Number(this.state.placeTwo),
                n1: '',
                n3: '',
                n2: '',
            });
        } else if (this.state.n4 === "*") {
            this.setState({
                result: Number(this.state.placeOne) * Number(this.state.placeTwo),
                n1: '',
                n3: '',
                n2: '',
            });
        } else if (this.state.n4 === "/") {
            this.setState({
                result: Number(this.state.placeOne) / Number(this.state.placeTwo),
                n1: '',
                n3: '',
                n2: '',
            });
        }
    };

    Clear = () => {
        this.setState({
            n1: '',
            n2: '',
            n3: 0,
            result: '',
            placeOne: '',
            placeTwo: '',
        });
    }

    render() {
        return (
            <Container>
                <h1>Calculadora do Niko</h1>

                <div>
                    <input type='number' value={this.state.n1} onChange={this.Change} placeholder={this.state.placeOne} />
                    <input type='number' value={this.state.n2} onChange={this.ChangeTwo} placeholder={this.state.placeTwo} />
                    <p>=</p>
                </div>

                <p class="igual">{this.state.result}</p>
                <section class="operacoes">
                    <button onClick={this.Somar}>+</button>
                    <button onClick={this.Sub}>-</button>
                    <button onClick={this.Multi}>x</button>
                    <button onClick={this.Divs}>/</button>
                    <button onClick={this.Clear}>c</button>
                    <button onClick={this.Resultado}>=</button>
                </section>
                <section class="numbers">
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 1,
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 1,
                            })
                        }
                    }}>1</button>
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 2,
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 2,
                            })
                        }
                    }}>2</button>
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 3,
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 3,
                            })
                        }
                    }}>3</button>
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 4,
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 4,
                            })
                        }
                    }}>4</button>
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 5,
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 5,
                            })
                        }
                    }}>5</button>
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 6
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 6,
                            })
                        }
                    }}>6</button>
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 7,
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 7,
                            })
                        }
                    }}>7</button>
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 8,
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 8,
                            })
                        }
                    }}>8</button>
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 9,
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 9,
                            })
                        }
                    }}>9</button>
                    <button onClick={() => {
                        if (this.state.n3 == 0) {
                            this.setState({
                                placeOne: this.state.placeOne + 0,
                            });
                        } else if (this.state.n3 == 1) {
                            this.setState({
                                placeTwo: this.state.placeTwo + 0,
                            })
                        }
                    }}>0</button>
                </section>

            </Container>
        )
    }
}