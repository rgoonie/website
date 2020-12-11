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
            title: "",
            description: "",
            writeDate: "",
            content: "",
        }

        fetch(this.props.mdFile)
        .then((r) => r.text())
        .then(text => {
            this.setState({content: text})
            
            const contentSplit = this.state.content.split("\n");
            if(contentSplit.length >= 6){
                const blogTitle = contentSplit[0].substr(2);
                const blogDescr = contentSplit[1];
                const blogDate = contentSplit[5];

                this.setState({title: blogTitle, description: blogDescr, writeDate: blogDate});
            }
        })
        .catch( err => {
            this.setState({title: "Unable to load Blog", description: "Please reload page to try again", writeDate: "Unable to load Blog", content: "Unable to load Blog"});
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
                    <h1 className="blog-post-title">{this.state.title}</h1>
                </div>
                <p className="blog-post-description">{this.state.description}</p>
                <p className="blog-write-date">{this.state.writeDate}</p>

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
