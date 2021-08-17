import React, {optionsState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Search = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: 900px;
`;

const SearchUpper = styled.div`
  margin: auto;
  width: 900px;
  padding: auto;
  align: center;
  display: block;
  margin-bottom: 23px;
`;

const CritSelect = styled.select`
  text-align: center;
  width : 80px;
  height : 50px;
  font-size: 20px;
  margin-top : 5px;
  padding-left: 3px;
`;

const CritOption = styled.option`
  text-align: center;
  font-size: 20px;
`;

const SearchInput = styled.input`
  height: 50px;
  margin-left : 10px;
  width : 810px;
  margin-top : 5px;
  font-size: 20px;
  padding-left: 5px;
`;

const MovieCard = styled.div`
  padding : 15px;
  class: "card bg-primary mb-3";
  margin: 20px auto 20px auto;
  width: 700px;
  height: 245px;
  display: block;
  background-color: #E2E1FF;
  box-shadow: 1px 2px 2px gray;
  border-radius: 0.3em;
  font-family: 나눔고딕;
`;

const MovieImageLink = styled.div`
  class: "card-img-top";
  float: left;
  margin: auto;
`;

const MovieImage = styled.img`
  overflow: hidden;
  width: 150px;
  height: 215px;
`;

const MovieTitleLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  hover {
    text-decoration: underline;
  }
  
  active {
    text-decoration: underline;
  }
`;

const MovieContent = styled.p`
  class: "card-body";
  float:right;
  margin:auto;
  width : 500px;
  text-align: left;
  size: 20px;
  dispaly:flex;
  color: black;
`;

const MovieSummary = styled.p`
  margin-top: 2px;
  text-align: left;
  color: black;
  width : 500px;
  overflow: hidden; text-overflow: ellipsis;
  display: -webkit-box; 
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; 
  word-wrap:break-word;
  line-height: 1.5em;
  height: 7.5em;
  margin-bottom: 0;
`;

const SummaryLink = styled(Link)`
  height: 1.5em;
  position: relative;
  left:450px;
`;



const GenrePresenter = ({currentGenre, result}) => {

  return (
    <div>
      {result.map((movie) => ( 
          
          <MovieCard key={movie.movieCd}>
            <MovieImageLink>
              <Link to={`/Detail?code=${movie.movieCd}`}><MovieImage alt="movie" src={movie.image}></MovieImage></Link>
            </MovieImageLink>
            <MovieContent>
              <MovieTitleLink to={`/Detail?code=${movie.movieCd}`}>{movie.title}</MovieTitleLink> 
              <p>평점 {movie.rate}<br/>
              {movie.date}</p>
              <MovieSummary>
                {movie.summary} 
              </MovieSummary>
              <SummaryLink to={`/Detail?code=${movie.movieCd}`}>더 보기</SummaryLink>
              
            </MovieContent>
          </MovieCard>
          ))}
    </div>
  )
}

export default GenrePresenter;