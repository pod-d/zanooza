import Button from "components/Button/Button";
import {
  FirstCardProps,
  collectionsData,
  defaultValues,
  firstCardData,
  secondCardData,
} from "./GameExperienceData";
import {
  AllCollections,
  CardsAndSelectors,
  CollectionsContent,
  CollectionsList,
  CollectionsWrapper,
  Experiences,
  ExperiencesCards,
  ExperiencesTop,
  GameExperienceWrapper,
  SelectWrapper,
  Selector,
  Selectors,
} from "./GameExperience.styled";
import { InputField, Select } from "components/FormFields/FormFields";
import { FirstCard, SecondCard } from "./GameExperienceCards";
import { useState } from "react";
import Trending from "components/Landing/Trending/Trending";
import { AiOutlineSearch } from "react-icons/ai";
import plus1 from "../../assets/plus1.png";
import plus2 from "../../assets/plus2.png";

const GameExperience = () => {
  const [currentCardData, setCurrentCardData] = useState<FirstCardProps>(
    firstCardData[0]
  );

  return (
    <GameExperienceWrapper>
      <h1>
        Find the perfect <span>Team Experience</span>
      </h1>
      <p className="covered">Whatever your needs and preferences are, we’ve got you covered!</p>
      <SelectWrapper>
        {defaultValues.map((value, index) =>
          index === 4 ? (
            <Button key={index} name={value} color={"#A456D8"} />
          ) : (
            <div key={index} className={index < 3 ? "visible-border" : ""}>
              <Select defaultValue={value} />
            </div>
          )
        )}
      </SelectWrapper>
      <CardsAndSelectors>
        <FirstCard
          title={currentCardData.title}
          desc={currentCardData.desc}
          innerBg={currentCardData.innerBg}
          mainBg={currentCardData.mainBg}
        />
        <Selectors>
          {firstCardData.map((data, index) => (
            <Selector
              $cursor={data === currentCardData ? "not-allowed" : "pointer"}
              $bgColor={data === currentCardData ? "#121212" : "#F4F4F4"}
              $width={data === currentCardData ? "5rem" : "1.875rem"}
              key={index}
              onClick={() => setCurrentCardData(data)}
            ></Selector>
          ))}
        </Selectors>
      </CardsAndSelectors>
      <Trending showBtn={false} />
      <CollectionsWrapper>
        <h1>
          All our <span className="span1">experiences</span> are grouped into{" "}
          <span className="span2">collections</span> for easy access and
          navigation.
        </h1>
        <CollectionsContent>
          <AllCollections>
            <span className="title">All collections</span>
            <CollectionsList>
              {collectionsData.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </CollectionsList>
          </AllCollections>
          <Experiences>
            <ExperiencesTop>
              <InputField type="search" placeholder="Search all collections" />
              <Button name="Search" color="#A456D8" />
              <span>2000 Experiences</span>
              <AiOutlineSearch className="search-icon" />
            </ExperiencesTop>
            <ExperiencesCards>
              {secondCardData.map((data, index) => (
                <SecondCard
                  key={index}
                  title={data.title}
                  desc={data.desc}
                  cost={data.cost}
                  noOfPeople={data.noOfPeople}
                  duration={data.duration}
                  bgImg={data.bgImg}
                />
              ))}
            </ExperiencesCards>
          </Experiences>
        </CollectionsContent>
      </CollectionsWrapper>
      <img src={plus1} alt="icon" className="plus1" />
      <img src={plus2} alt="icon" className="plus2" />
    </GameExperienceWrapper>
  );
};

export default GameExperience;
