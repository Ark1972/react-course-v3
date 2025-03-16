import { useState } from 'react';


const ToggleChallenge = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      {isShow && <div>hello world</div>}
      <button className='btn' onClick={() => setIsShow(!isShow)}>{isShow ? 'hide' : 'show'}</button>
    </div>
  )
};

export default ToggleChallenge;
