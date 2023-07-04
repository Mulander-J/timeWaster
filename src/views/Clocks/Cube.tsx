import styled from '@emotion/styled';
import { ClassNames } from '@emotion/react';

function Cube(props: { label?: string | number; tip?: string | number; progress?: number; hideLine?: boolean }) {
  const { label = '--', tip = '--', progress = 0, hideLine } = props;

  return (
    <CubeBox>
      <div className="w-full flex flex-col gap-y-4  items-center justify-center">
        <ClassNames>
          {({ _, cx }: any) => (
            <div className={cx('text-md font-bold capitalize', /Week|Season/i.test(tip as string) && 'font-BSA')}>
              {String(label).padStart(2, '0')}
            </div>
          )}
        </ClassNames>
        {!hideLine && <ProgressLine width={100 * progress} />}
        <div className="text-xl uppercase">{tip}</div>
      </div>
    </CubeBox>
  );
}

export default Cube as any;

const CubeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 2rem;
  font-family: 'Bukhari', sans-serif;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  border-radius: 2%;

  --w: -900px;

  box-sizing: border-box;
  overflow: hidden;
  box-shadow: inset 0px 0px 40px rgba(0, 0, 0, 0.8), 0px 8px 20px rgba(0, 0, 0, 0.6);
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    top: var(--w);
    right: var(--w);
    bottom: var(--w);
    left: var(--w);
    background: conic-gradient(
      from 180deg at 50% 50%,
      #12001b -97.5deg,
      #000000 14.05deg,
      #040eff 54.01deg,
      #8000ff 113.42deg,
      #00b6b6 185.62deg,
      #12001b 262.5deg,
      #000000 374.05deg
    );
    filter: blur(60px) brightness(1.5);
    z-index: -1;
    animation: 30s move linear infinite;
  }

  @keyframes move {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(540deg);
    }
  }
`;

const ProgressLine: any = styled.div`
  position: relative;
  overflow: hidden;
  width: 28%;
  height: 4px;
  background: #f0f0f0;
  border-radius: 2px;
  &:after {
    content: '';
    position: absolute;
    border-radius: 2px;
    transition: all 0.28s ease-in-out;
    left: 0;
    top: 0;
    height: 100%;
    background: rgba(255, 0, 0, 1);
    box-shadow: 0 0 4px 4px red;
    width: ${(props: any) => (props?.width ? props.width : '0')}%;
  }
`;
