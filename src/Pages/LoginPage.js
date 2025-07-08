function LoginPage() {
    return (
        <section className="login-page">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">Email:</label>
                <input type="emial" id="email" required />

                <label htmlFor="password">password:</label>
                <input type="password" id="password" required />

                <button type="submit">Login</button>
            </form>
        </section>
    );
};
export default LoginPage;