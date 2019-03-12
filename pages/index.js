import React, {Component} from 'react'
import Link from 'next/link'

class Index extends Component {
    render(){
        return(
            <div>
                <h1>Index Page</h1>
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
            </div>
        )
    }
}

export default Index;