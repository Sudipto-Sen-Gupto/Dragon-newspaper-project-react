import React, { Suspense } from 'react';
import Category from '../category/Category';

const Leftaside = () => {
    return (
        <div>
          <Suspense>
             <Category></Category>
          </Suspense>
        </div>
    );
};

export default Leftaside;