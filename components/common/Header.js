import React, {Component} from 'react'
import Link from 'next/link'
import '../../styles/main.scss'

export default class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <p className="custom">scss</p>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
                <Link href={'/about'}>
                    <a>About</a>
                </Link>
                <Link href={'/portfolios'}>
                    <a>Portfolio</a>
                </Link>
                <Link href={'/blogs'}>
                    <a>Blogs</a>
                </Link>
                <Link href={'/cv'}>
                    <a>CV</a>
                </Link>  

                <style jsx>
                {`
                    a{
                        font-size:30px
                    }
                
                
                `}
                </style>   
            </React.Fragment>
        )
    }
}

