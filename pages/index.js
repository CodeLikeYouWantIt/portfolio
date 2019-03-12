import React, {Component} from 'react'
import Header from '../components/common/Header'


class Index extends Component {
    render(){
        return(
            <div>
                <h1>Index Page</h1>
                <Header title={'I am a header component'}>
                    <h1>I am children props</h1>
                </Header>
            </div>
        )
    }
}

export default Index;