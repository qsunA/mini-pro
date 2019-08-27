import React from 'react';
import BookSlide from './book/BookSlide';
import styled from 'styled-components';

const tutorialSteps = [
    {
      label: 'San Francisco',
      desc: 'Beatiful San Francisco view ',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      desc: 'Beatiful Bird with hand',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      desc: 'Popular Travel place',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      desc: 'Go this place',
      imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Goč, Serbia',
      desc: 'Beatiful place',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];

const Wrapper = styled.div`
  display:table;
  background : red;
`;

const WrapperInner = styled.div`
  display:table-cell;
  text-align : center;
`;

const WrapperContent = styled.div`
  display:inline-block;
`;


const DefaultPage = ()=>{
    return(
        <Wrapper>
            <WrapperInner>
                <BookSlide bookList={tutorialSteps}/>
            </WrapperInner>
        </Wrapper>
        
    );
}

export default DefaultPage;