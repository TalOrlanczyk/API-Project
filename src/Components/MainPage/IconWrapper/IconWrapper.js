import React from 'react';
const IconWrapper = (props) => {
    return (
        <div style={{ width: '72px', height: '38px' }}>
            {props.children}
        </div>
    )
}
IconWrapper.propTypes = {
};

export default IconWrapper;