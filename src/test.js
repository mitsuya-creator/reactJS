export default function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleFirstNameChange() {
        setFirstName(e => e.target.value);
    }

    function handleLastNameChange() {
        setLastName(e => e.target.value);
    }

    function handleReset() {
        setFirstName("");
        setLastName("");
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}
