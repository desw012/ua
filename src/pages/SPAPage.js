import {useEffect} from "react";
import {ga} from "../ga";

function SPAPage(){
    useEffect(()=>{
        ga('send', 'pageview')
    },[]);
    return (
        <>
        </>
    )
}

export default SPAPage;

