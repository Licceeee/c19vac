import React from "react";

const Datetime = () => {
    const showdate = new Date();
    // const displaytodaysdate = showdate.getDate() + "." + (showdate.getMonth() + 1) + "." + showdate.getFullYear();
    const localDate = showdate.toDateString();
    const currentTime = showdate.getHours() + ":" + showdate.getMinutes() + ":" + showdate.getSeconds();
    return <div>
        <div>{localDate} </div>
        <div>{currentTime}</div>
    </div>

}

export default Datetime;