import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Container, H5 } from '../HomeElements';
import Loader from '../../components/Loader';
import { PersonInner, DataWrapper, Img, Button, P } from './PersonElements';

const Person = ()=> {
  const {id} = useParams();
  const [data, setData] = useState({})
  const [repos, setRepos] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(()=>{
    axios.get(`https://api.github.com/user/${id}`)
    .then(res => {
       setData(res.data)
    })

    axios.get(`https://api.github.com/users/${data.login}/repos`)
    .then( res => {
      setTimeout(()=> {
        setRepos(res.data);
        setLoader(false);
      }, 1500);
    });
  }, [id, data]);
 
  return (
    <Container>
      <H5>GitHub Searcher</H5>
      <Button href={`/`} >Back</Button>      
      <PersonInner>
        <a href={data.html_url}><Img src={data['avatar_url']} alt="img" /></a>
        <DataWrapper>
          <p>User name: {data.login}</p>
          <p> id: {id}</p>
          <p>{'E-mail:' || data.email}</p>
          <p>{'Location:' || data.location}</p>
          <p>{data['created_at'] || 'data created'}</p>
          <p>Folovers: {data.followers || 0}</p>
          <p>Foloving: {data.following || 0}</p>
          <p>Public gists: {0 || data['public_gists']}</p>
          <p>Public repositories: {0 || data['public_repos']}</p>
        </DataWrapper>
      </PersonInner>  
      <P>List repositories, behalf of: {data.login}</P>
      {loader ? <Loader /> : <ul> { repos.map( repositories => (
        <li key={repositories.id}> 
          Stars: {repositories.stargazers_count}&nbsp; 
          Forks: {repositories.forks}&nbsp; 
          Name:
          <a href={repositories.html_url}> {repositories.name} </a>  
        </li>
      ) ) } </ul>}
    </Container>
  );
}

export default Person;

