import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useHotkeys } from 'react-hotkeys-hook';
import { calc } from '@as/build/release.js';
import useTimer from '@/hooks/useTimer';
import Cube from './Cube';

const rotateTip = {
  variants: {
    initial: { opacity: '1' },
    animate: { opacity: '0' },
  },
  transition: { ease: 'easeInOut', duration: 3 },
};

function Clocks() {
  const [transformVal, setMove] = useState('');
  const [canMove, setCanMove] = useState(true);

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

  useHotkeys(
    'alt+l',
    () => {
      setCanMove(!canMove);
    },
    [canMove],
  );

  useEffect(() => {
    !timer && !err && start(updateTime);
  }, [err]);

  const mouseMove = useCallback(
    (event: any) => {
      if (!canMove) return;
      const wHeight = document.body.clientHeight,
        wWidth = document.body.clientWidth,
        currentMousePosX = event.pageX,
        currentMousePosY = event.pageY;

      const moveForce = 6; // max popup movement in pixels
      const rotateForce = 0.6; // max popup rotation in deg

      const moveX = ((currentMousePosX - wWidth / 2) / (wWidth / 2)) * -moveForce;
      const moveY = ((currentMousePosY - wHeight / 2) / (wHeight / 2)) * -moveForce;

      const rotateY = (currentMousePosX / wWidth) * rotateForce * 2 - rotateForce;
      const rotateX = -((currentMousePosY / wHeight) * rotateForce * 2 - rotateForce);

      setMove(`rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(${moveX}px,${moveY}px,0)`);
    },
    [canMove],
  );

  return (
    <>
      <CubeGrid onMouseMove={mouseMove}>
        <Cube label={aBase?.year} tip="Year" progress={aCalc?.d_y} />
        <Cube label={aBase?.natMonth} tip="Month" progress={aCalc?.d_m} />
        <Cube label={aBase?.date} tip="Date" progress={aCalc?.s_d} />

        <Cube label={aBase?.week} tip="Week" progress={aCalc?.d_w} />
        <PerspectView>
          <div className="item h-full w-full" style={{transform:canMove ? transformVal : '' }}>
            <Cube label={aTime?.timeStr} tip={aTime?.dateStr} hideLine />
          </div>
        </PerspectView>
        <Cube label={aBase?.season} tip="Season" progress={aCalc?.m_season} />

        <Cube label={aBase?.hour} tip="Hour" progress={aCalc?.h_d} />
        <Cube label={aBase?.minute} tip="Minute" progress={aCalc?.min_h} />
        <Cube label={aBase?.second} tip="Second" progress={aCalc?.s_min} />
      </CubeGrid>

      {!canMove && (
        <motion.div
          className="tip"
          variants={rotateTip.variants}
          initial="initial"
          animate="animate"
          transition={rotateTip.transition}
        >
          <TipBox>Free Ratate(Alt+L)</TipBox>
        </motion.div>
      )}

      {canMove && (
        <motion.div
          className="tip"
          variants={rotateTip.variants}
          initial="initial"
          animate="animate"
          transition={rotateTip.transition}
        >
          <TipBox>Lock Rotate(Alt+L)</TipBox>
        </motion.div>
      )}
    </>
  );
}
export default Clocks;

const CubeGrid = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  padding: 24px;
  justify-content: space-between;
`;

const PerspectView = styled.div`
  perspective: 10px;
  perspective-origin: none;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
`;

const TipBox = styled.div`
  position: fixed;
  bottom: 5%;
  z-index: 10;
  left: 50%;
  letter-spacing: 2px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  transform: translateX(-50%);
`;
