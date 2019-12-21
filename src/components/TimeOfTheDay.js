import React from 'react'

function TimeOfTheDay(){

    let timeOfTheDay = "Morning"
    
    const styles = {
        fontSize: "12px"
    }
    const timeNow   = new Date();
    const hours     = timeNow.getHours();

    if(hours >= 4 && hours < 12){
        
        timeOfTheDay = "Morning"
        styles.color = "green"

    } else if(hours >= 12 && hours < 17){
        
        timeOfTheDay = "Afternoon"
        styles.color = "orange"

    } else if(hours >= 17 && hours < 22){
        
        timeOfTheDay = "Evening"
        styles.color = "pink"

    } else {

        timeOfTheDay = "Night"
        styles.color = "red"
    }

    return(
        <p style={{margin: "0px"}}>
            <span style={styles}>Good {timeOfTheDay}!</span>
        </p>
    )
}

export default TimeOfTheDay