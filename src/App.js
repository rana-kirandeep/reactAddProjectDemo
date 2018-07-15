import React, { Component } from 'react';
import logo from './logo.svg';

import Project from './components/project';
import AddProject from './components/addProject'
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            projects: [{
                    title: "project1",
                    category: "web devlopment"

                }, {
                    title: "project2",
                    category: "app devlopment"

                }, {
                    title: "project3",
                    category: "mobile devlopment"

                }

            ]
        }
    }

    addProject(newProject) {

        let projects = this.state.projects;
        projects.push(newProject);

        this.setState({
            projects

        })

    }

    onDelete(title) {

        let projects = this.state.projects;

        let index = projects.findIndex(x => x.title === title);

        console.log(index);

        projects.splice(index, 1);

        this.setState({ projects })

    }

    render() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = { logo } className = "App-logo"
            alt = "logo" / >
            <
            h1 className = "App-title" > Welcome to React < /h1> <
            /header> <
            AddProject addProject = { this.addProject.bind(this) }
            /> <
            hr / >
            <
            Project test = "hello world"
            projects = { this.state.projects } onDelete = { this.onDelete.bind(this) }
            />

            <
            p className = "App-intro" >
            To get started, edit < code > src / App.js < /code> and save to reload. <
            /p> <
            /div>
        );
    }
}

export default App;