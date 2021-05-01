import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import Button from '../../assets/Button/Button';
import {TEXT_WHITE, MAIN_COLOR, SUB_COLOR} from '../../assets/Colors/Color';

const CircleDiv = styled.div`
    position:relative;
    top: 20%;
    left: 15%;
    svg{
        stroke-dasharray: 100; /*이 값은 path의 길이와 동일합니다*/
        stroke-dashoffset: 100;
        animation: dash 1.3s linear;
        animation-fill-mode: forwards;
        
        @keyframes dash {
        0% {
            stroke-dashoffset: 100;
        }
        100% {
             stroke-dashoffset: 0;
        }
}
    }
    
`
const BtnStyle = styled.div`
    
    button {
        max-width: 160px;
        font-family: spoqa-Light;
        margin-top: 3vh;
    }
`
const Text = styled.div`
    margin-top: 5vh;
    text-align: center;
    height : 15vh;
    width : 50vw;
    font-size: 1.4rem;
    
`


const Wrapper = styled.div`
    width: 250px;
    height: 250px;
`

const Wrap = styled.div`
    position: relative;
    top: 5vh;
    width: 245px;
    height:245px;
    border-radius: 50%;
    overflow:hidden;
    /* background-color: coral; */
`
const Info = styled.p`
    width: 180px;
    /* height: 250px; */
    text-align: center;
    padding-top: 2vh;
    font-size: 0.9rem;
    color: #ABC8FF;
`
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   arrows: true
    };
    return (
      <div>
        <Wrap>
            <Slider {...settings}>
                
            <Wrapper>
                <CircleDiv>
                    
                        <Text>
                            일기를 작성할<br />
                            계좌를 등록해주세요.
                            <BtnStyle>
                                <Button Text={"등록하기"} Width={"50vw"}></Button>
                            </BtnStyle>
                        </Text>
                        <Info>
                            양옆으로 슬라이드 해보세요.
                        </Info>
                    
                </CircleDiv>
            </Wrapper>
            <Wrapper>
                
                <CircleDiv>
                        <Text>
                            일기를 작성할<br />
                            계좌를 등록해주세요.
                            <BtnStyle>
                                <Button Text={"등록하기"} Width={"50vw"}></Button>
                            </BtnStyle>
                            <Info>
                                양옆으로 슬라이드 해보세요.
                            </Info>
                        </Text>
                    </CircleDiv>
            </Wrapper>
            <Wrapper>
            <CircleDiv>
                    <Text>
                        일기를 작성할<br />
                        계좌를 등록해주세요.
                        <BtnStyle>
                            <Button Text={"등록하기"} Width={"50vw"}></Button>
                        </BtnStyle>
                        <Info>
                            양옆으로 슬라이드 해보세요.
                        </Info>
                    </Text>
                </CircleDiv>
            </Wrapper>
            </Slider>
        </Wrap>
      </div>
    );
  }
}
