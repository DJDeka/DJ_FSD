import { useState } from "react";
import friendsarray4 from "./friendsarray4";

const GetFriend4 = () => {
    const [friends, setFriends] = useState(friendsarray4); // Setting default value

    const handleFirstFriendHobby = () => {
        setFriends(
            friends.map((friend) =>
                friend.id === 1
                    ? {
                          ...friend,
                          hobbies: friend.hobbies.map((hobby) =>
                              // You can replace 2 with your dynamic value
                              hobby.id === 2
                                  ? { ...hobby, text: "Random Hobby" }
                                  : { ...hobby }
                          ),
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
            <button onClick={handleFirstFriendHobby }>Add Hobby to mandy</button>
        </ul>
    );
                        }
export default GetFriend4;