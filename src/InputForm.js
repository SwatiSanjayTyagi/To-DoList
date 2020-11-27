import React , { Component } from 'react'
import ArrayDisplay from './ArrayDisplay'

class InputForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            task:'',
            taskDesc:'',
            dtpicker:'',
            taskList:[]
        }
    }
    handleDelete = (item) => {
        console.log(item , 'to be deleted')
    }
    render() {
        const {task,taskDesc,taskDate} = this.state
        return(
            <div>
                <input type="text" value = {task}  placeholder='Task' 
                onChange={(event)=> this.setState({task: event.target.value})} autofocus/> 
                <input type="text"  value = {taskDesc} placeholder='Task Description'
                onChange={(event)=> this.setState({taskDesc: event.target.value})}/>
                <input type="date" value = {taskDate}
                onChange={(event)=> this.setState({taskDate: event.target.value})}  />
                <input type="button" value ="Add Task" id="AddBtn"
                onClick ={(event)=> {this.setState({taskList: [
                    ...this.state.taskList,
                    {arrtask: this.state.task ,
                    arrtaskdesc: this.state.taskDesc,
                    arrdate: this.state.taskDate}
                    ],
                    task:'', taskDesc:'',taskDate: 'dd/mm/yyyy'})} } />

                <ArrayDisplay Displaylt = {this.state.taskList}  deleteMe= {this.handleDelete} />
                
                {console.log(this.state.taskList)}
            </div>
        )
    }
}

export default InputForm