import React, { useState } from 'react'
import styles from './Input.module.css'

const Input = () => {
    const [input, setInput] = useState('');
    const [store, setStore] = useState([]);
    const [status, setStatus] = useState('')
    const [check, setCheck] = useState(false)

    let num = 0;

    const checkNumber = () => {
        const pasrseNum = parseInt(input);
        const storeNumber = []
        if (pasrseNum < 0) {
            setStatus('Enter a positive number');
        }
        else {
            num = pasrseNum;
            if (pasrseNum % 2 === 0) {
                setStatus('Even')
                for (let i = 0; i < 3; i++) {
                    storeNumber.push
                    num = num + 2;
                    storeNumber.push(num);
                }
                setStore(storeNumber);
                setCheck(true);
            }
            else {
                setStatus('Odd');
                for (let i = 0; i < 3; i++) {
                    num = num + 2;
                    storeNumber.push(num);
                }
                setStore(storeNumber);
                setCheck(true);
            }

        }
    }


    return (
        <div className={styles.container}>
            <label className={styles.label}>Number</label>
            <input className={styles.input} value={input} onChange={e => setInput(e.target.value)} type='number' placeholder='Enter Number' />
            <button className={styles.button} type='submit' onClick={checkNumber}>Check Number</button>
            {store.length > 0 && (
                <>
                    <p>{status}</p>
                    <p>{store.join(", ")}</p>
                </>
            )}
        </div>
    );
}

export default Input