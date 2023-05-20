import styled from "styled-components"

export const ProductContainerUl = styled.ul`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(3, 25%);
  overflow: auto;
  gap: 15px;
  margin: 1rem;
`

export const ProductLi = styled.li`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  list-style: none;
  text-align:center;
  background-color: whitesmoke;
  

  & h2{ 
    font-size: .8rem;
  }

  & img {
    width: 20%;
    object-fit: contain;
  }
`