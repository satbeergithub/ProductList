import styled from "styled-components";
export const Year = [
  {
    id: 0,
    year: "2006",
  },
  {
    id: 1,
    year: "2007",
  },
  {
    id: 2,
    year: "2008",
  },
  {
    id: 3,
    year: "2009",
  },
  {
    id: 4,
    year: "2010",
  },
  {
    id: 5,
    year: "2011",
  },
  {
    id: 6,
    year: "2012",
  },
  {
    id: 7,
    year: "2013",
  },
  {
    id: 8,
    year: "2014",
  },
  {
    id: 9,
    year: "2015",
  },
  {
    id: 10,
    year: "2017",
  },
  {
    id: 11,
    year: "2018",
  },
  {
    id: 12,
    year: "2019",
  },
  {
    id: 13,
    year: "2020",
  },
  {
    id: 14,
    year: "2021",
  },
  {
    id: 15,
    year: "2022",
  },
  {
    id: 16,
    year: "2023",
  },
];

export const FilterDiv = styled.div`
  width: 25%;
  background: #fff;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
  margin-top: 2em;
  padding: 30px;
  height:800px; 
  @media(max-width:1200px){
    width:30%
   } 
   @media(max-width:1000px){
    width:40%
   } 
   @media(max-width:1000px){
    width:50%
   } 
  @media(max-width:500px){
   width:80%
  }
  @media(max-width:400px){
    width:85%
   }
`;
export const GreenBox = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #90ee90;
  margin: 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 10px;
`;
export const P = styled.p`
  border-bottom: 1px solid black;
  text-align: center;
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ProductDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 70%;
justify-content: space-evenly;
margin-top:1em;
`;
export const ProductBox = styled.div`
width: 250px;
height: 400px;
border-radius: 19px;
background: #fff;
box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
margin:10px;
padding:20px;
`;