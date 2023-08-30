    import React , {  useState } from 'react';
    import 'bulma/css/bulma.css'
    import './App.css';

    function App() {
    const [TenThousand, setTenThousand] = useState<number | string >("");
    const [FiveThousand, setFiveThousand] = useState<number | string >("");
    const [TwoThousand, setTwoThousand] = useState<number | string >("");
    const [OneThousand, setOneThousand] = useState<number | string >("");
    const [FiveHundred, setFiveHundred] = useState<number | string >("");
    const [OneHundred, setOneHundred] = useState<number | string >("");
    const [Fifty, setFifty] = useState<number | string >("");
    const [Ten, setTen] = useState<number | string >("");
    const [Five, setFive] = useState<number | string >("");
    const [One, setOne] = useState<number | string >("");

    const total = () =>{
        let total =0;
        if(TenThousand!==undefined) {
            total=+TenThousand*10000;
        } 
        return total;
    } 

    const  deleteZero = (state:React.Dispatch<React.SetStateAction<number | string >>,num:number |string) => {

        if (typeof num !== 'string') {
            const numStr = num.toString();
            if (numStr.length>1) {
                state(num);
            }else {
                state("");
            }
        } else {

            state(Number(num));
        }
    }
    const  deleteAll = () :void => {
        const result = confirm('規定通りのお金をセットしましたか？');
        if(result) {
            const result = confirm('万札は取り出しましたか？');
            if (result) {
                const result = confirm('株主券は取り出しましたか？');
                if (result) {
                            
                    setTenThousand("");
                    setFiveThousand(0);
                    setTwoThousand(0);
                    setOneThousand(0);
                    setFiveHundred(0);
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
        <>
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
                <th><input className="input" type="number" inputMode="numeric" value={TenThousand} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setTenThousand,event.target.value)}/></th>
                <th><button className="button is-danger" onClick={() => deleteZero(setTenThousand,0)}>Danger</button></th>
                <th>{(typeof TenThousand ===  'number' ) ? TenThousand*10000 : 0 }</th>
                </tr>
                
                <tr>
                <th>5,000</th>
                <th><input className="input" type="number" inputMode="numeric" value={FiveThousand} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setFiveThousand,event.target.value)}/></th>
                <th><button className="button is-danger" onClick={() => deleteZero(setFiveThousand,0)}>Danger</button></th>
                <th>{(typeof FiveThousand ===  'number' ) ? FiveThousand*10000 : 0}</th>
                </tr>
                <tr>
                <th>2,000</th>
                <th><input className="input" type="number" inputMode="numeric" value={TwoThousand} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setTwoThousand,Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setTwoThousand(0)}>Danger</button></th>
                <th>{(typeof TwoThousand ===  'number' ) ? TwoThousand*10000 : 0 }</th>
                </tr>
                <tr>
                <th>1,000</th>
                <th><input className="input" type="number" inputMode="numeric" value={OneThousand} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setOneThousand,Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setOneThousand(0)}>Danger</button></th>
                <th>{(typeof OneThousand ===  'number' ) ? OneThousand*10000 : 0 }</th>
                </tr>
                <tr>
                <th>500</th>
                <th><input className="input" type="number" inputMode="numeric" value={FiveHundred} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setFiveHundred,Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setFiveHundred(0)}>Danger</button></th>
                <th>{(typeof FiveHundred ===  'number' ) ? FiveHundred*10000 : 0 }</th>
                </tr>
                <tr>
                <th>100</th>
                <th><input className="input" type="number" inputMode="numeric" value={OneHundred} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setOneHundred,Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setOneHundred(0)}>Danger</button></th>
                <th>{(typeof OneHundred ===  'number' ) ? OneHundred*10000 : 0 }</th>
                </tr>
                <tr>
                <th>50</th>
                <th><input className="input" type="number" inputMode="numeric" value={Fifty} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setFifty,Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setFifty(0)}>Danger</button></th>
                <th>{(typeof Fifty ===  'number' ) ? Fifty*10000 : 0 }</th>
                </tr>
                <tr>
                <th>10</th>
                <th><input className="input" type="number" inputMode="numeric" value={Ten} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setTen,Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setTen(0)}>Danger</button></th>
                <th>{(typeof Ten ===  'number' ) ? Ten*10000 : 0 }</th>
                </tr>
                <tr>
                <th>5</th>
                <th><input className="input" type="number" inputMode="numeric" value={Five} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setFive,Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setFive(0)}>Danger</button></th>
                <th>{(typeof Five ===  'number' ) ? Five*10000 : 0 }</th>
                </tr>
                <tr>
                <th>1</th>
                <th><input className="input" type="number" inputMode="numeric" value={One} onChange={(event: React.ChangeEvent<HTMLInputElement>) => deleteZero(setOne,Number(event.target.value))}/></th>
                <th><button className="button is-danger" onClick={() => setOne(0)}>Danger</button></th>
                <th>{(typeof One ===  'number' ) ? One*10000 : 0}</th>
                </tr>
                <tr>
                <th>Total</th>
                <th>{total()}</th>
                <th><button className="button is-primary" onClick={() => deleteAll()}>Delete All</button></th>
                <th>{total()}</th>
                </tr>
            </thead>
            </table>
            
        </body>
        </>
    );
    console.log(TenThousand)
    }

    export default App;
