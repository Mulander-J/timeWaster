import { useState, useEffect } from 'react';
import useTimer from '@/hooks/useTimer.js';
import { calc } from "@as/build/release.js";
// import Cube from './Cube';

function Clocks () {
    const [ value, setValue ] = useState<{
        times: any
        base: any
        calc: any
    } | null>(null)
    const updateTime = () => {
        const offset = new Date().getTimezoneOffset() / 60
        const res = calc(BigInt(0), offset)
        setValue(res)
    }
    const { timer, err, start } = useTimer()

    useEffect(() => {!timer && !err && start(updateTime)}, [err])

    if (!value) return null

    return (
        <section className='text-white text-3xl font-bold'>
            <div>{value?.base?.year}</div>    
            <div>{value?.base?.natMonth}</div>    
            <div>{value?.base?.date}</div>

            <div>{value?.base?.week}</div>    
            <div>{value?.times?.[1]}</div>    
            <div>{value?.base?.season}</div>    

            <div>{value?.base?.hour}</div>    
            <div>{value?.base?.minute}</div>    
            <div>{value?.base?.second}</div>    
        </section>
    )
};

export default Clocks;