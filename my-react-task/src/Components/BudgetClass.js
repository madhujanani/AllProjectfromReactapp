import{Component} from "react";
export default class BudgetClass extends Component{
  
  constructor() {
        super();
        this.state ={
          budget:'',
          expenses :'',
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleExpences=this.handleExpences.bind(this)
      }   
      handleChange(event) {
        this.setState({budget: event.target.value  });      
      }   
      handleExpences(event){
        this.setState({ expenses: event.target.value });       
      }   
      render() {
        const { budget, expenses } = this.state;   
        const amount = budget-expenses;   
        return (
          <div>
            <h2>Finding the budget using Class component</h2>
          <label for ='budget'>Budget</label>
          <input type='number' id = 'budget' placeholder='Enter your Budget' value={this.state.budget} onChange={this.handleChange} /><br></br>
          <label for ='expenses'>Expenses</label>
          <input type='number' id = 'expenses' placeholder='Enter your Expences' value={this.state.expenses} onChange={this.handleExpences} /><br></br>
          <label for ='amount'>Amount Remaining</label>
          <input type='number' id = 'amount' value={amount} /><br></br><br></br>

          </div>
        );     
      }   
    }




