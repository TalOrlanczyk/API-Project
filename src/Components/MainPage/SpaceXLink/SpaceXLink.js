import React from 'react';
import { SpaceX } from '../../../svg/svgs';
import styles from './SpaceXLink.module.css'
import LinkButtonWrapper from '../../../Containers/LinkButtonWrapper/LinkButtonWrapper';
import LinkButton from '../../../Containers/LinkButton/LinkButton';
import IconWrapper from '../IconWrapper/IconWrapper';
const SpaceXLink = (props) => {
    return (
        <LinkButtonWrapper className={styles.SpaceXLink}>
            <IconWrapper>
                <SpaceX />
            </IconWrapper>
            <LinkButton to="/SpaceX">
                SpaceX
            </LinkButton>
        </LinkButtonWrapper>
    )

}

export default SpaceXLink;