import styled from "@emotion/styled";
import { Cascader } from "antd";
import { AiOutlineSearch } from "react-icons/ai";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 109px 43px 109px;
`;

export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const SearchBar = styled.div`
  width: 380px;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-bottom: 1px solid #606060;
`;

export const search = styled.input`
  width: 300px;
  border: none;
  color: #606060;

  :focus {
    border: none;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 29px;
  height: 29px;
`;

export const Title = styled.div`
  font-family: "BMDOHYEON";
  font-size: 30px;
  color: #606060;
  margin-bottom: 107px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 617px;
  height: 128px;
  align-content: space-between;
`;

export const Category = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #606060;
  cursor: pointer;
`;

export const storeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const SortCascader = styled(Cascader)`
  width: 226px;
  font-size: 18px;
  border: #606060;
  color: #606060;
`;
