import React,{ Component } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default class Form2 extends Component {
    constructor(props){
        super(props);
         // Setting up functions
         this.onChangeName = this.onChangeName.bind(this);
         this.onChangeEmail = this.onChangeEmail.bind(this);
         this.onChangeLocation = this.onChangeLocation.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

         
        // Setting up state
        this.state = {
            name: '',
            email: '',
            location: '',
            message: 'I want Xyz Academy to help manage my account'
          }
    }

    onSubmit(e){
        e.preventDefault();
        window.location.href = "https://wa.me/+2347039134538?text="+'Name:'+this.state.name+','+"%20"+'Email:'+this.state.email+','+"%20"+'Message:'+this.state.message+','+"%20"+'Location:'+this.state.location.toUpperCase();
    }

    onChangeName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeEmail(e) {
        this.setState({email: e.target.value})
      }
      onChangeLocation(e) {
        this.setState({location: e.target.value})
      }
    render(){
    return (
        <div className="w-[100%] h-[100%] flex items-center justify-center">
            <form onSubmit={this.onSubmit} className="w-[90%] md:w-[60%]  ">
                <div className='flex flex-col rounded-xl h-[500px] w-[100%] items-center justify-center p-[10px] bg-[#e8e8ea] '>
                    <div className='flex flex-row items-center w-[60%] justify-between'>
                      <div className="w-[150px] h-[150px] bg-[url('/logo1.png')] bg-cover "></div>
                      <AiOutlineCloseCircle onClick={this.props.hide} className="text-[#f08800] text-[25px] m-[5px] cursor-pointer" />
                    </div>
                    <div className="flex flex-col w-[80%] md:w-[60%] m-[10px]">
                        <label className='font-[600]'>Name</label>
                        <input type="text" className="rounded-xl p-[8px]" value={this.state.name} onChange={this.onChangeName} required={true} />
                        <label className='font-[600]'>Email</label>
                        <input type="email" value={this.state.email} onChange={this.onChangeEmail} className="rounded-xl p-[8px]"  required={true} />
                        <label className='font-[600]'>Location</label>
                        <input type="text" value={this.state.location} onChange={this.onChangeLocation} className="rounded-xl p-[8px]"  required={true}/>
                        <label className='font-[600]'>Message</label>
                        <input readOnly type="text" value="I want Xyz Academy to help manage my account"  className="rounded-xl p-[8px] break words"/>
                    </div>
                    <button type='submit' className="bg-[#0c1952] text-white w-[40%] md:w-[20%] rounded-md p-[10px] mt-[5px]">Contact Us</button>
                </div>
            </form>
         </div>
    )}
}
