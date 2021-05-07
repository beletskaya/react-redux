import React from 'react';
import classes from "./Avatar.module.css";

function Avatar() {
    return(
        <div className={classes.avatar}>
            <a href="/">
                <img src="../../images/author-main1.jpg" alt="images"/>
                <span className={classes.content}>
                    <span className={classes.name}>
                        James Spiegel
                    </span>
                    <span className={classes.city}>
                        San Francisco, CA
                    </span>
                </span>
            </a>
        </div>
    )
}
export default Avatar;