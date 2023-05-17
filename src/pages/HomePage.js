import { useState } from "react";
import Home from "."
import Header from "./Header";

function HomePage(){

    const [likes, setLikes] = useState(0);

    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

    function handleClick(){
        setLikes(likes + 1);
        ("increment likes");

    }

    return (
      <div>
        <Header title="React" />
        <Header title="Home" />
        <Header />
      
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>

        <button onClick={handleClick}>Like {likes}</button>
      </div>
    );
}

export default HomePage;