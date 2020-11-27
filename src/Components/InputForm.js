import React , { Component } from 'react'
import ArrayDisplay from '../Components/ArrayDisplay'

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
        console.log('in delete function')
        this.setState({taskList:[...this.state.taskList.slice(0,item),
            ...this.state.taskList.slice(item+1)]})
    }
    handleUpdate = (index) => {
        console.log('in update array function')
        this.setState({
            taskList: this.state.taskList.map((newArr, ind) =>  {
            if (index == ind)
            {
                console.log(index,ind)
                console.log('inside if condition')
                console.log(this.state.taskList)
                return{ ...newArr,arrcheck: !newArr.arrcheck}
            }
            return newArr
            })
        })
        console.log(this.state.newArr)
    }

        render() {
        const {task,taskDesc,taskDate, val} = this.state
        return(
            <div>
                <input type="text" value = {task}  placeholder='Task'
                onChange={(event)=> this.setState({task: event.target.value})} autoFocus/>
                <input type="text"  value = {taskDesc} placeholder='Task Description'
                onChange={(event)=> this.setState({taskDesc: event.target.value})}/>
                <input type="date" value = {taskDate}
                onChange={(event)=> this.setState({taskDate: event.target.value})}  />
                <input type="button" value ="Add Task" id="AddBtn"
                onClick ={(event)=> {this.setState({taskList: [
                    ...this.state.taskList,
                    {arrtask: this.state.task ,
                    arrtaskdesc: this.state.taskDesc,
                    arrdate: this.state.taskDate,
                    arrcheck: false}
                    ],
                    task:'', taskDesc:'',taskDate: 'dd/mm/yyyy'})} } />

                <ArrayDisplay Displaylt = {this.state.taskList}  
                              deleteMe = {this.handleDelete}  
                              updateMe = {this.handleUpdate} 
                              tDate = {this.state.taskDate}/>

                {console.log(this.state.taskList)}
            </div>
        )
    }
}

export default InputForm