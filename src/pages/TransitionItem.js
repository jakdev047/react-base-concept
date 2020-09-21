import React, { Component, Fragment } from 'react';
import { Transition } from 'react-transition-group';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class TransitionItem extends Component {

    state = {
        show: true
    }

    tanstionEffect = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Transtion Effect" />
                <div className="container">
                    <h2>Transtions</h2>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-success" onClick={this.tanstionEffect}>Toggle</button>
                        </div>
                    </div>
                    <Transition in={this.state.show}  timeout={2000}>
                        { mode => ( <p>{mode}</p> ) }
                    </Transition>

                    {/*  
                        there are 4 steps in Transition effect
                        
                        Entering Entered Exiting Exited
                    
                    */}

                    <Transition in={this.state.show}  timeout={500}>
                        { mode => ( 
                            <div style={{
                                background: '#000',
                                color: '#fff!important',
                                borderRadius: '4px',
                                padding: '10px',
                                opacity: mode == 'exited' ? 0 : 1,
                                transition: 'opacity .5s ease-in-out'
                            }}>
                                <p className="transtion-para"> I am a Transition Body</p>
                            </div>
                        )}
                    </Transition>
                </div>

            </Fragment>
        )
    }
};

export default TransitionItem;
