import styled from '@emotion/styled';

function Cube(props: { 
  label?: string | number
  tip?: string | number
  progress?: number
  hideLine?: boolean
}) {
  const { label = '--', tip = '--', progress = 0, hideLine } = props;

  return (
    <CubeBox>
      <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
        <div className="text-md font-bold capitalize">{String(label).padStart(2,'0')}</div>
        { !hideLine && <ProgressLine width={100*progress} /> }
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
  &:hover{
    box-shadow: 0px 0px 10px 4px rgba(255,255,255,.2);
  }
`;

const ProgressLine:any = styled.div`
  position: relative;
  overflow: hidden;
  width: 28%;
  height: 4px;
  background: #f0f0f0;
  border-radius: 2px;
  &:after{
    content: '';
    position: absolute;
    border-radius: 2px;
    transition: all .28s ease-in-out;
    left: 0;
    top: 0;
    height: 100%;
    background: rgba(255,0,0,1);
    box-shadow: 0 0 4px 4px red;
    width: ${(props:any) => props?.width ? props.width : '0'}%;
  }
`