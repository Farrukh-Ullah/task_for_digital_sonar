import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

interface Joke {
  value: string;
}

const HomePage = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.chucknorris.io/jokes/random");
      setJoke(response.data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Chuck Norris Joke
      </Typography>
      {loading ? <CircularProgress /> : <Typography>{joke?.value}</Typography>}
      <Button variant="contained" color="primary" onClick={fetchJoke} sx={{ mt: 2 }}>
        Get Another Joke
      </Button>
      <Button component={Link} to="/form" variant="outlined" sx={{ mt: 2, ml: 2 }}>
        Go to Form
      </Button>
    </Container>
  );
};

export default HomePage;
