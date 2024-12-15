import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home({ contacts, setContacts }) {
    const [search, setSearch] = useState("");

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="flex justify-evenly py-8 bg-slate-400 w-[1200px] mx-auto">
                <h1 className="text-3xl font-bold">Contact App</h1>
                <input
                    className="px-5 rounded-xl"
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="bg-slate-500 px-5 rounded-xl">
                    <NavLink to="/create-contact">Add</NavLink>
                </button>
            </div>
            <div>
                <table className="mx-auto w-[1200px]">
                    <thead className="bg-slate-400">
                        <tr>
                            <th className="w-[400px]">Name</th>
                            <th className="w-[400px]">Phone</th>
                            <th>Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContacts.length > 0 ? (
                            filteredContacts.map((contact) => (
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone}</td>
                                    <td className="flex justify-evenly">
                                        <button
                                            onClick={() =>
                                                setContacts(
                                                    contacts.filter(
                                                        (c) =>
                                                            c.id !== contact.id
                                                    )
                                                )
                                            }
                                            className="bg-red-500 px-5 rounded-lg h-[30px] font-medium"
                                        >
                                            Delete
                                        </button>
                                        <button className="bg-green-500 px-2 rounded-lg h-[30px] font-medium">
                                            <NavLink
                                                className={"px-8"}
                                                to={`/edit-contact/${contact.id}`}
                                            >
                                                Edit
                                            </NavLink>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-4">
                                    No contacts found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
