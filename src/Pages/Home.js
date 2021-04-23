import api from '../api';
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from 'react-icons/fa';
import github from '../assets/github.png';
import { useHistory, useParams } from "react-router-dom";


const Home = () => {

    const [repositories, setRepositories] = useState([]);
    const [result, setResult] = useState([]);

    function repositoryClass(name, login){
        this.name = name;
        this.login = login;
        this.favorite = false;
    }

    useEffect(() => {
        setList();
    }, []);

    async function setList(){
        const response = await api.request('GET /search/repositories', {
            q: 'q'
          })
          const data = response.data.items;

        var array = [];

        Object.keys(response.data.items).forEach(
            function(item){
                array.push(data[item]);
            }
        )
        setRepositories(array);
        console.log(array);
    }

    function Search(e){

        e.preventDefault();
        const list = repositories.filter((item) => {
            if(item.name.indexOf(e.target.name.value) > -1){

                return item;
            }
        });

        var resultList = [];

        list.forEach(
            function(item){
                var repository = new repositoryClass(item.name, item.owner.login);
                resultList.push(repository);
            }
        );

        console.log(resultList);
        setResult(resultList);
    }

    function favor(item){
        console.log("Entrou");
        const index = repositories.findIndex(t => t.id === item.id);
        const listTemp = [...repositories];

        if(item.favorite === false){
            item.favorite = true;
            listTemp.splice(index, 1, item);
        }
        else{
            item.favorite = false;
            listTemp.splice(index, 1, item);
        }
        setRepositories(listTemp);
    }

    return (
        <div className="App">
            <div className="head"><a href="#">Meus favoritos</a></div>
            <div className="forms">
                <form onSubmit={Search}>
                <select name="type" style={{height: 21, marginRight: 2}}>
                    <option value="repository">
                        Repósitorio
                    </option>
                </select>
                <input name="name"/>
                <button style={{marginBottom: 20, marginLeft: 5}} type="submit">Buscar</button>
                </form>
            </div>
            <div className="list">
                <ul>
                    {result.map((item, index) => {
                        return <li key={index} style={{marginBottom: 50}}>
                            {console.log(index)}
                            <div className="favorite">
                                <button onClick={() => favor(item)}>
                                    {item.favorite === false ? <FaRegStar/> : <FaStar/>}
                                </button>
                            </div>
                            <div className="res">
                                <img src={github} />
                                {item.name}<br/>
                                {item.login}
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Home;