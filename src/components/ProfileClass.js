import {Component} from 'react'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            count :0,
            count1 :0
        }
    }

    componentDidMount(){
    }

    render(){
        const {count} = this.state
        return(
            <>
            <h1>hello this is Profile ,{count} of name is {this.props.name}</h1>
            <button onClick={() => {
                    this.setState({
                        count:1
                    })
                }}>button
            </button>
            </>
        )
    }
}


export default Profile;