import { useState } from "react";
import friendsarray3 from "./friendsarray3";

const GetFriend3 = () => {
    const [friends, setFriends] = useState(friendsarray3); // Setting default value

    const handleThirdFriendHobby = () => {
        setFriends(
            friends.map((friend) =>
                friend.id === 3
                    ? {
                          ...friend,
                          hobbies: [...friend.hobbies, "Random Hobby"],
                      }
                    : { ...friend }
            )
        );
    };

    return (
        <ul>
            {friends.map((friend) => (
                // I am no longer using index as key, as I have unique id value.
                <li key={friend.id}>
                    <span>name: {friend.name}</span>{" "}
                    <span>age: {friend.age}</span>
                    <br />
                    <span>Hobbies</span>
                    <ul>
                        {friend.hobbies.map((hobby) => (
                            <li>{hobby}</li>
                        ))}
                    </ul>
                </li>
            ))}
            <button onClick={handleThirdFriendHobby}>Add Hobby to mandy</button>
        </ul>
    );
                        }
export default GetFriend3;