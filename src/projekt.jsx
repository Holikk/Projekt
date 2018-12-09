import React from 'react';
import ReactDOM from 'react-dom';
require('./scss/main.scss');

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="header">SPORTOWY DZIEŃ</div>)
    }
}
class ActiveCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food1: "",
            food2: "",
            food3: "",
            food4: "",
            food5: "",
            food6: "",
            foodweight1: "",
            foodweight2: "",
            foodweight3: "",
            foodweight4: "",
            foodweight5: "",
            foodweight6: "",
            kcal1: "",
            kcal2: "",
            kcal3: "",
            kcal4: "",
            kcal5: "",
            kcal6: "",
            active: "",
            foodkcal: "",
            time: "",
            place: "https://www.um.warszawa.pl/ksiazka-adresowa/obiekty-sportowe-1861",
            height: "",
            weight: "",
            age: "",
            activity: "",
            plec: "",
            inf: "",
            kcalsum: ""
        };
    }
    heightChange = (e) => {
        this.setState({
            height: e.target.value
        });
    };
    weightChange = (e) => {
        this.setState({
            weight: e.target.value
        })
    };
    ageChange = (e) => {
        this.setState({
            age: e.target.value
        });
    };
    plecChange = (e) => {
        this.setState({
            plec: e.target.value
        });
    };
    activityChange = (e) => {
        this.setState({
            activity: e.target.value
        })
    };
    counter = (e) => {
        let kcalnumbers = [];
        e.preventDefault();
        if ((this.state.plec === "mężczyzna")) {
            kcalnumbers.push((66 + (13.7 * this.state.weight) + (5 * this.state.height) - (6.76 * this.state.age)) * (this.state.activity))
        }
        if ((this.state.plec === "kobieta")) {
            kcalnumbers.push((655 + (9.6 * this.state.weight) + (1.8 * this.state.height) - (4.7 * this.state.age)) * (this.state.activity))
        };
        this.setState({
            kcalsum: kcalnumbers
        })
    };
    send = (e) => {
        let errors = [];
        e.preventDefault();
        if (isNaN(Number(this.state.height)) || isNaN(Number(this.state.weight)) || isNaN(Number(this.state.age)) || isNaN(Number(this.state.activity))) {
            errors.push("Wpisz liczbę");
            this.setState({
                info: errors
            })
        }
    };
    kcalChange1 = (e) => {
        let calc = [];
        e.preventDefault();
        if (this.state.food1 === "jajecznica") {
            calc.push((Number(this.state.foodweight1 * 1.2)));
            this.setState({
                kcal1: calc
            })
        }
        if (this.state.food1 === "kurczak") {
            calc.push((Number(this.state.foodweight1 * 1)));
            this.setState({
                kcal1: calc
            })
        }
        if (this.state.food1 === "łosoś") {
            calc.push((Number(this.state.foodweight1 * 2)));
            this.setState({
                kcal1: calc
            })
        }
        if (this.state.food1 === "wołowina") {
            calc.push((Number(this.state.foodweight1 * 1.17)));
            this.setState({
                kcal1: calc
            })
        }
        if (this.state.food1 === "ziemniaki") {
            calc.push((Number(this.state.foodweight1 * 0.7)));
            this.setState({
                kcal1: calc
            })
        }
        if (this.state.food1 === "sałatka") {
            calc.push((Number(this.state.foodweight1 * 0.4)));
            this.setState({
                kcal1: calc
            })
        }
    };
    kcalChange2 = (e) => {
        let calc = [];
        e.preventDefault();
        if (this.state.food2 === "jajecznica") {
            calc.push((Number(this.state.foodweight2 * 1.2)));
            this.setState({
                kcal2: calc
            })
        }
        if (this.state.food2 === "kurczak") {
            calc.push((Number(this.state.foodweight2 * 1)));
            this.setState({
                kcal2: calc
            })
        }
        if (this.state.food2 === "łosoś") {
            calc.push((Number(this.state.foodweight2 * 2)));
            this.setState({
                kcal2: calc
            })
        }
        if (this.state.food2 === "wołowina") {
            calc.push((Number(this.state.foodweight2 * 1.17)));
            this.setState({
                kcal2: calc
            })
        }
        if (this.state.food2 === "ziemniaki") {
            calc.push((Number(this.state.foodweight2 * 0.7)));
            this.setState({
                kcal2: calc
            })
        }
        if (this.state.food2 === "sałatka") {
            calc.push((Number(this.state.foodweight2 * 0.4)));
            this.setState({
                kcal2: calc
            })
        }
    };
    kcalChange3 = (e) => {
        let calc = [];
        e.preventDefault();
        if (this.state.food3 === "jajecznica") {
            calc.push((Number(this.state.foodweight3 * 1.2)));
            this.setState({
                kcal3: calc
            })
        }
        if (this.state.food3 === "kurczak") {
            calc.push((Number(this.state.foodweight3 * 1)));
            this.setState({
                kcal3: calc
            })
        }
        if (this.state.food3 === "łosoś") {
            calc.push((Number(this.state.foodweight3 * 2)));
            this.setState({
                kcal3: calc
            })
        }
        if (this.state.food3 === "wołowina") {
            calc.push((Number(this.state.foodweight3 * 1.17)));
            this.setState({
                kcal3: calc
            })
        }
        if (this.state.food3 === "ziemniaki") {
            calc.push((Number(this.state.foodweight3 * 0.7)));
            this.setState({
                kcal3: calc
            })
        }
        if (this.state.food3 === "sałatka") {
            calc.push((Number(this.state.foodweight3 * 0.4)));
            this.setState({
                kcal3: calc
            })
        }
    };
    kcalChange4 = (e) => {
        let calc = [];
        e.preventDefault();
        if (this.state.food4 === "jajecznica") {
            calc.push((Number(this.state.foodweight4 * 1.2)));
            this.setState({
                kcal4: calc
            })
        }
        if (this.state.food4 === "kurczak") {
            calc.push((Number(this.state.foodweight4 * 1)));
            this.setState({
                kcal4: calc
            })
        }
        if (this.state.food4 === "łosoś") {
            calc.push((Number(this.state.foodweight4 * 2)));
            this.setState({
                kcal4: calc
            })
        }
        if (this.state.food4 === "wołowina") {
            calc.push((Number(this.state.foodweight4 * 1.17)));
            this.setState({
                kcal4: calc
            })
        }
        if (this.state.food4 === "ziemniaki") {
            calc.push((Number(this.state.foodweight4 * 0.7)));
            this.setState({
                kcal4: calc
            })
        }
        if (this.state.food4 === "sałatka") {
            calc.push((Number(this.state.foodweight4 * 0.4)));
            this.setState({
                kcal4: calc
            })
        }
    };
    kcalChange5 = (e) => {
        let calc = [];
        e.preventDefault();
        if (this.state.food5 === "jajecznica") {
            calc.push((Number(this.state.foodweight5 * 1.2)));
            this.setState({
                kcal5: calc
            })
        }
        if (this.state.food5 === "kurczak") {
            calc.push((Number(this.state.foodweight5 * 1)));
            this.setState({
                kcal5: calc
            })
        }
        if (this.state.food5 === "łosoś") {
            calc.push((Number(this.state.foodweight5 * 2)));
            this.setState({
                kcal5: calc
            })
        }
        if (this.state.food5 === "wołowina") {
            calc.push((Number(this.state.foodweight5 * 1.17)));
            this.setState({
                kcal5: calc
            })
        }
        if (this.state.food5 === "ziemniaki") {
            calc.push((Number(this.state.foodweight5 * 0.7)));
            this.setState({
                kcal5: calc
            })
        }
        if (this.state.food5 === "sałatka") {
            calc.push((Number(this.state.foodweight5 * 0.4)));
            this.setState({
                kcal5: calc
            })
        }
    };
    foodweightChange1 = (e) => {
        this.setState({
            foodweight1: e.target.value
        });
    };
    foodweightChange2 = (e) => {
        this.setState({
            foodweight2: e.target.value
        });
    };
    foodweightChange3 = (e) => {
        this.setState({
            foodweight3: e.target.value
        });
    };
    foodweightChange4 = (e) => {
        this.setState({
            foodweight4: e.target.value
        });
    };
    foodweightChange5 = (e) => {
        this.setState({
            foodweight5: e.target.value
        });
    };
    foodweightChange6 = (e) => {
        this.setState({
            foodweight6: e.target.value
        });
    };
    foodChange1 = (e) => {
        this.setState({
            food1: e.target.value
        });
    };
    foodChange2 = (e) => {
        this.setState({
            food2: e.target.value
        });
    };
    foodChange3 = (e) => {
        this.setState({
            food3: e.target.value
        });
    };
    foodChange4 = (e) => {
        this.setState({
            food4: e.target.value
        });
    };
    foodChange5 = (e) => {
        this.setState({
            food5: e.target.value
        });
    };
    foodChange6 = (e) => {
        this.setState({
            food6: e.target.value
        });
    };
    placeChange = (e) => {
        this.setState({
            place: "https://www.um.warszawa.pl/ksiazka-adresowa/obiekty-sportowe-1861"
        });
    };
    timeChange = (e) => {
        this.setState({
            time: e.target.value
        });
    };
    activeChange = (e) => {
        const disciplines = [{
            sport: "pływanie",
            kcals: 8
        },
            {
                sport: "bieganie",
                kcals: 13
            },
            {
                sport: "spacer",
                kcals: 4
            },
            {
                sport: "boks",
                kcals: 9
            },
            {
                sport: "futbol",
                kcals: 8.3
            },
            {
                sport: "tenis",
                kcals: 7.1
            },
            {
                sport: "rower",
                kcals: 7.2
            }
        ];
        let sports = disciplines[Math.floor(Math.random() * 7)];
        this.setState({
            active: sports.sport,
            foodkcal: Math.floor(sports.kcals)
        });
    };
    render() {
        return (<div className="container">
            <div className="container1">
            <h1 className="title">Oblicz swoje zapotrzebowanie kaloryczne</h1>
            <h2 className="info">{this.state.info}</h2>
                <h2 className="title2">{"Twoje zapotrzebowanie kaloryczne to: " + (Math.floor(this.state.kcalsum)) + " kalorii"}</h2>
            <form className="formularz"  onSubmit={this.send} style={{display: "block"}}>
                <div className="form1">
                <label>Płeć: </label>
                <select onChange={this.plecChange}
                        value={this.state.plec} style={{display: "block"}}>
                    <option value="wybierz">Wybierz</option>
                    <option value="mężczyzna">Mężczyzna</option>
                    <option value="kobieta">Kobieta</option>
                </select>
                <label>Wzrost: </label>
                <input type="text" value={this.state.height}
                       onChange={this.heightChange} style={{display: "block"}}/>
                <label>Waga:</label>
                <input type="text" value={this.state.weight}
                       onChange={this.weightChange} style={{display: "block"}}/>
                </div>
                <div className="form2">
                <label>Wiek: </label>
                <input type="text" value={this.state.age}
                       onChange={this.ageChange} style={{display: "block"}}/>
                <label>Aktywność: </label>
                <select onChange={this.activityChange}
                        value={this.state.activity} style={{display: "block"}}>
                    <option value="wybierz">Wybierz</option>
                    <option value="1.2">Brak</option>
                    <option value="1.4">Mała</option>
                    <option value="1.6">Średnia</option>
                    <option value="1.8">Duża</option>
                    <option value="2">Bardzo duża</option>
                </select>
                </div>
                <div className="form3">
                <input type="submit" onClick={this.counter} value=" Oblicz zapotrzebowanie" onSubmit={this.send} style={{display: "block"}}/>
                </div>
            </form>
            </div>
            <div className="container2">
                <div className="title3">
                <h3>Zaplanuj aktywność fizyczną</h3>
                </div>
                <div className="summix">
                <div className="mix">
            <label>Podaj czas aktywności (w minutach):</label>
            <select onChange={this.timeChange}
                    value={this.state.time} style={{display: "block"}}>
                <option value="wybierz">wybierz</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">55</option>
                <option value="60">60</option>
            </select>
            <button className="buttonplace2" onClick={this.activeChange}>Losuj aktywność</button>
                </div>
                <div className="mix2">
            <h3>Dzisiaj Twój sport to: {this.state.active}</h3>
            <div>Spalisz dzisiaj: {(this.state.foodkcal) * (this.state.time)} kalorii</div>
            <button className="buttonplace" onClick={this.placeChange}><a href={this.state.place}>Znajdź obiekt sportowy</a></button>
                </div>
                </div>
            </div>
            <div className="container3">
                <div className="fullmeal">
                    <div className="title4"><h2 className="subtitle"> Wybierz posiłki </h2></div>
                    <div className="meals">
                    <div className="meal1">
                    <select onChange={this.foodChange1}
                    value={this.state.food1} style={{display: "block"}}>
                        <option value="wybierz">wybierz</option>
                        <option value="kurczak">kurczak</option>
                        <option value="wołowina">wołowina</option>
                        <option value="jajecznica">jajecznica</option>
                        <option value="łosoś">łosoś</option>
                        <option value="ziemniaki">ziemniaki</option>
                        <option value="sałatka">sałatka</option>
            </select>
            <input type="text" placeholder="waga śniadania" onChange={this.foodweightChange1} onMouseLeave={this.kcalChange1}
                   value={this.state.foodweight1} style={{display: "block"}}/>
                    </div>
                    <div className="meal2">
                    <select onChange={this.foodChange2}
                    value={this.state.food2} style={{display: "block"}}>
                        <option value="wybierz">wybierz</option>
                        <option value="kurczak">kurczak</option>
                        <option value="wołowina">wołowina</option>
                        <option value="jajecznica">jajecznica</option>
                        <option value="łosoś">łosoś</option>
                        <option value="ziemniaki">ziemniaki</option>
                        <option value="sałatka">sałatka</option>
                    </select>
            <input type="text" placeholder="waga 2 śniadania" onChange={this.foodweightChange2} onMouseLeave={this.kcalChange2}
                   value={this.state.foodweight2} style={{display: "block"}}/>
                    </div>
                    <div className="meal3">
                    <select onChange={this.foodChange3}
                    value={this.state.food3} style={{display: "block"}}>
                        <option value="wybierz">wybierz</option>
                        <option value="kurczak">kurczak</option>
                        <option value="wołowina">wołowina</option>
                        <option value="jajecznica">jajecznica</option>
                        <option value="łosoś">łosoś</option>
                        <option value="ziemniaki">ziemniaki</option>
                        <option value="sałatka">sałatka</option>
            </select>
            <input type="text" placeholder="waga obiadu" onChange={this.foodweightChange3} onMouseLeave={this.kcalChange3}
                   value={this.state.foodweight3} style={{display: "block"}}/>
                    </div>
                    <div className="meal4">
                    <select onChange={this.foodChange4}
                    value={this.state.food4} style={{display: "block"}}>
                        <option value="wybierz">wybierz</option>
                        <option value="kurczak">kurczak</option>
                        <option value="wołowina">wołowina</option>
                        <option value="jajecznica">jajecznica</option>
                        <option value="łosoś">łosoś</option>
                        <option value="ziemniaki">ziemniaki</option>
                        <option value="sałatka">sałatka</option>
            </select>
            <input type="text" placeholder="waga podwieczorku" onChange={this.foodweightChange4} onMouseLeave={this.kcalChange4}
                   value={this.state.foodweight4} style={{display: "block"}}/>
                    </div>
                    <div className="meal5">
                    <select onChange={this.foodChange5}
                    value={this.state.food5} style={{display: "block"}}>
                        <option value="wybierz">wybierz</option>
                        <option value="kurczak">kurczak</option>
                        <option value="wołowina">wołowina</option>
                        <option value="jajecznica">jajecznica</option>
                        <option value="łosoś">łosoś</option>
                        <option value="ziemniaki">ziemniaki</option>
                        <option value="sałatka">sałatka</option>
            </select>
            <input type="text" placeholder="waga kolacji" onChange={this.foodweightChange5} onMouseLeave={this.kcalChange5}
                   value={this.state.foodweight5} style={{display: "block"}}/>
                    </div>
                </div>
                <div className="kcalmeal">
            <h4>Śniadanie: {Math.floor(Number(this.state.kcal1))} kcal </h4>
            <h4>2 śniadanie: {Math.floor(Number(this.state.kcal2))} kcal </h4>
            <h4>Obiad: {Math.floor(Number(this.state.kcal3))} kcal </h4>
            <h4>Podwieczorek: {Math.floor(Number(this.state.kcal4))} kcal </h4>
            <h4>Kolacja: {Math.floor(Number(this.state.kcal5))} kcal </h4>
                </div>
            </div>
            </div>
            <div className="container4">
                <div className="together">
                    <div className="title5"><h2>Podsumowanie</h2></div>
                    <div className="finish">
                        <Sumup ate={(Number((this.state.foodkcal) * (this.state.time)))}
                               need={this.state.kcalsum}
                               eaten={(Number(this.state.kcal1)) + (Number(this.state.kcal2)) + (Number(this.state.kcal3)) + (Number(this.state.kcal4)) + (Number(this.state.kcal5)) + (Number(this.state.kcal6))}/></div>
                   </div></div></div>)
    }
}
class Sumup extends React.Component {
                    constructor(props) {
                        super(props);
                    }
                    render() {
                        return (<div className="secondfile">
                            <div className="component1"><h2>Potrzebujesz {Math.floor(Number(this.props.need))} kcal          </h2>
                            <h2>Spaliłeś {Math.floor(Number(this.props.ate))} kcal           </h2></div>
                            <div className="component2">
                            <h2>Zjadłeś {Math.floor(Number(this.props.eaten))} kcal           </h2>
                                <h2>Zostało {Math.floor(Number(this.props.need)) - Math.floor(Number(this.props.eaten))} kcal          </h2></div>
                        </div>)
                    }
                }
                class App extends React.Component {
                render(){
                return (<div><Header/><ActiveCalculator/></div>)
            }
            }
                document.addEventListener('DOMContentLoaded', function(){
                ReactDOM.render(
                <App/>,
                document.getElementById('app')
                );
            })