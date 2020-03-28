import React, {Component} from 'react';

function MemoComp({name}) {
    console.log('Memo Component Loading')
    return (
        <div>
            {name}
        </div>
    );
}
export default React.memo(MemoComp);
