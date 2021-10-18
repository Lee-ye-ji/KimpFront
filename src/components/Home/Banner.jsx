import React from 'react'
import styled from 'styled-components'
import mainImg from '../../image/MainImg.png';

const BREAK_POINT_MEDIUM = 768;
// const BREAK_POINT_SMALL = 576;

const BulidingImg = {
    backgroundImage: `url(${mainImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '570px'
}

function Banner() {
    const Section = styled.section`
        position: relative;
        padding: 20px;
        div{
            color: #fff;
            position: absolute;
            font-weight: bold;
            h1{
                color: #fff;
            }
        }
    `
    const D1 = styled.div`
        left: 51px;
        top: 80px;
        font-size: 30px;
        line-height: 40px;
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            top: 30px;
            left: 0;
            font-size: 25px;
            width: 100%;
            text-align: center;
        }
    `

    const D2 = styled.div`
        left: 51px;
        top: 300px;
        font-size: 20px;
        line-height: 30px;
        font-weight: normal;
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            top: 200px;
            left: 0;
            text-align: center;
            width: 100%;
            font-size: 17px;
        } 
    `
    const D3 = styled.div`
        top: 400px;
        right: 50px;
        font-size: 15px;
        line-height: 30px;
        text-align: right;
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            top: 450px;
            left: 0;
            text-align: center;
            width: 100%;
            font-size: 12px;
        }
    `


    return (
        <>
            <Section style={BulidingImg}>
                <D1>
                    Safe Process of M&A, <br/>
                    We will DO BEST <br/>
                    for your BUSINESS.
                </D1>
                <D2>
                    <b>K</b>orea <br/>
                    <b>I</b>nternational <br/>
                    <b>M</b>&A  <br/>
                    <b>P</b>latform  <br/><br/>
                    <h1>KIMP</h1>
                </D2>
                <D3>
                M&A 중개 및 사업승계 컨설팅 서비스를 제공하는 KIMP.<br/>
                어렵기만한 M&A, KIMP가 해결해 드립니다. <br/>
                한국무역협회 산하의 KIMP에서 안전한 M&A 바로 시작하세요.
                </D3>
            </Section>
        </>
    )
}

export default Banner