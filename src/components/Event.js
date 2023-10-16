import React , {useState} from 'react';

const Event = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple)
    const [name, setName] = useState("click Me")

    const bgChange = () => {
        //console.log("clicked");
        let newBg = '#34495e';
        setBg(newBg);
        setName("Amar")

        
    }
    return (

        <>
            <div style ={{backgroundColor: bg}}
           /* <div style ={{backgroundColor: 'green'}}*/>
                <button onClick={bgChange}> Click Me</button>
            </div>
        
        </>
    )

}


export default Event;