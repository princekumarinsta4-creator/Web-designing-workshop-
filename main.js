<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Experiment 9 - React Form</title>
    <!-- React and Babel CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        const RegistrationForm = () => {
            const [formData, setFormData] = useState({ name: '', email: '', password: '' });
            const [errors, setErrors] = useState({});
            const [submitted, setSubmitted] = useState(false);
            const [users, setUsers] = useState([]);

            useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
                    .then(res => res.json())
                    .then(data => setUsers(data));
            }, []);

            const handleSubmit = (e) => {
                e.preventDefault();
                if (formData.name && formData.email) {
                    setSubmitted(true);
                    setErrors({});
                } else {
                    setErrors({ name: "Required!" });
                }
            };

            return (
                <div style={{ textAlign: 'center', fontFamily: 'Arial', marginTop: '50px' }}>
                    <div style={{ border: '1px solid #ccc', display: 'inline-block', padding: '20px', borderRadius: '10px' }}>
                        <h2>Registration Form</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Enter Name" onChange={(e) => setFormData({...formData, name: e.target.value})} style={{display: 'block', margin: '10px auto', padding: '8px'}} />
                            <input type="email" placeholder="Enter Email" onChange={(e) => setFormData({...formData, email: e.target.value})} style={{display: 'block', margin: '10px auto', padding: '8px'}} />
                            <input type="password" placeholder="Enter Password" style={{display: 'block', margin: '10px auto', padding: '8px'}} />
                            <button type="submit" style={{backgroundColor: 'green', color: 'white', padding: '10px 20px', cursor: 'pointer', border: 'none'}}>Register</button>
                        </form>
                        {submitted && (
                            <div style={{marginTop: '20px', color: 'green'}}>
                                <h3>Registration Successful!</h3>
                                <div style={{backgroundColor: '#e8f5e9', padding: '10px', textAlign: 'left'}}>
                                    <h4>Registered Users:</h4>
                                    <ul>
                                        {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<RegistrationForm />);
    </script>
</body>
</html>