import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/index";
import { Layout, Row } from "antd";
import MovieCard from "../../Container/MovieCard";
import "./MainPage.css";

const { Content, Footer } = Layout;
const MainPage = (props) => {
  const { all_movies, apiMovies } = props;

  useEffect(() => {
    apiMovies();
  }, [all_movies, apiMovies]);

  return (
    <Router>
      <Header />
      <Content className="content">
        <Switch>
          <Route exact path="/">
            <Row gutter={15}>
              {all_movies.map((data) => (
                <MovieCard movieData={data} />
              ))}
            </Row>
          </Route>
        </Switch>
      </Content>
      <Footer className="foot"></Footer>
    </Router>
  );
};

export default MainPage;
