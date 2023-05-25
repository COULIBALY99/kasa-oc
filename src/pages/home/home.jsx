import React from 'react'
import  Banner  from '../../components/section/banner/banner'
import CardList from '../../components/cardList/cardList'
import './home.css';

function Home() {
  const fetchJson = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    console.log("apparition");
    fetchJson();
  }, []);

  return (
    <main className='home'>
      <Banner></Banner> 
      <CardList list={data}/>
    </main>
  )
}

export default Home