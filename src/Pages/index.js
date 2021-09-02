import React from 'react';
import axios from 'axios';
import {Container, Input, A, Ul, Li, H5} from './HomeElements';

class Home extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         persons: [],
         inputValue: '',
      }
      this.inputHandler = this.inputHandler.bind(this);
   }
   inputHandler(e){
      const str = e.target.value;
      this.setState( {inputValue: str} )
      axios.get(`https://api.github.com/search/users`, {params: {q: str}})
      .then(res => {
         const persons = res.data.items;
         this.setState( {persons} );
      })
   };

   render(){
      return (
         <Container>
               <H5>GitHub Searcher</H5>
               <Input value={this.state.inputValue} onChange={this.inputHandler} placeholder="search for Users" />
               <Ul>
                  { this.state.inputValue && this.state.persons.map(person => (
                     <Li key={person.id}>
                        <A href={`/person/${person.id}`}>
                           <img src={person['avatar_url']} alt="img"/>
                           <p>{person.login}</p>
                           <p>{person.id}</p>
                        </A>
                     </Li>
                  )) }
               </Ul> 
         </Container>
      );
   }
}

export default Home;