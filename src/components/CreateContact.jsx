import useGetInputValues from "../hooks/useGetInputValues";
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateContact({ setContacts, contacts }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const { values, handleChange, resetHandler } = useGetInputValues({
        name: "",
        phone: "",
    });
    useEffect(() => {
        if (location.pathname !== "/create-contact") {
            const contact = contacts.find((c) => c.id === parseInt(id));
            console.log("2:", contact);
            handleChange({ target: { name: "name", value: contact.name } });
            handleChange({ target: { name: "phone", value: contact.phone } });
        }
    }, []);

    const bosilganda = useCallback((e) => {
        e.preventDefault();
        const a = new FormData(e.target);

        if (location.pathname === "/create-contact") {
            const contact = {
                id: Date.now(),
                name: a.get("name"),
                phone: a.get("phone"),
            };
            console.log(contact);

            setContacts([...contacts, contact]);
        } else {
            const contact = {
                id: parseInt(id),
                name: a.get("name"),
                phone: a.get("phone"),
            };

            console.log("id", id);
            console.log(contact);

            const updatedContacts = contacts.map((c) =>
                c.id === contact.id ? contact : c
            );
            console.log("Updated Contacts", updatedContacts);

            setContacts(updatedContacts);
        }

        navigate("/");
    });

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen p-10">
            <h1 className="text-4xl font-semibold text-center mb-8">
                {location.pathname === "/create-contact" ? "Add" : "Edit"}{" "}
                Contact
            </h1>
            <form
                className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
                onSubmit={bosilganda}
            >
                <input
                    className="w-full h-12 p-4 mb-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    type="text"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                />
                <input
                    className="w-full h-12 p-4 mb-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    type="phone"
                    placeholder="Phone"
                    value={values.phone}
                    onChange={handleChange}
                    name="phone"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-3 px-6 rounded-xl font-medium transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
                >
                    {location.pathname === "/create-contact" ? "Add" : "Edit"}
                </button>
            </form>
        </div>
    );
}
