import React from 'react';
import Button from './Button';
import { create, all } from "mathjs";

const math = create(all);

const Calculator = () => {

    let buttonGenerator = [
        {name: "obliterate", value: "C"},
        {name: "equal", value:"="},
        {name: "sign", value:"-"},
        {name: "percentage", value:"%"},
        {name: "add", value: "+"},
        {name: "subtract", value: "-"},
        {name: "multiply", value: "*"},
        {name: "divide", value: "/"},
        {name: "decimal", value:"."},
        {name: "zero", value: "0"},
        {name: "one", value: "1"},
        {name: "two", value: "2"},
        {name: "three", value: "3"},
        {name: "four", value: "4"},
        {name: "five", value: "5"},
        {name: "six", value: "6"},
        {name: "seven", value: "7"},
        {name: "eight", value: "8"},
        {name: "nine", value: "9"},
    ]


    const handleClick = () => {
        console.log(buttonGenerator)
    }

    let buttons = buttonGenerator.map( button => {
        return <Button key={button.name} name={button.name} value={button.value} onButtonClick={handleClick}/>
    })

    

    return (
        <div>
            {buttons}
        </div>
    )



}


export default Calculator