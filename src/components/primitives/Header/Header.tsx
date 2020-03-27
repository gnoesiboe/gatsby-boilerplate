import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { homePath } from '../../../routing/urlGenerator';
import styles from './header.module.scss';

type Props = {
    siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
    <header className={styles.header}>
        <div className="container">
            <h1>
                <Link to={homePath}>{siteTitle}</Link>
            </h1>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
