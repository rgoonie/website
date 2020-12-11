import React, { Component } from 'react';
import BlogPost from './BlogPost/BlogPost';
import './Blogs.css';

import { storage } from '../../../config/firebase'

export class Blogs extends Component {

    constructor(props){
        super(props)

        this.state = {
            blogURLs: [],
        }

        this.getBlogURLs()
    }

    getBlogURLs() {

        const storageRef = storage.ref();

        storageRef.child('blogFiles/').listAll().then( result =>{
            result.items.forEach( fileRef => {
                //console.log("File Ref " + fileRef.toString());

                fileRef.getDownloadURL().then(url => {
                    const updatedURLs = this.state.blogURLs;
                    updatedURLs.push(url)

                    this.setState({ blogURLs: updatedURLs})
                });
            });
        });
    }

    render() {
        return (
            <div className="blogs-page">
                <div className="blogs-content">
                    <h1 className="blogs-header">Blogs Page</h1>

                    <div className="blog-post-all">
                        {this.state.blogURLs.map(url => (
                            <React.Fragment key={url}>
                                <BlogPost mdFile={url} />
                            </React.Fragment>
                        ))}
                    </div>

                </div>
            </div>
        )
    }
}

export default Blogs;
