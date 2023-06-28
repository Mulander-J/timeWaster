import { useState } from 'react'
import { calc } from "../asTime/build/release.js";

const rowItem = (label:string, value?: any)=>{
  return (
    <div>
      <p>
        <label>{label} : </label>
        <span>{String(value) || '--'}</span>
      </p>
    </div>
  )
}

function App() {

  const [ timer, setTimer ] = useState<any>(null)
  const [ value, setValue ] = useState<any>(null)

  const start = ()=>{
    const _timer = setInterval(()=>{
      const res = calc(BigInt(0), 0)
      setValue(res)
    },1000)
    setTimer(_timer)
  }

  const stop = ()=>{
    clearInterval(timer)
    setTimer(0)
  }



  const renderTimeInfo = ()=>{
    if(!value) return null
    return (
      <>
        {
          Object.entries(value?.base).map(([v,k])=>{
            return (
              <div key={v}>{rowItem(v, k as any)}</div>
            )
          })
        }
        {
          Object.entries(value?.calc).map(([v,k])=>{
            return (
              <div key={v}>{rowItem(v, k as any)}</div>
            )
          })
        }
      </>
    )
  }

  return (
    <div className="h-full">
      <main className='text-white text-3xl font-bold'>
        <div onClick={start}>Start</div>
        <div onClick={stop}>Stop</div>
        {renderTimeInfo()}
      </main>
    </div>
  );
}

export default App;
