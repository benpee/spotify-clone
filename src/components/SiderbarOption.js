import React from 'react';
import classes from './SidebarOption.module.css';

// npm i @material-ui/core
// npm i @material-ui/icons

function SiderbarOption({ title, Icon }) {
    return (
        <div className={classes.sidebarOption}>
            {Icon && <Icon className={classes.sidebarOption__icon} />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SiderbarOption