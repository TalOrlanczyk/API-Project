import React from 'react';
import './CovertLink.css';
import LinkButton from '../../../Containers/LinkButton/LinkButton';
import LinkButtonWrapper from '../../../Containers/LinkButtonWrapper/LinkButtonWrapper';
import IconWrapper from '../IconWrapper/IconWrapper';

const CovertLink = () => {
    return (
        <LinkButtonWrapper className="convertor">
            <IconWrapper>
                <div className="coin-flip">
                    <div className="coin-flip-inner">
                        <div className="front-coin"></div>
                        <div className="back-coin"></div>
                    </div>
                </div>
            </IconWrapper>
            <LinkButton to="/Converter">
                Convertor
            </LinkButton>
        </LinkButtonWrapper>

    )
}
export default CovertLink;