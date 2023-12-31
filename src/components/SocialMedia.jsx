import React from 'react'
import styled from 'styled-components';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

function SocialMedia({inHero, inFooter, inMenu, navOpen}) {

  const reveal = {
    animation: 'fade 1.2s ease 1.4s forwards',
  }

  return (
    <ScSocialMedia id={inHero ? "socialMediaHero" : inFooter ? "socialMediaFooter" : "socialMediaMenu"} style={inMenu && navOpen ? reveal : null}>
      <a href="https://www.facebook.com/profile.php?id=100057303255853&ref=hl" target="_blank" rel="noreferrer">
        <img src={facebook} alt="facebook icon" className='socialMediaIcon'/>
      </a>
      <a href="https://www.instagram.com/bonniesdanceschool/" target="_blank" rel="noreferrer">
        <img src={instagram} alt="instagram icon" className='socialMediaIcon'/>
      </a>
    </ScSocialMedia>
  )
}

const ScSocialMedia = styled('div')`
    width: 4rem;
    display: flex;
    justify-content: space-between;
    .socialMediaIcon {
        width: 1.2rem;
        height: 1.2rem;
        transition: 0.7s cubic-bezier(.65,-1.18,.36,2.03);
        &:hover {
          transform: scale(1.3);
        }
    }
`

export default SocialMedia