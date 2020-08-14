import React, { useState} from 'react';
import _ from 'lodash';
import CharacterCard from './CharacterCard';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
} 
var nword = '';
var start_Count = 0;
export default function WordCard(props){
    // console.log("debug");
    const [state, setState] = useState(prepareStateFromWord(props.value))
    const activationHandler = c => {
        if(start_Count==0){
        console.log(`${c} has been activated.`) 
        nword = c
        start_Count = 1
            let guess = state.guess + c
            setState({...state, guess})
            // if(guess.length == state.word.length){
            // if(guess == state.word){
            // console.log('yeah!')
            // setState({...state, guess: '', completed: true})
            // }else{
            // console.log('reset')
            // setState({...state, guess: '', attempt: state.attempt + 1})
            //      }           
            //                                     }
                }else{
            console.log(`${c} find ${nword}.`) 
            let guess = state.guess + c
            setState({...state, guess})
            // if(guess.length == state.word.length){
                console.log('check')
            if(nword == c){
            console.log('yeah!')
            setState({...state, guess: '', completed: true})
            start_Count = 0;
            }else{
            console.log('reset')
            start_Count = 0
            setState({...state, guess: '', attempt: state.attempt + 1})

                                //   }
                                }
                                  }  
                                }
    //          }else{
    //                 console.log("debug")
    // const [state, setState] = useState(prepareStateFromWord(props.value))
    // const activationHandler = c => { 
    //     console.log(`${c} has been activated.`) 
    //         let guess = state.guess + c
    //         setState({...state, guess})
    //         if(guess.length == state.word.length){
    //         if(nword == state.word){
    //         console.log('yeah!')
    //         setState({...state, guess: '', completed: true})
    //         }else{
    //         console.log('reset')
    //         start_Count = 0
    //         setState({...state, guess: '', attempt: state.attempt + 1})
    // }
    //      }
    //         }  

    //             }
    return (
    <div>
        {
            state.chars.map((c,i) => 
            <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)
        }   
    </div>
    )
}
