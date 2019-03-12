import Header from '../common/Header'


const BaseLayout = (props)=> (
    <div>
        <Header/>
        {props.children} 
    </div>
)

export default BaseLayout;