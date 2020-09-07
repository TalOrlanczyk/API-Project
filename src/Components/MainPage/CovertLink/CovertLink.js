import React from 'react';
import styles from './CovertLink.module.css'
import LinkButton from '../../../Containers/LinkButton/LinkButton';
import LinkButtonWrapper from '../../../Containers/LinkButtonWrapper/LinkButtonWrapper';
import IconWrapper from '../IconWrapper/IconWrapper';
import Coin from '../../../Icons/Coin/Coin';

const CovertLink = () => {
    return (
        <LinkButtonWrapper className={styles.convertor}>
            <IconWrapper>
                <Coin/>
            </IconWrapper>
            <LinkButton to="/Converter"> 
                Money Convertor
            </LinkButton>
        </LinkButtonWrapper>

    )
}
export default CovertLink;