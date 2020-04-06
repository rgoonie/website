import React, { Component } from 'react';
import './BlogPost.css';
import './github.markdown.css';
import { Drawer, styled } from '@material-ui/core';
import Markdown from 'react-markdown';
import { Close } from '@material-ui/icons';

const StyledCloseIcon = styled(Close)({
    float: "right",
});

export class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogOpen: false,
            content: ""
        }

        fetch(this.props.mdFile)
        .then((r) => r.text())
        .then(text => {
            this.setState({content: text})
        })
    }

    render() {
        const toggleDrawer = () => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
    
            this.setState({blogOpen: !this.state.blogOpen});
        };


        return (
            <div className="blog-post" onClick={toggleDrawer()}>
                <div className="blog-post-title-box">
                    <h1 className="blog-post-title">{this.props.title}</h1>
                </div>
                <p className="blog-post-description">{this.props.description}</p>
                <p className="blog-post-date">Posted: {this.props.postDate}</p>

                <Drawer anchor="bottom" open={this.state.blogOpen} onClose={toggleDrawer()} PaperProps={{square: false}}>
                    <div className="blog-markdown-container">
                        <StyledCloseIcon onClick={toggleDrawer()}/>
                        <div className="markdown-body">
                            <Markdown source={this.state.content}/>
                        </div>
                    </div>
                </Drawer>

            </div>
        )
    }
}

export default BlogPost;
