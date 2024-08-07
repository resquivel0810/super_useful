import React, { useState } from 'react';
import classes from './Select.module.css';
import { Link } from 'react-router-dom';

const SelectMaterial = ({onSelected=s=>s, defaultValue, style={},selectedOption,disabled = false,options,className, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = selectedOption => () => {
        
            setIsOpen(false);
            onSelected(selectedOption)
    
        
        
    };
    
    return (
        <>
            <div  className={className} {...props}>
                <div style={{cursor : selectedOption !== 'Material' || disabled ? 'not-allowed': 'pointer'}} className={classes.dropDownHeader} onClick={selectedOption === 'Material' ? toggling : null}>
                    <div style={{padding: '0 5px', fontFamily:"'Roboto', sans-serif", fontWeight:'400'}}>{selectedOption || defaultValue}</div> 
                    {
                        selectedOption === "Material"
                        ?
                        <div style={{backgroundColor: disabled ? 'rgba(225,83,15,0.6)' : '#e1530f'}} >
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-2.40348e-07 0.645339C-2.34636e-07 0.514648 0.0318497 0.383945 0.106151 0.266323C0.275982 -0.0211985 0.615642 -0.0865649 0.84916 0.122541L8.0033 6.52646L15.1575 0.122542C15.391 -0.0865643 15.7306 -0.0211978 15.9005 0.266323C16.0703 0.553845 16.0172 0.972073 15.7837 1.18118L8.31113 7.87258C8.13068 8.04247 7.87594 8.04247 7.68488 7.87258L0.222894 1.18118C0.0849064 1.05049 -2.49488e-07 0.854418 -2.40919e-07 0.658381L-2.40348e-07 0.645339Z" stroke-width="10" fill="#ffffff"/>
                            </svg>
                        </div>
                        :
                        <></>
                    }
                    
                </div>
                {isOpen && !disabled && (
                    <div className={`${classes.dropDownListContainer}`}>
                        <ul  className={classes.dropDownList}>
                        {options.map(option => (
                            <li style={{backgroundColor: option === selectedOption? 'rgba(182, 106, 0, .25)' : null, color:disabled?'#A5A5A5':'', cursor:disabled?'not-allowed':'pointer'}} className={`${classes.listItem}`} onClick={disabled?null: onOptionClicked(option)} key={Math.random()}>
                                <span style={{padding:'0', fontSize:'16px', width:'190px', }} className='tooltipLeft'>
                                    <span style={{fontFamily:"'Roboto', sans-serif"}}>{option.attributes.material}</span>
                                </span>
                            </li>   
                        ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )

}

export default SelectMaterial