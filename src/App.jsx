import React, { useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CreateContact from "./components/CreateContact";

export default function App() {
    const [contacts, setContacts] = useState([]);

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home contacts={contacts} setContacts={setContacts} />
                    }
                />
                <Route
                    path="/create-contact"
                    element={
                        <CreateContact
                            setContacts={setContacts}
                            contacts={contacts}
                        />
                    }
                />
                <Route
                    path="/edit-contact/:id"
                    element={
                        <CreateContact
                            contacts={contacts}
                            setContacts={setContacts}
                        />
                    }
                />
            </Routes>
        </div>
    );
}
