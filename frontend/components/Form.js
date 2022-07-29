import React,{ Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
         // Setting up functions
         this.onChangeName = this.onChangeName.bind(this);
         this.onChangeEmail = this.onChangeEmail.bind(this);
         this.onChangeAddress = this.onChangeAddress.bind(this);
         this.onChangeLocation = this.onChangeLocation.bind(this);
         this.onChangeNumber = this.onChangeNumber.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

         
        // Setting up state
        this.state = {
            name: '',
            email: '',
            address: '',
            location: '',
            number: ''
          }
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        window.location.href = "https://wa.me/+2347039134538?text="+this.state.name+"%20"+this.state.email+"%20"+this.state.address+"%20"+this.state.location;
    }

    onChangeName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeAddress(e) {
        this.setState({address: e.target.value})
      }
      onChangeLocation(e) {
        this.setState({location: e.target.value})
      }
      onChangeNumber(e) {
        this.setState({number: e.target.value})
      }
    render(){
    return (
        // <div className="w-[70%]">
            <form onSubmit={this.onSubmit} className="flex items-center justify-center mt-[20px]">
                <div className='flex flex-col w-[80%] items-center rounded-xl justify-center p-[20px] bg-[#e9e9ea] mb-[30px]'>
                    <div className="flex flex-col w-[80%] md:w-[60%] m-[10px]">
                        <label>Name</label>
                        <input type="text" className="rounded-xl p-[3px]" value={this.state.name} onChange={this.onChangeName} required={true} />
                        <label>Email</label>
                        <input type="email" value={this.state.email} onChange={this.onChangeEmail} className="rounded-xl p-[3px]"  required={true} />
                        <label>Address</label>
                        <input type="text" value={this.state.address} onChange={this.onChangeAddress} className="rounded-xl p-[3px]"  required={true} />
                        <label>Location</label>
                        <input type="text" value={this.state.location} onChange={this.onChangeLocation} className="rounded-xl p-[3px]"  required={true}/>
                        <label>Phone number</label>
                        <input type="text" value={this.state.number} onChange={this.onChangeNumber} className="rounded-xl p-[3px]"  required={true}/>
                    </div>
                    <button type='submit' className="bg-[#0c1952] text-white w-[40%] md:w-[20%] rounded-md p-[10px]">Contact Us</button>
                </div>
            </form>
        // </div>
    )}
}
