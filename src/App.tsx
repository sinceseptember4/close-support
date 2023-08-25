    import React , {  useState, useEffect } from 'react';
    import 'bulma/css/bulma.css'
    import './App.css';

    function App() {
    const [TenThousand, setTenThousand] = useState<number>(0);
    const [FiveThousand, setFiveThousand] = useState<number>(0);
    const [TwoThousand, setTwoThousand] = useState<number>(0);
    const [OneThousand, setOneThousand] = useState<number>(0);
    const [FiveHundred, setFiveHundred] = useState<number>(0);
    const [OneHundred, setOneHundred] = useState<number>(0);
    const [Fifty, setFifty] = useState<number>(0);
    const [Ten, setTen] = useState<number>(0);
    const [Five, setFive] = useState<number>(0);
    const [One, setOne] = useState<number>(0);
    const total = TenThousand*10000+FiveThousand*5000+TwoThousand*2000+OneThousand*1000+FiveHundred*500+OneHundred*100+Fifty*50+Ten*10+Five*5+One;
    const  deleteAll = () :void => {
        const result = confirm('規定通りのお金をセットしましたか？');
        if(result) {
            const result = confirm('万札は取り出しましたか？');
            if (result) {
                const result = confirm('株主券は取り出しましたか？');
                if (result) {
                            
                    setTenThousand(0);
                    setFiveThousand(0);
                    setTwoThousand(0);
                    setOneThousand(0);
                    setFiveHundred(0);
                    setOneHundred(0);
                    setFifty(0);
                    setTen(0);
                    setFive(0);
                    setOne(0);
                }
            }
        }
    }
    return (
        <div>
        <header className="App-header">
            <h1 className="title is-1">Close Support</h1>
        </header>
        <body>
            <table className="table">
            <thead>
                <tr>
                <th >値</th>
                <th>枚数</th>
                <th>button</th>
                <th>合計</th>
                </tr>
                <tr>
                <th>10,000</th>
                <th><input className="input" type="number" value={TenThousand} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setTenThousand(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setTenThousand(0)}>Danger</button></th>
                <th>{TenThousand*10000}</th>
                </tr>
                <tr>
                <th>5,000</th>
                <th><input className="input" type="number" value={FiveThousand} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setFiveThousand(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setFiveThousand(0)}>Danger</button></th>
                <th>{FiveThousand*5000}</th>
                </tr>
                <tr>
                <th>2,000</th>
                <th><input className="input" type="number" value={TwoThousand} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setTwoThousand(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setTwoThousand(0)}>Danger</button></th>
                <th>{TwoThousand*2000}</th>
                </tr>
                <tr>
                <th>1,000</th>
                <th><input className="input" type="number" value={OneThousand} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setOneThousand(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setOneThousand(0)}>Danger</button></th>
                <th>{OneThousand*1000}</th>
                </tr>
                <tr>
                <th>500</th>
                <th><input className="input" type="number" value={FiveHundred} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setFiveHundred(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setFiveHundred(0)}>Danger</button></th>
                <th>{FiveHundred*500}</th>
                </tr>
                <tr>
                <th>100</th>
                <th><input className="input" type="number" value={OneHundred} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setOneHundred(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setOneHundred(0)}>Danger</button></th>
                <th>{OneHundred*100}</th>
                </tr>
                <tr>
                <th>50</th>
                <th><input className="input" type="number" value={Fifty} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setFifty(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setFifty(0)}>Danger</button></th>
                <th>{Fifty*50}</th>
                </tr>
                <tr>
                <th>10</th>
                <th><input className="input" type="number" value={Ten} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setTen(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setTen(0)}>Danger</button></th>
                <th>{Ten*10}</th>
                </tr>
                <tr>
                <th>5</th>
                <th><input className="input" type="number" value={Five} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setFive(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setFive(0)}>Danger</button></th>
                <th>{Five*5}</th>
                </tr>
                <tr>
                <th>1</th>
                <th><input className="input" type="number" value={One} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setOne(Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setOne(0)}>Danger</button></th>
                <th>{One*1}</th>
                </tr>
                <tr>
                <th>Total</th>
                <th>{total.toLocaleString()}</th>
                <th><button className="button is-primary" onClick={() => deleteAll()}>Delete All</button></th>
                <th>{total.toLocaleString()}</th>
                </tr>
            </thead>
            </table>
            
        </body>
        </div>
    );
    }

    export default App;
