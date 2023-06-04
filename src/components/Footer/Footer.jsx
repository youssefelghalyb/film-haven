import React from 'react';

import styles from './styles.module.css';

import git from '../../IMGS/git.png'
import Lin from '../../IMGS/in.png'
import fb from '../../IMGS/fb.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Copyright &copy;2023 by Youssef Elghaly </p>
            <div className={styles.socialIcons}>
                <a href='https://github.com/youssefelghalyb'><img src={git} /></a>
                <a href='https://www.linkedin.com/in/youssef-elghaly-5208a6232/'><img src={Lin} /></a>
                <a href='https://www.facebook.com/youssef.elghaly.9/'><img src={fb} /></a>
            </div>
        </div>
    )
}


export default Footer