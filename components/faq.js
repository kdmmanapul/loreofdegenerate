import { useState } from 'react'

export const Faq = ({ data }) => {
  const [expand, set_expand] = useState(false);
  return (
    <div className='item'>
      <div className="header" onClick={() => set_expand(!expand)}>
        <div className='question'>{data.ques}</div>
        <div className='icon'>
          <span className={`line ${expand ? '' : 'expand'}`}></span>
          <span className='line'></span>
        </div>
      </div>
      <div className={`answer ${expand ? 'expand' : ''}`}>
        <div className="mt-1">
          {data.answar}
        </div>
      </div>
    </div>
  )
};

