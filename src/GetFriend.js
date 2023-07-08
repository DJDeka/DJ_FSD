import { useState } from "react";
import friendsarray from "./friendsarray";

const GetFriend = () => {
    const [friends, setFriends] = useState(friendsarray); // Setting default value

    const handleAddFriend = () => {
        setFriends((prevFriends) => [
            ...prevFriends,
            {
                name: "Random Friend Name",
                age: 20, // Random age
            },
        ]);
    };

    return (
        <main>
            <ul>
                // Mapping over array of friends
                {friends.map((friend, index) => (
                    // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
                    <li key={index}>
                        <span>name: {friend.name}</span>{" "}
                        <span>age: {friend.age}</span>
                    </li>
                ))}
                <button onClick={handleAddFriend}>Add Friends</button>
            </ul>
        </main>
    );
};

export default GetFriend;