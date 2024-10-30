import { useState, useEffect } from 'react';
import './App.css';
import Grid from './componnents/grid';

export interface Photo {
  id: string;
  urls: {
    regular: string;
  };
}

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm1, setSearchTerm1] = useState('');
  const [imageDetailssetSearch, setImageDetailssetSearch] = useState<Photo | null>(null);

  const getPhotos = async () => {
    console.log("ggggggggggggggggggg")
    setLoading(true); 
    setError(null); 
    try {
      const response = await fetch('https://api.unsplash.com/photos/random/?client_id=UjayZYMYc_yeDYF_szzlvmYIfmpDlOj45fo7Lt9qhLQ&count=20');
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log(error);
      setError('Failed to load photos');
    } finally {
      setLoading(false); 
    }
  };
  const getPhotos_byId = async () => {
    
     const response = await fetch(`https://api.unsplash.com/photos/${searchTerm}?client_id=UjayZYMYc_yeDYF_szzlvmYIfmpDlOj45fo7Lt9qhLQ`)
     if (!response.ok) {
       throw new Error(`Error: ${response.status}`);
     }
     const data = await response.json();
     setImageDetailssetSearch(data);
     console.log(imageDetailssetSearch)
  }
  useEffect(() => {
    getPhotos_byId();
  }, [searchTerm1]);
  useEffect(() => {
    getPhotos();

  }, []);

  return (
    <div className="App">
      <h1>Unsplash Photos</h1>
      <div className='div-search'>
      <input type="text" placeholder="Search..." className="inp-search" onChange={(e)=> setSearchTerm(e.target.value)}></input>
      <button className="btn-search" onClick={()=> setSearchTerm1("search")}>search</button>
      </div>
      {loading && <p>Loading photos...</p>}
      {error && <p>{error}</p>}
      {searchTerm1 && <img src={imageDetailssetSearch?.urls.regular} alt="Unsplash photo" ></img>}
      <Grid photos = {photos}/>      
    </div>
  );
}

export default App;
