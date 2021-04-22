import api from '../api';
import { useEffect, useState } from "react";


const Home = () => {

    const [repositories, setRepositories] = useState([]);
    const [owners, setOwners] = useState([]);

    useEffect(() => {
        setList();
    }, []);

    async function setList(){
        console.log("Entrou");
        const response = await api.request('GET /search/repositories', {
            q: 'q'
          })
          console.log(response);
          const data = response.data.items;

        var array = [];

        Object.keys(response.data.items).forEach(
            function(item){
                array.push(data[item]);
            }
        )
        console.log(array);
        setRepositories(array);
    }

    return (
        <div className="App">
            <div className="head"><a href="#">Meus favoritos</a></div>
            <div className="forms">
                <form>
                <select style={{height: 21, marginRight: 2}}>
                    <option value="repositorio">
                    Repósitorio
                    </option>
                </select>
                <input required/>
                <button style={{marginBottom: 20, marginLeft: 5}} type="submit">Buscar</button>
                </form>
            </div>
        </div>
    );
}

export default Home;