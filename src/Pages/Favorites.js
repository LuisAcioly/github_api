import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';
import github from '../assets/github.png';

const Favorites = () => {
    const [list, setList] = useState([]);
    const [result, setResult] = useState([]);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        setItems();
    }, []);

    function setItems() {
        const param = location.state.list;
        const resultList = param.filter((item) => {
            if(item.favorite){
                return item;
            }
        });
        setResult(resultList);
        setList(param);
    }

    function unfavorite(item, index){
        console.log("Entrou");
        const favIndex = list.findIndex(t => t.id === item.id);
        const listTemp = [...list];

        item.favorite = false;
        listTemp.splice(favIndex, 1, item);

        setList(listTemp);

        const favList = [...result];
        favList.splice(index, 1);

        setResult(favList);
    }

    function goBack() {
        history.push({
            pathname: '/',
            state: { list: list }
        });
    }

    return (
        <div className="App">
            <div className="headFav"><button onClick={goBack}>Voltar</button></div>
            <div className="list">
                <ul>
                    {result.map((item, index) => {
                        return <li key={index} style={{marginBottom: 50}}>
                            {console.log(index)}
                            <div className="favorite">
                                <button onClick={() => unfavorite(item, index)}>
                                    <FaTimes/>
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

export default Favorites;