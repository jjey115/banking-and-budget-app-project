import "./App.css";

import React, { useState } from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <UserInput />
                <Deposit />
            </header>
        </div>
    );
}

const userList = [];

const UserInput = () => {
    const [name, setName] = useState("");
    const [balance, setBalance] = useState("");

    function handleUserInputSubmit(event) {
        event.preventDefault();
        userList.push({ username: name, userbalance: balance });
        console.log("userList", userList);
        setName("");
        setBalance("");
    }

    function handleUserInputChange(event) {
        setName(event.target.value);
    }

    function handleBalanceInputChange(event) {
        setBalance(Number(event.target.value));
    }

    return (
        <form className="add-user" onSubmit={handleUserInputSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={handleUserInputChange}
                />
            </label>
            <label>
                Balance:
                <input
                    type="text"
                    value={balance}
                    onChange={handleBalanceInputChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

const Deposit = () => {
    const [name, setName] = useState("");
    const [balance, setBalance] = useState("");

    function handleUserInputSubmit(event) {
        event.preventDefault();
        userList.push({ username: name, userbalance: balance });
        console.log("userList", userList);
        setName("");
        setBalance("");
    }

    function handleUserInputChange(event) {
        setName(event.target.value);
    }

    function handleBalanceInputChange(event) {
        setBalance(Number(event.target.value));
    }

    return (
        <form className="add-user" onSubmit={handleUserInputSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={handleUserInputChange}
                />
            </label>
            <label>
                Balance:
                <input
                    type="text"
                    value={balance}
                    onChange={handleBalanceInputChange}
                />
            </label>
            <button type="button">Load User</button>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default App;
