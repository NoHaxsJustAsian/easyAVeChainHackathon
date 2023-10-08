
function LoginScreen() {
    const nav = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordShown, setPasswordShown] = useState(false);
  
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };
  
    const handleLogin = (username, password) => {
      axios
        .get(url + "users/login", {
          params: {
            username: username,
            password: password,
          },
        })
        .then((res) => {
          console.log(res);
          const id = res.data._id.toString();
          nav("/feed/" + id);
        })
        .catch((err) => console.log(err));
    };
  
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleLogin(username, password);
    };
  
    return (
      <div style={{ display: "flex", justifyContent: "space-between", height: "92vh"}}>
        <div className="Container">
          <div className="pt-28 px-8">
            <header className="Header font-sans font-bold">Log in</header>
            <hr className="pt-0" />
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="username"
                  placeholder="Username"
                  onChange={(e) => {
                    const val = e.target.value;
                    setUsername(val);
                  }}
                />
              </Form.Group>
              <InputGroup className="mb-3">
                <Form.Control
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => {
                    const val = e.target.value;
                    setPassword(val);
                  }}
                />
                <Button
                  variant="outline-secondary"
                  id="addon"
                  onClick={togglePassword}
                  className="ShowButton"
                >
                  <i
                    className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}
                  />
                </Button>
              </InputGroup>
              <Button
                className="font-sans font-bold"
                variant="danger"
                type="submit"
              >
                Login
              </Button>
            </Form>
            <div className="SwitchLoginCreateGroup font-sans">
              <p>Don't have an account?</p>
              <Link to="/registration/" className="font-sans font-bold">
                Register
              </Link>
            </div>
          </div>
          <div className="relative bottom-0 left-5 text-slate-900">
            <LogoCard />
          </div>
        </div>
        <div className="bg-danger z-0">
          <img src={backdrop} className="object-cover" width="1178px" />
        </div>
      </div>
    );
  }
  
  export default LoginScreen;
  