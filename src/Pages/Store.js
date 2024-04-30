import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

import classes from './Store.module.css';

import Shipments from '../Images/shipments.png';

export default function Store() {

    function createMarkup(str) {
        return {__html: str};
    }

    const [FAQs, setFAQs] = useState() 
    const [questions, setQuestions] = useState()
    const [loadingContent, setIsLoadingContent] = useState()
    const [pageContent, setPageContent] = useState({})
   

    useEffect(() => {
        setIsLoadingContent(true)
        fetch(`https://super-useful-cms-mysql-3b678b46df5f.herokuapp.com/api/store?populate=*`, { 
            'Content-Type': 'application/json' , method: 'GET' 
            })
            .then(data => data.json())
            .then(data => {
                setPageContent(data.data.attributes)
                setIsLoadingContent(false)
            })
        fetch(`https://super-useful-cms-mysql-3b678b46df5f.herokuapp.com/api/faq-stores?populate=*`, { 
            'Content-Type': 'application/json' , method: 'GET' 
            })
            .then(data => data.json())
            .then(data => {
                setFAQs(data.data)
                setQuestions(Object.keys(data.data).length)
                setIsLoadingContent(false)
            })
        
    }, [])




    return(
        <>
        <Header/>
        <section className={classes.PaymentMethods}>
            <div className={classes.PaymentMethodsContent}>
                <h2 className={classes.item1}>Métodos de pago</h2>
                <div className={`${classes.PaymentMethod} ${classes.item2}`}>
                    <svg  width="100" height="100" viewBox="0 0 141.732 141.732"><g fill="#2566af"><path d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z"/></g><path d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z" fill="#e6a540"/><path fill="none" d="M0 0h141.732v141.732H0z"/></svg>
                </div>
                <div className={`${classes.PaymentMethod} ${classes.item3}`}>
                    <svg style={{width:'calc(999.2px/10)', height:'calc(776px/10)'}} version="1.1" x="0px" y="0px" viewBox="0 0 999.2 776" enable-background="new 0 0 999.2 776" >
                        <path id="XMLID_1775_"  d="M181.1,774.3v-51.5c0-19.7-12-32.6-32.6-32.6
                            c-10.3,0-21.5,3.4-29.2,14.6c-6-9.4-14.6-14.6-27.5-14.6c-8.6,0-17.2,2.6-24,12v-10.3h-18v82.4h18v-45.5c0-14.6,7.7-21.5,19.7-21.5
                            s18,7.7,18,21.5v45.5h18v-45.5c0-14.6,8.6-21.5,19.7-21.5c12,0,18,7.7,18,21.5v45.5H181.1z M448.1,691.9h-29.2V667h-18v24.9h-16.3
                            v16.3h16.3v37.8c0,18.9,7.7,30,28.3,30c7.7,0,16.3-2.6,22.3-6l-5.2-15.5c-5.2,3.4-11.2,4.3-15.5,4.3c-8.6,0-12-5.2-12-13.7v-36.9
                            h29.2V691.9z M600.9,690.1c-10.3,0-17.2,5.2-21.5,12v-10.3h-18v82.4h18v-46.4c0-13.7,6-21.5,17.2-21.5c3.4,0,7.7,0.9,11.2,1.7
                            l5.2-17.2C609.4,690.1,604.3,690.1,600.9,690.1L600.9,690.1z M370,698.7c-8.6-6-20.6-8.6-33.5-8.6c-20.6,0-34.3,10.3-34.3,26.6
                            c0,13.7,10.3,21.5,28.3,24l8.6,0.9c9.4,1.7,14.6,4.3,14.6,8.6c0,6-6.9,10.3-18.9,10.3c-12,0-21.5-4.3-27.5-8.6l-8.6,13.7
                            c9.4,6.9,22.3,10.3,35.2,10.3c24,0,37.8-11.2,37.8-26.6c0-14.6-11.2-22.3-28.3-24.9l-8.6-0.9c-7.7-0.9-13.7-2.6-13.7-7.7
                            c0-6,6-9.4,15.5-9.4c10.3,0,20.6,4.3,25.8,6.9L370,698.7L370,698.7z M848.9,690.1c-10.3,0-17.2,5.2-21.5,12v-10.3h-18v82.4h18v-46.4
                            c0-13.7,6-21.5,17.2-21.5c3.4,0,7.7,0.9,11.2,1.7L861,691C857.5,690.1,852.4,690.1,848.9,690.1L848.9,690.1z M618.9,733.1
                            c0,24.9,17.2,42.9,43.8,42.9c12,0,20.6-2.6,29.2-9.4l-8.6-14.6c-6.9,5.2-13.7,7.7-21.5,7.7c-14.6,0-24.9-10.3-24.9-26.6
                            c0-15.5,10.3-25.8,24.9-26.6c7.7,0,14.6,2.6,21.5,7.7l8.6-14.6c-8.6-6.9-17.2-9.4-29.2-9.4C636.1,690.1,618.9,708.2,618.9,733.1
                            L618.9,733.1L618.9,733.1z M785.4,733.1v-41.2h-18v10.3c-6-7.7-14.6-12-25.8-12c-23.2,0-41.2,18-41.2,42.9c0,24.9,18,42.9,41.2,42.9
                            c12,0,20.6-4.3,25.8-12v10.3h18V733.1L785.4,733.1z M719.3,733.1c0-14.6,9.4-26.6,24.9-26.6c14.6,0,24.9,11.2,24.9,26.6
                            c0,14.6-10.3,26.6-24.9,26.6C728.8,758.8,719.3,747.6,719.3,733.1L719.3,733.1z M503.9,690.1c-24,0-41.2,17.2-41.2,42.9
                            c0,25.8,17.2,42.9,42.1,42.9c12,0,24-3.4,33.5-11.2l-8.6-12.9c-6.9,5.2-15.5,8.6-24,8.6c-11.2,0-22.3-5.2-24.9-19.7h60.9
                            c0-2.6,0-4.3,0-6.9C542.5,707.3,527,690.1,503.9,690.1L503.9,690.1L503.9,690.1z M503.9,705.6c11.2,0,18.9,6.9,20.6,19.7h-42.9
                            C483.3,714.2,491,705.6,503.9,705.6L503.9,705.6z M951.1,733.1v-73.8h-18v42.9c-6-7.7-14.6-12-25.8-12c-23.2,0-41.2,18-41.2,42.9
                            c0,24.9,18,42.9,41.2,42.9c12,0,20.6-4.3,25.8-12v10.3h18V733.1L951.1,733.1z M885,733.1c0-14.6,9.4-26.6,24.9-26.6
                            c14.6,0,24.9,11.2,24.9,26.6c0,14.6-10.3,26.6-24.9,26.6C894.4,758.8,885,747.6,885,733.1L885,733.1z M282.4,733.1v-41.2h-18v10.3
                            c-6-7.7-14.6-12-25.8-12c-23.2,0-41.2,18-41.2,42.9c0,24.9,18,42.9,41.2,42.9c12,0,20.6-4.3,25.8-12v10.3h18V733.1L282.4,733.1z
                            M215.5,733.1c0-14.6,9.4-26.6,24.9-26.6c14.6,0,24.9,11.2,24.9,26.6c0,14.6-10.3,26.6-24.9,26.6
                            C224.9,758.8,215.5,747.6,215.5,733.1z"/>
                        <g>
                            <rect id="rect19" x="364" y="66.1" fill="#FF5A00" width="270.4" height="485.8"/>
                            <path id="XMLID_330_"  fill="#EB001B" d="M382,309c0-98.7,46.4-186.3,117.6-242.9
                                C447.2,24.9,381.1,0,309,0C138.2,0,0,138.2,0,309s138.2,309,309,309c72.1,0,138.2-24.9,190.6-66.1C428.3,496.1,382,407.7,382,309z"
                                />
                            <path id="path22"  fill="#F79E1B" d="M999.2,309c0,170.8-138.2,309-309,309
                                c-72.1,0-138.2-24.9-190.6-66.1c72.1-56.7,117.6-144.2,117.6-242.9S570.8,122.7,499.6,66.1C551.9,24.9,618,0,690.1,0
                                C861,0,999.2,139.1,999.2,309z"/>
                        </g>
                    </svg>
                </div>
                <div className={`${classes.PaymentMethod} ${classes.item4}`}>
                    <svg style={{width:'calc(1280px/10)', height:'calc(339.345px/10)'}} viewBox="0 0 338.667 89.785" >
                        <g transform="translate(936.898 -21.779)">
                            <path clip-path="none" d="M-828.604 39.734c-.697 0-1.289.506-1.398 1.195l-8.068 51.165a1.31 1.31 0 0 0 1.294 1.513h9.568c.696 0 1.289-.507 1.398-1.195l2.37-15.025c.108-.688.701-1.195 1.398-1.195h8.699c10.164 0 18.792-7.416 20.368-17.465 1.589-10.134-6.328-18.971-17.549-18.993zm9.301 11.422h6.96c5.73 0 7.596 3.381 7.006 7.12-.59 3.747-3.488 6.507-9.031 6.507h-7.084zm45.788 3.478c-2.416.009-5.196.504-8.317 1.804-7.159 2.984-10.597 9.151-12.057 13.647 0 0-4.647 13.717 5.852 21.253 0 0 9.737 7.255 20.698-.447l-.189 1.203a1.31 1.31 0 0 0 1.292 1.513h9.083c.697 0 1.289-.507 1.398-1.195l5.525-35.038a1.31 1.31 0 0 0-1.292-1.515h-9.083c-.697 0-1.29.507-1.398 1.195l-.297 1.886s-3.967-4.333-11.216-4.306zm.297 11.067c1.043 0 1.997.144 2.853.419 3.919 1.258 6.141 5.023 5.498 9.104-.793 5.025-4.914 8.725-10.199 8.725-1.042 0-1.996-.143-2.853-.418-3.918-1.258-6.154-5.023-5.511-9.104.793-5.025 4.927-8.727 10.212-8.727z" fill="#003087"/>
                            <path clip-path="none" d="M-697.804 39.734c-.697 0-1.289.506-1.398 1.195l-8.068 51.165a1.31 1.31 0 0 0 1.294 1.513h9.568c.696 0 1.289-.507 1.398-1.195l2.37-15.025c.108-.688.701-1.195 1.398-1.195h8.699c10.164 0 18.791-7.416 20.366-17.465 1.59-10.134-6.326-18.971-17.547-18.993zm9.301 11.422h6.96c5.73 0 7.596 3.381 7.006 7.12-.59 3.747-3.487 6.507-9.031 6.507h-7.084zm45.787 3.478c-2.416.009-5.196.504-8.317 1.804-7.159 2.984-10.597 9.151-12.057 13.647 0 0-4.645 13.717 5.854 21.253 0 0 9.735 7.255 20.697-.447l-.189 1.203a1.31 1.31 0 0 0 1.294 1.513h9.082c.697 0 1.289-.507 1.398-1.195l5.527-35.038a1.31 1.31 0 0 0-1.294-1.515h-9.083c-.697 0-1.29.507-1.398 1.195l-.297 1.886s-3.967-4.333-11.216-4.306zm.297 11.067c1.043 0 1.997.144 2.853.419 3.919 1.258 6.141 5.023 5.498 9.104-.793 5.025-4.914 8.725-10.199 8.725-1.042 0-1.996-.143-2.853-.418-3.918-1.258-6.154-5.023-5.511-9.104.793-5.025 4.927-8.727 10.212-8.727z" fill="#0070e0"/>
                            <path clip-path="none" d="M-745.92 55.859c-.72 0-1.232.703-1.012 1.388l9.958 30.901-9.004 14.562c-.437.707.071 1.62.902 1.62h10.642a1.77 1.77 0 0 0 1.513-.854l27.811-46.007c.427-.707-.083-1.611-.909-1.611h-10.641a1.77 1.77 0 0 0-1.522.869l-10.947 18.482-5.557-18.345c-.181-.597-.732-1.006-1.355-1.006z" fill="#003087"/>
                            <path clip-path="none" d="M-609.107 39.734c-.696 0-1.289.507-1.398 1.195l-8.07 51.163a1.31 1.31 0 0 0 1.294 1.515h9.568c.696 0 1.289-.507 1.398-1.195l8.068-51.165a1.31 1.31 0 0 0-1.292-1.513z" fill="#0070e0"/>
                            <path clip-path="none" d="M-908.37 39.734a2.59 2.59 0 0 0-2.556 2.185l-4.247 26.936c.198-1.258 1.282-2.185 2.556-2.185h12.445c12.525 0 23.153-9.137 25.095-21.519a20.76 20.76 0 0 0 .245-2.793c-3.183-1.669-6.922-2.624-11.019-2.624z" fill="#001c64"/>
                            <path clip-path="none" d="M-874.832 42.359a20.76 20.76 0 0 1-.245 2.793c-1.942 12.382-12.571 21.519-25.095 21.519h-12.445c-1.273 0-2.358.926-2.556 2.185l-3.905 24.752-2.446 15.528a2.1 2.1 0 0 0 2.075 2.43h13.508a2.59 2.59 0 0 0 2.556-2.185l3.558-22.567a2.59 2.59 0 0 1 2.558-2.185h7.953c12.525 0 23.153-9.137 25.095-21.519 1.379-8.788-3.047-16.784-10.611-20.75z" fill="#0070e0"/>
                            <path clip-path="none" d="M-923.716 21.779c-1.273 0-2.358.926-2.556 2.183l-10.6 67.216c-.201 1.276.785 2.43 2.077 2.43h15.719l3.903-24.752 4.247-26.936a2.59 2.59 0 0 1 2.556-2.185h22.519c4.098 0 7.836.956 11.019 2.624.218-11.273-9.084-20.58-21.873-20.58z" fill="#003087"/>
                        </g>
                    </svg>
                </div>
                <div className={`${classes.PaymentMethod} ${classes.item5}`}>
                    <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        style={{width:'calc(800.469px/5)', height:'calc(208.556px/5)'}}
                        viewBox="0 0 800.469 208.556"
                        enable-background="new 0 0 800.469 208.556"
                        pagecolor="#ffffff"
                        bordercolor="#666666"
                        borderopacity="1"
                        objecttolerance="10"
                        gridtolerance="10"
                        guidetolerance="10"
                        showgrid="false"
                    >
                        <path
                            fill="#141685"
                            d="M293.134,95.862C293.134,43.051,227.517,0,146.572,0C65.632,0,0.017,43.051,0.017,95.862    c0,1.363-0.017,5.134-0.017,5.612C0,157.5,57.352,202.876,146.554,202.876c89.755,0,146.58-45.364,146.58-101.392    C293.134,99.525,293.134,98.4,293.134,95.862z"
                            id="path7" 
                        />
                        <path
                            fill="#05b0d9"
                            d="M287.521,95.814c0,49.788-63.091,90.15-140.923,90.15c-77.829,0-140.918-40.362-140.918-90.15    C5.681,46.021,68.77,5.66,146.599,5.66C224.431,5.66,287.521,46.021,287.521,95.814z"
                            id="path9" 
                        />
                        <path
                            fill="#ffffff"
                            d="M99.808,67.372c-0.074,0.142-1.48,1.596-0.569,2.765c2.225,2.841,9.092,4.47,16.039,2.913     c4.136-0.93,9.437-5.146,14.573-9.22c5.564-4.423,11.086-8.85,16.637-10.611c5.876-1.87,9.641-1.068,12.129-0.315     c2.73,0.814,5.938,2.61,11.057,6.451c9.644,7.25,48.416,41.092,55.115,46.943c5.396-2.437,29.375-12.76,61.959-19.942     c-2.831-17.373-13.398-33.265-29.424-46.279c-22.336,9.381-49.634,14.276-76.326,1.239c-0.137-0.056-14.583-6.893-28.833-6.557     c-21.179,0.491-30.354,9.658-40.063,19.36L99.808,67.372z"
                            id="path13" 
                        />
                        <path
                            fill="#ffffff"
                            d="M223.214,109.979c-0.454-0.404-45.589-39.898-55.815-47.584c-5.917-4.437-9.208-5.569-12.664-6.01     c-1.8-0.233-4.284,0.101-6.022,0.577c-4.757,1.295-10.975,5.454-16.499,9.831c-5.717,4.554-11.108,8.843-16.109,9.962     c-6.391,1.433-14.195-0.258-17.756-2.666c-1.443-0.969-2.458-2.091-2.947-3.231c-1.315-3.049,1.112-5.488,1.51-5.896     l12.456-13.472c1.447-1.445,2.906-2.891,4.397-4.315c-4.019,0.524-7.734,1.55-11.351,2.557c-4.513,1.27-8.854,2.477-13.245,2.474     c-1.833,0-11.655-1.61-13.52-2.117C64.378,47.003,54.486,44,39.708,37.1C22.001,50.281,10.161,66.764,6.74,84.917     c2.544,0.673,6.643,1.893,8.365,2.274c40.071,8.909,52.552,18.088,54.815,20.003c2.452-2.728,5.985-4.454,9.934-4.454     c4.435,0.006,8.429,2.233,10.857,5.677c2.295-1.813,5.459-3.361,9.55-3.359c1.857,0,3.785,0.344,5.732,1.006     c4.522,1.551,6.854,4.561,8.064,7.285c1.518-0.685,3.381-1.19,5.577-1.184c2.157,0,4.402,0.492,6.664,1.47     c7.388,3.171,8.538,10.427,7.868,15.898c0.526-0.062,1.055-0.086,1.593-0.086c8.759,0.006,15.884,7.125,15.88,15.891     c0,2.711-0.693,5.261-1.899,7.5c2.384,1.34,8.46,4.371,13.793,3.694c4.262-0.535,5.88-1.993,6.46-2.813     c0.396-0.564,0.816-1.222,0.427-1.694l-11.307-12.56c0,0-1.862-1.761-1.248-2.439c0.64-0.697,1.788,0.303,2.602,0.984     c5.754,4.806,12.781,12.058,12.781,12.058c0.117,0.078,0.583,0.997,3.181,1.463c2.237,0.4,6.194,0.168,8.936-2.084     c0.693-0.569,1.384-1.278,1.961-2.01c-0.045,0.035-0.083,0.084-0.126,0.101c2.891-3.698-0.32-7.443-0.32-7.443l-13.2-14.823     c0,0-1.888-1.744-1.247-2.447c0.575-0.608,1.79,0.312,2.616,0.998c4.179,3.496,10.084,9.421,15.744,14.965     c1.105,0.809,6.081,3.887,12.666-0.441c3.996-2.62,4.8-5.841,4.687-8.271c-0.278-3.216-2.788-5.507-2.788-5.507l-18.032-18.128     c0,0-1.903-1.627-1.231-2.449c0.551-0.693,1.788,0.305,2.598,0.983c5.747,4.806,21.294,19.062,21.294,19.062     c0.221,0.157,5.594,3.981,12.233-0.246c2.373-1.517,3.891-3.806,4.02-6.461C226.469,112.717,223.214,109.979,223.214,109.979z"
                            id="path15" 
                        />
                        <path
                            fill="#ffffff"
                            d="M135.758,132.96c-2.796-0.033-5.854,1.627-6.253,1.386c-0.22-0.146,0.171-1.27,0.433-1.917     c0.268-0.643,3.95-11.721-5.024-15.569c-6.868-2.952-11.066,0.369-12.509,1.868c-0.379,0.392-0.548,0.361-0.592-0.14     c-0.138-1.994-1.031-7.392-6.958-9.2c-8.472-2.593-13.919,3.32-15.301,5.454c-0.619-4.829-4.701-8.577-9.701-8.582     c-5.432-0.006-9.839,4.396-9.845,9.827c-0.001,5.431,4.402,9.835,9.833,9.835c2.641,0.006,5.035-1.049,6.8-2.744     c0.056,0.052,0.079,0.144,0.049,0.332c-0.412,2.431-1.175,11.27,8.081,14.868c3.711,1.441,6.868,0.369,9.485-1.466     c0.779-0.55,0.907-0.318,0.795,0.414c-0.334,2.272,0.089,7.14,6.911,9.908c5.192,2.108,8.264-0.05,10.276-1.909     c0.876-0.801,1.115-0.671,1.161,0.564c0.248,6.577,5.711,11.799,12.346,11.806c6.837,0.007,12.377-5.521,12.38-12.354     C148.129,138.502,142.593,133.034,135.758,132.96z"
                            id="path17" 
                        />
                        <path
                            fill="#141685"
                            d="M224.96,105.251c-13.903-12.134-46.036-40.069-54.739-46.601c-4.971-3.74-8.363-5.715-11.34-6.602    c-1.336-0.404-3.188-0.864-5.571-0.866c-2.212,0-4.59,0.4-7.072,1.189c-5.625,1.779-11.227,6.233-16.647,10.54l-0.278,0.221    c-5.05,4.012-10.266,8.165-14.214,9.047c-1.724,0.388-3.497,0.588-5.264,0.588c-4.423-0.006-8.396-1.283-9.884-3.181    c-0.246-0.313-0.089-0.823,0.486-1.555l0.077-0.097l12.23-13.182c9.58-9.579,18.628-18.625,39.457-19.103    c0.342-0.01,0.695-0.016,1.039-0.016c12.965,0.008,25.926,5.812,27.379,6.484c12.156,5.93,24.703,8.942,37.317,8.953    c13.146,0.004,26.708-3.25,40.968-9.816c-1.592-1.34-3.249-2.644-4.955-3.921c-12.527,5.431-24.463,8.175-35.979,8.171    c-11.761-0.01-23.513-2.835-34.921-8.402c-0.602-0.287-14.913-7.035-29.804-7.041c-0.39,0-0.786,0.006-1.175,0.012    c-17.495,0.411-27.35,6.622-33.977,12.066c-6.445,0.156-12.006,1.711-16.954,3.093c-4.415,1.227-8.227,2.291-11.946,2.288    c-1.532,0-4.289-0.14-4.536-0.148c-4.276-0.13-25.819-5.415-42.958-11.903c-1.75,1.239-3.433,2.518-5.072,3.82    c17.903,7.34,39.69,13.019,46.566,13.462c1.914,0.125,3.953,0.342,5.992,0.347c4.548,0,9.088-1.276,13.482-2.505    c2.594-0.729,5.458-1.521,8.47-2.099c-0.805,0.79-1.606,1.59-2.411,2.396L96.299,64.333c-0.977,0.987-3.101,3.622-1.701,6.868    c0.557,1.31,1.687,2.561,3.268,3.626c2.961,1.994,8.264,3.342,13.189,3.347c1.866,0.002,3.635-0.186,5.261-0.55    c5.208-1.169,10.672-5.522,16.462-10.124c4.612-3.665,11.165-8.317,16.181-9.685c1.402-0.381,3.124-0.618,4.507-0.618    c0.414,0.004,0.804,0.017,1.167,0.068c3.315,0.421,6.519,1.549,12.241,5.843c10.2,7.662,55.341,47.151,55.783,47.542    c0.031,0.024,2.909,2.507,2.709,6.634c-0.107,2.301-1.386,4.347-3.606,5.763c-1.926,1.223-3.916,1.845-5.926,1.845    c-3.017-0.006-5.095-1.418-5.229-1.516c-0.167-0.136-15.632-14.317-21.321-19.08c-0.907-0.751-1.788-1.427-2.678-1.427    c-0.477-0.004-0.897,0.2-1.182,0.557c-0.896,1.103,0.107,2.631,1.289,3.637l18.065,18.159c0.025,0.019,2.252,2.107,2.495,4.893    c0.143,3.01-1.297,5.528-4.289,7.488c-2.131,1.405-4.29,2.118-6.403,2.118c-2.773,0-4.722-1.265-5.152-1.563l-2.592-2.555    c-4.736-4.66-9.627-9.478-13.206-12.465c-0.872-0.726-1.806-1.396-2.693-1.396c-0.439,0-0.835,0.163-1.138,0.482    c-0.408,0.454-0.693,1.27,0.324,2.623c0.42,0.557,0.913,1.016,0.913,1.016l13.183,14.808c0.109,0.132,2.717,3.231,0.297,6.318    l-0.466,0.591c-0.394,0.436-0.821,0.836-1.225,1.182c-2.249,1.846-5.253,2.043-6.443,2.043c-0.635,0-1.249-0.055-1.782-0.152    c-1.301-0.233-2.175-0.596-2.597-1.095l-0.159-0.167c-0.722-0.744-7.367-7.528-12.866-12.117    c-0.724-0.608-1.626-1.374-2.563-1.374c-0.462,0-0.872,0.182-1.19,0.532c-1.088,1.192,0.544,2.973,1.237,3.626l11.245,12.399    c-0.012,0.11-0.154,0.365-0.426,0.758c-0.402,0.557-1.767,1.922-5.846,2.433c-0.488,0.065-0.994,0.09-1.493,0.09    c-4.206,0-8.692-2.04-11.004-3.267c1.052-2.224,1.598-4.671,1.598-7.126c0.004-9.256-7.511-16.784-16.765-16.79    c-0.198,0-0.408,0.006-0.606,0.013c0.303-4.225-0.294-12.226-8.507-15.748c-2.363-1.022-4.721-1.544-7.012-1.544    c-1.793,0-3.517,0.307-5.14,0.93c-1.701-3.307-4.526-5.715-8.212-6.971c-2.035-0.705-4.062-1.062-6.021-1.062    c-3.416,0-6.564,1.006-9.373,3.004c-2.69-3.346-6.755-5.327-11.035-5.327c-3.744,0-7.346,1.499-10.016,4.142    c-3.499-2.672-17.383-11.493-54.541-19.93c-1.8-0.406-5.93-1.592-8.459-2.332c-0.419,2.013-0.74,4.045-0.951,6.097    c0,0,6.854,1.641,8.202,1.944c37.96,8.431,50.502,17.198,52.622,18.855c-0.717,1.724-1.09,3.585-1.095,5.459    c-0.004,7.842,6.374,14.229,14.222,14.235c0.879,0,1.751-0.076,2.608-0.235c1.182,5.771,4.958,10.146,10.73,12.392    c1.687,0.647,3.394,0.981,5.068,0.981c1.084,0.002,2.173-0.135,3.239-0.406c1.064,2.707,3.464,6.082,8.825,8.26    c1.881,0.757,3.761,1.152,5.587,1.152c1.493,0,2.953-0.262,4.345-0.773c2.569,6.258,8.684,10.404,15.5,10.404    c4.518,0.006,8.855-1.836,12.019-5.091c2.709,1.506,8.424,4.229,14.199,4.237c0.749,0,1.45-0.054,2.151-0.137    c5.736-0.726,8.405-2.969,9.632-4.713c0.221-0.304,0.421-0.626,0.59-0.963c1.354,0.39,2.843,0.707,4.549,0.712    c3.133,0,6.14-1.069,9.179-3.283c2.985-2.152,5.107-5.243,5.413-7.874c0.006-0.035,0.012-0.074,0.016-0.113    c1.006,0.209,2.039,0.315,3.07,0.315c3.225,0,6.398-1.006,9.429-2.992c5.848-3.834,6.864-8.84,6.767-12.119    c1.022,0.214,2.068,0.323,3.107,0.323c3.029,0,6-0.911,8.835-2.717c3.624-2.315,5.806-5.864,6.136-9.992    c0.227-2.807-0.468-5.637-1.949-8.07c9.798-4.22,32.189-12.389,58.556-18.331c-0.159-2.045-0.454-4.064-0.818-6.074    C254.729,92.295,230.923,102.598,224.96,105.251z M135.758,156.813c-6.195-0.005-11.233-4.82-11.459-10.956    c-0.017-0.525-0.07-1.924-1.254-1.924c-0.486,0-0.909,0.293-1.395,0.732c-1.361,1.262-3.097,2.546-5.631,2.546    c-1.148,0-2.396-0.268-3.711-0.806c-6.542-2.649-6.633-7.145-6.367-8.95c0.071-0.482,0.097-0.984-0.235-1.374l-0.402-0.36h-0.408    c-0.332,0-0.675,0.136-1.139,0.461c-1.893,1.33-3.707,1.975-5.552,1.975c-1.016,0-2.058-0.204-3.101-0.606    c-8.615-3.353-7.934-11.482-7.513-13.93c0.062-0.495-0.06-0.88-0.376-1.136l-0.608-0.501l-0.569,0.544    c-1.681,1.619-3.874,2.505-6.184,2.505c-4.934-0.006-8.948-4.014-8.944-8.949c0.004-4.936,4.022-8.942,8.957-8.936    c4.457,0,8.253,3.352,8.822,7.806l0.308,2.402l1.32-2.033c0.148-0.237,3.763-5.703,10.407-5.696c1.265,0,2.57,0.204,3.883,0.61    c5.299,1.617,6.196,6.42,6.334,8.42c0.095,1.167,0.924,1.223,1.087,1.223c0.457,0,0.793-0.291,1.032-0.54    c1-1.043,3.178-2.779,6.586-2.779c1.559,0.006,3.219,0.375,4.932,1.111c8.418,3.612,4.6,14.311,4.554,14.422    c-0.723,1.773-0.752,2.557-0.072,3.008l0.332,0.159h0.246c0.379,0,0.852-0.165,1.631-0.429c1.146-0.396,2.876-0.991,4.492-0.987    h0.004c6.338,0.068,11.492,5.227,11.49,11.493C147.249,151.669,142.092,156.813,135.758,156.813z"
                            id="path19" 
                        />
                        <path
                            fill="#141685"
                            d="M792.534,34.783c-5.289-6.629-13.319-9.941-24.097-9.941c-10.765,0-18.798,3.312-24.084,9.941    c-5.295,6.625-7.942,14.455-7.942,23.49c0,9.196,2.647,17.055,7.942,23.597c5.286,6.52,13.319,9.792,24.084,9.792    c10.777,0,18.808-3.271,24.097-9.792c5.295-6.542,7.936-14.401,7.936-23.597C800.469,49.238,797.829,41.408,792.534,34.783z     M779.426,72.805c-2.568,3.408-6.239,5.111-11.041,5.111c-4.789,0-8.48-1.703-11.068-5.111c-2.589-3.404-3.877-8.251-3.877-14.532    c0-6.272,1.288-11.106,3.877-14.495c2.588-3.387,6.279-5.083,11.068-5.083c4.802,0,8.473,1.695,11.041,5.083    c2.563,3.388,3.852,8.223,3.852,14.495C783.278,64.553,781.989,69.4,779.426,72.805z"
                            id="path23" 
                        />
                        <path
                            fill="#141685"
                            d="M657.335,29.24c-5.361-2.72-11.504-4.093-18.413-4.093c-10.62,0-18.118,2.773-22.479,8.304    c-2.744,3.544-4.285,8.06-4.645,13.559h15.87c0.391-2.427,1.17-4.349,2.341-5.77c1.637-1.921,4.418-2.882,8.353-2.882    c3.516,0,6.172,0.482,7.991,1.474c1.806,0.978,2.718,2.759,2.718,5.33c0,2.12-1.178,3.67-3.547,4.676    c-1.319,0.577-3.507,1.058-6.575,1.441l-5.624,0.693c-6.391,0.804-11.241,2.156-14.525,4.043    c-6.011,3.461-9.011,9.051-9.011,16.783c0,5.955,1.858,10.565,5.6,13.814c3.722,3.25,8.467,4.612,14.188,4.878    c35.887,1.602,35.479-18.911,35.81-23.177V44.702C665.385,37.131,662.699,31.973,657.335,29.24z M649.002,65.066    c-0.109,5.499-1.688,9.287-4.712,11.363c-3.026,2.079-6.334,3.12-9.919,3.12c-2.271,0-4.193-0.631-5.776-1.878    c-1.58-1.249-2.365-3.28-2.365-6.088c0-3.15,1.289-5.474,3.876-6.977c1.54-0.88,4.052-1.639,7.561-2.241l3.748-0.695    c1.863-0.355,3.332-0.732,4.404-1.138c1.084-0.394,2.132-0.916,3.184-1.577V65.066z"
                            id="path25" 
                        />
                        <path
                            fill="#141685"
                            d="M575.51,39.212c4.104,0,7.114,1.266,9.063,3.798c1.335,1.874,2.17,3.987,2.492,6.33h17.702    c-0.973-8.93-4.098-15.165-9.372-18.697c-5.292-3.516-12.071-5.289-20.36-5.289c-9.75,0-17.407,2.995-22.937,8.972    c-5.545,5.985-8.317,14.35-8.317,25.103c0,9.521,2.506,17.282,7.522,23.263c5.017,5.978,12.843,8.971,23.477,8.971    c10.646,0,18.684-3.585,24.099-10.756c3.397-4.444,5.3-9.161,5.7-14.148h-17.641c-0.359,3.297-1.388,5.985-3.097,8.056    c-1.701,2.062-4.569,3.103-8.627,3.103c-5.714,0-9.602-2.604-11.67-7.827c-1.13-2.786-1.703-6.474-1.703-11.063    c0-4.814,0.573-8.674,1.703-11.592C565.693,41.958,569.687,39.212,575.51,39.212z"
                            id="path27" 
                        />
                        <path
                            fill="#141685"
                            d="M539.036,25.354c-36.36,0-34.209,32.194-34.209,32.194V90.25h16.5V59.576    c0-5.025,0.637-8.746,1.893-11.167c2.267-4.288,6.687-6.441,13.287-6.441c0.496,0,1.15,0.027,1.956,0.064    c0.802,0.039,1.716,0.111,2.765,0.233V25.477c-0.731-0.049-1.207-0.07-1.411-0.09C539.603,25.368,539.343,25.354,539.036,25.354z"
                            id="path29" 
                        />
                        <path
                            fill="#141685"
                            d="M478.424,73.164c-0.692,0.987-1.437,1.834-2.26,2.494c-2.33,1.92-5.495,2.504-9.222,2.504    c-3.528,0-6.285-0.535-8.783-2.109c-4.118-2.53-6.434-6.812-6.681-13.099h45.654c0.064-5.41-0.111-9.554-0.549-12.438    c-0.758-4.91-2.426-9.237-4.989-12.961c-2.847-4.222-6.47-7.313-10.834-9.277c-4.369-1.948-9.278-2.927-14.731-2.927    c-9.194,0-16.657,2.896-22.416,8.685c-5.754,5.802-8.645,14.12-8.645,24.977c0,11.591,3.191,19.956,9.572,25.096    c6.374,5.14,13.742,7.715,22.078,7.715c10.103,0,17.967-3.047,23.579-9.146c3.029-3.208,4.926-6.383,5.726-9.513H478.424z     M456.244,42.44c2.323-2.384,5.581-3.579,9.785-3.579c3.87,0,7.106,1.122,9.726,3.379c2.604,2.249,4.063,5.556,4.358,9.898    h-28.232C452.471,48.059,453.932,44.83,456.244,42.44z"
                            id="path31" 
                        />
                        <path
                            fill="#141685"
                            d="M428.344,90.244h-15.072V52.292c0-3.468-1.144-11.716-11.086-11.716c-6.628,0-11.425,4.781-11.425,11.716     v37.952h-15.085V52.292c0-3.468-1.029-11.716-10.965-11.716c-6.744,0-11.431,4.781-11.431,11.716v37.952h-15.08V52.652     c0-15.669,10.394-27.518,26.511-27.518c8,0,14.507,3.359,18.74,8.742c4.451-5.383,11.076-8.742,18.735-8.742     c16.454,0,26.159,11.368,26.159,27.518V90.244z"
                            id="path35" 
                        />
                        <path
                            fill="#141685"
                            d="M731.503,5.534c0,0-16.62-1.775-16.62,11.576l-0.012,17.675c-1.84-2.952-4.233-5.264-7.186-6.926    c-2.944-1.667-6.317-2.505-10.124-2.505c-8.243,0-14.812,3.07-19.743,9.201c-4.933,6.138-7.386,14.98-7.386,25.674    c0,9.278,2.499,16.886,7.503,22.809c5.001,5.916,14.812,8.514,23.522,8.514c30.384,0,30.033-26.055,30.033-26.055L731.503,5.534z     M711.712,72.941c-2.407,3.453-5.948,5.177-10.577,5.177c-4.647,0-8.104-1.74-10.379-5.206c-2.278-3.474-3.417-8.529-3.417-14.315    c0-5.369,1.114-9.864,3.358-13.486c2.237-3.618,5.751-5.437,10.547-5.437c3.146,0,5.903,0.998,8.286,2.989    c3.87,3.299,5.806,9.217,5.806,16.878C715.336,65.023,714.126,69.489,711.712,72.941z"
                            id="path37" 
                        />
                        <path
                            fill="#05b0d9"
                            d="M458.687,194.972c0,2.231-0.813,4.149-2.437,5.742c-1.61,1.598-3.552,2.396-5.818,2.396h-8.241v-57.337     c0-11.15,3.758-18.134,9.941-22.853c4.089-3.12,10.18-6.097,21.587-6.097c7.703,0,16.727,2.99,21.599,8.932     c5.469,6.682,7.749,14.127,7.749,23.854c0,10.059-2.425,18.175-7.272,24.414c-4.849,6.069-11.08,9.092-18.682,9.092     c-4.041,0-7.596-0.72-10.666-2.146c-3.247-1.6-5.82-4.069-7.761-7.424V194.972z M486.338,150.324     c0-6.222-1.211-11.003-3.646-14.36c-2.423-3.338-5.899-5.029-10.429-5.029c-4.361,0-7.759,1.69-10.196,5.029     c-2.256,3.035-3.381,7.834-3.381,14.36c0,6.083,1.206,10.61,3.637,13.646c2.418,3.356,5.901,5.028,10.428,5.028     c4.198,0,7.518-1.672,9.94-5.028C485.127,160.619,486.338,156.085,486.338,150.324"
                            id="path43" 
                        />
                        <path
                            fill="#05b0d9"
                            d="M612.397,177.827v-4.052c-2.855,4.472-6.716,7.244-11.557,8.369c-4.849,1.106-9.65,0.712-14.406-1.206     c-4.77-1.905-8.865-5.455-12.281-10.63c-3.408-5.198-5.114-12.013-5.114-20.464c0-9.873,2.264-17.893,6.784-24.029     c4.529-6.134,11.802-8.934,21.806-9.208c9.857-0.26,15.59,1.972,21.201,6.221c6.137,4.657,9.766,11.804,9.766,22.954v33.733     c0.024,10.733-7.46,30.627-30.967,28.939c-14.565-1.056-22.648-7.03-27.159-20.568h17.391c1.27,2.225,3.212,3.94,5.846,5.126     c2.605,1.212,5.242,1.521,7.845,0.962c2.618-0.557,5.003-2.117,7.162-4.657C610.844,186.765,612.074,182.935,612.397,177.827      M585.235,150.333c0,10.998,3.182,17.092,9.534,18.299c6.344,1.175,11.034-0.298,14.053-4.436     c1.432-1.742,2.457-4.502,3.095-8.241c0.631-3.743,0.68-7.453,0.121-11.117c-0.546-3.676-1.865-6.944-3.933-9.814     c-2.058-2.864-5.08-4.305-9.052-4.305c-5.402,0-9.045,2.002-10.954,5.971C586.179,140.684,585.235,145.226,585.235,150.333"
                            id="path45" 
                        />
                        <path
                            fill="#05b0d9"
                            d="M554.926,121.158c-5.368-2.713-11.509-4.088-18.412-4.088c-10.629,0-18.117,2.771-22.483,8.301     c-2.738,3.54-4.287,8.057-4.642,13.561h15.878c0.388-2.429,1.162-4.351,2.336-5.769c1.638-1.922,4.421-2.885,8.349-2.885     c3.522,0,6.177,0.485,7.989,1.473c1.806,0.981,2.72,2.758,2.72,5.336c0,2.115-1.18,3.672-3.546,4.674     c-1.315,0.575-3.504,1.056-6.573,1.441l-5.626,0.687c-6.387,0.809-11.242,2.163-14.521,4.045     c-6.017,3.46-9.014,9.052-9.014,16.779c0,5.956,1.857,10.567,5.6,13.813c3.722,3.248,8.463,4.617,14.187,4.881     c35.876,1.604,35.474-18.912,35.802-23.177v-23.612C562.969,129.044,560.292,123.896,554.926,121.158 M546.586,156.984     c-0.104,5.505-1.683,9.284-4.705,11.364c-3.023,2.074-6.33,3.113-9.918,3.113c-2.271,0-4.193-0.629-5.772-1.874     c-1.586-1.247-2.378-3.282-2.378-6.091c0-3.146,1.297-5.474,3.885-6.977c1.543-0.881,4.049-1.637,7.56-2.237l3.745-0.697     c1.872-0.354,3.341-0.728,4.398-1.136c1.09-0.394,2.138-0.918,3.186-1.579V156.984z"
                            id="path47" 
                        />
                        <path
                            fill="#05b0d9"
                            d="M691.009,126.36c-5.296-6.635-13.329-9.942-24.106-9.942c-10.754,0-18.788,3.307-24.079,9.942     c-5.295,6.623-7.94,14.449-7.94,23.49c0,9.193,2.646,17.05,7.94,23.591c5.291,6.516,13.325,9.787,24.079,9.787     c10.777,0,18.811-3.271,24.106-9.787c5.286-6.541,7.925-14.397,7.925-23.591C698.934,140.81,696.295,132.983,691.009,126.36      M677.894,164.371c-2.563,3.411-6.238,5.113-11.032,5.113s-8.488-1.702-11.067-5.113c-2.599-3.399-3.883-8.245-3.883-14.521     c0-6.274,1.284-11.109,3.883-14.493c2.579-3.394,6.273-5.081,11.067-5.081s8.47,1.687,11.032,5.081     c2.572,3.383,3.853,8.218,3.853,14.493C681.747,156.126,680.466,160.972,677.894,164.371"
                            id="path49" 
                        />
                    </svg>
                </div>
            </div>
        </section>
        <section className={classes.Shipments}>
            <div className={classes.ShipmentsContent}>
                <div className={classes.ShipmentsTitle}>
                    <img src={Shipments} />
                    {/* <h3>{pageContent.shipments_title}</h3> */}
                </div>
                <div className={classes.ShipmentsText}>
                    <div dangerouslySetInnerHTML={createMarkup(pageContent.shipments_text)} />
                </div>
            </div>
        </section>
        <FAQ FAQs={FAQs} loadingContent={loadingContent} />
        
        <Footer/>
        </>
    )
}