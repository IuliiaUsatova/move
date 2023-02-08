import {Component} from 'react';

class Hello extends Component {
    //Lifecycle:
    //1. Рождение
    //2. Изменение
    //3. Удаление

    constructor(){
        super();
        console.log('This is constructor.');
    }
    static getDerivedStateFromProps (props, state){
    console.log('This is Derived State.');
    }

componentDidMount(){
console.log('Component mounted!');
    }

    render(){
        return (
            <div>
                Hello, i am render
            </div>
        )
    }

 // 1. constructor, getDerivedStateFromProps, componentWillMount, componentDidMount, render

    // 2. getSnapshotBeforeUpdate, shouldComponentUpdate, componentDidUpdate, render

    // 3. componentWillUnmount
}

export default Hello;