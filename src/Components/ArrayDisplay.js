 import React , { Component } from 'react'
import InputForm from '../Components/InputForm'

class ArrayDisplay extends Component {
    constructor(props){
        super(props)
        
    }

    
    render(){


        // function dtchk(){    
        //     var today = new Date()
        //     var tday=today.getDate()
        //     var stday = tday.toString()
        //     console.log(stday)
        //     var lend=stday.length
        //     console.log(lend)
        //     if (lend<=1)
        //     {
        //         console.log ('day less than 10',lend)
        //         var stday = '0'+stday.toString()
        //     } else {
        //         console.log ('day more than 10',lend)
        //         var stday = stday.toString()
        //     }
        //     var tmonth=today.getMonth()+1
        //     var stmonth = tmonth.toString()
        //     var len=stmonth.length
        //     if (len<=1)
        //     {
        //         console.log ('month less than 10',len)
        //         var stmonth = '0'+tmonth.toString()
        //     } else {
        //         console.log ('month more than 10',len)
        //         var stmonth = tmonth.toString()
        //     }
            
        //     var tyear=today.getFullYear()
        //     var styear = tyear.toString()
        //     var ttdate = styear+'-'+stmonth+'-'+stday
        //     return ttdate
        // }

        // var todaydate = dtchk() 

        var todaydate = new Date().toLocaleDateString()

        console.log('onload',todaydate)
        
        return(
            <div text-align='left'>
                <ul>
                    {this.props.Displaylt.map((item, index) => (
                    <li key={index}>
                        
                        <div>
                        <input type="checkbox" id={index} name={index} checked={item.arrcheck} onClick = {()=>{this.props.updateMe(index)}} />
                        <span className={item.arrcheck? 'truechk': '' } >
                            {console.log(todaydate,new Date(item.arrdate).toLocaleDateString(), 'checking dates')}
                            
                            
                            <span className={todaydate <= new Date(item.arrdate).toLocaleDateString() ?'': 'overDate' } >   
                                {`${item.arrtask}- ${item.arrtaskdesc} to be completed by ${item.arrdate }`}  
                                <span> {todaydate <= new Date(item.arrdate).toLocaleDateString() ? '': <strong> Due day is passed!!  </strong> } </span>
                            </span>
                        </span>
                        <input type="button" value="Delete" 
                        onClick = {()=>{this.props.deleteMe(index)}} />
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        
        )
        
                    
    }
}

export default ArrayDisplay 