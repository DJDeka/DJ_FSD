import { useState } from "react";
import friendsarray2 from "./friendsarray2";

const GetFriend2 = () => {
    const [friends, setFriends] = useState(friendsarray2); // Setting default value

    const handleSecondFriend = () => {
        setFriends(
            friends.map((friend) =>
                // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
                friend.id === 2
                    ? { ...friend, name: "Changed Name" }
                    : { ...friend }
            )
        );
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
                <button onClick={handleSecondFriend}>Change Second Name</button>
            </ul>
        </main>
    );
};

export default GetFriend2;