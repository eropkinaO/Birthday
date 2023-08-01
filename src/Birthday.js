import { Component } from "react";
import bag from './icons8.png'

export class Gift extends Component {
    state = {
       userInput: "",
       giftList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }


    addItem(input) {
        if (input === '') {
            alert("Please, enter an item!")
        } else {
        let listArray = this.state.giftList;
        listArray.push(input);
        this.setState({userInput: "", giftList: listArray});
        console.log(listArray);
    }}

    crossWord(event) {
        const gift = event.target;
        gift.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.giftList;
        listArray.length = 0;
        this.setState({giftList: listArray})
    }

   
    render() {
        return(
            <div>
         <div className="container">
            <input type="text" placeholder="What gifts do you want for your Birthday?" 
        value={this.state.userInput}  onChange={(e) => {this.onChangeEvent(e.target.value)}} />
         </div>
         
         <div className="container">
          <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
         </div>
        
         <ul>{this.state.giftList.map((item, index) =>
         <li onClick={this.crossWord} key={index}><img src={ bag } width="40px" alt="icon"/>
         {item}</li>
        )}
        </ul>

        <div className="container">
       <button className="delete" onClick={() => this.deleteItem()}>Delete</button>
        </div>

         </div>
         
        )




}}