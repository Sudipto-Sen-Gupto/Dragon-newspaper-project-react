import React, { Suspense } from 'react';
import Category from '../category/Category';

const Leftaside = () => {
    return (
        <div className=''>
          <Suspense fallback={<p>Birat load</p>}>
             <Category></Category>
          </Suspense>
        </div>
    );
};

export default Leftaside;