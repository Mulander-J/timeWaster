import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { calc } from '@as/build/release.js';
import useTimer from '@/hooks/useTimer';
import Cube from './Cube';

function Clocks() {
  const [aBase, setABase] = useState<{
    year: number;
    month: number;
    natMonth: number;
    date: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    week: string;
    season: string;
  } | null>(null);
  const [aCalc, setACalc] = useState<{
    isLeap: boolean;
    m_season: number;
    m_y: number;
    d_y: number;
    d_m: number;
    d_w: number;
    h_d: number;
    min_h: number;
    s_min: number;
    s_d: number;
  } | null>(null);
  const [aTime, setATime] = useState<any>({
    dateStr: '',
    timeStr: '',
  });

  const updateTime = () => {
    const offset = new Date().getTimezoneOffset() / 60;
    const res = calc(BigInt(0), offset);
    setABase(res.base);
    setACalc(res.calc);
    setATime({
      dateStr: new Date(Number(res.times?.[0])).toDateString(),
      timeStr: new Date(Number(res.times?.[0])).toLocaleTimeString(),
    });
  };
  const { timer, err, start } = useTimer();


  const [transformVal, setMove] = useState('');
  const mouseMove = (event:any)=>{
    const wHeight= document.body.clientHeight,
      wWidth= document.body.clientWidth;
    let currentMousePosX = event.pageX,
      currentMousePosY = event.pageY;

      const around1 = Math.min(-1 * (currentMousePosY * 100 / wHeight * 0.2 - 10), 0),
      around2 = 1 * (currentMousePosX * 100 / wWidth * 0.2 - 10),
      trans1 = (currentMousePosX * 100 / wHeight * 0.3 ) + 'px',
      trans2 = (currentMousePosY * 100 / wHeight * 0.3 ) + 'px';      

      // setMove(`translate3d(${trans1},${trans2},0) rotateX(${around1}deg) rotateY(${around2}deg)`);
      setMove(`translate3d(${trans1},${trans2},0) rotateY(${around2 > 0.2 ? 0.2 : around2 < -0.2 ? -0.2 : around2}deg)`);
  }

  useEffect(() => {
    !timer && !err && start(updateTime);
  }, [err]);

  return (
    <Perspect onMouseMove={mouseMove}>
      <CubeGrid transVal={transformVal}>
        <Cube label={aBase?.year} tip="Year" progress={aCalc?.d_y} />
        <Cube label={aBase?.natMonth} tip="Month" progress={aCalc?.d_m} />
        <Cube label={aBase?.date} tip="Date" progress={aCalc?.s_d} />

        <Cube label={aBase?.week} tip="Week" progress={aCalc?.d_w} />
        <Cube label={aTime?.timeStr} tip={aTime?.dateStr} hideLine />
        <Cube label={aBase?.season} tip="Season" progress={aCalc?.m_season} />

        <Cube label={aBase?.hour} tip="Hour" progress={aCalc?.h_d} />
        <Cube label={aBase?.minute} tip="Minute" progress={aCalc?.min_h} />
        <Cube label={aBase?.second} tip="Second" progress={aCalc?.s_min} />
      </CubeGrid>
    </Perspect>
  );
}
export default Clocks;

const Perspect = styled.div`
  height: 100%;
  perspective: 10px;
  perspective-origin: none;
  transform-style: preserve-3d;
  overflow: hidden;
`;

const CubeGrid = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  padding: 24px;
  justify-content: space-between;
  transform: ${(props:any) => props?.transVal ? props.transVal : ''};
`;
