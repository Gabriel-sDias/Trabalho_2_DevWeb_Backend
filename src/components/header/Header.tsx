import {
  HeaderBody,
  InputDiv,
  Logo,
  LogoDiv,
  SearchInput,
  UserProfilePicture,
  UserProfilePictureDiv,
  SearchButton,
} from "./HearderStyled";
import MiniYoutube from "../../assets/images/MiniYoutube_cropped.png";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleYourChanel() {
    navigate("/yourchanel");
  }
  function handleSearch() {
    navigate("/search", { state: { search: search } });
  }
  return (
    <HeaderBody>
      <LogoDiv>
        <Logo src={MiniYoutube} />
      </LogoDiv>
      <InputDiv>
        <SearchInput
          placeholder="Pesquisar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>
          <MagnifyingGlass size={28} color="#fcfcfc" />
        </SearchButton>
      </InputDiv>
      <UserProfilePictureDiv onClick={handleYourChanel}>
        <UserProfilePicture
          src="data:image/png;base64,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"
        />
      </UserProfilePictureDiv>
    </HeaderBody>
  );
}
