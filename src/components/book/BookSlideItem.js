import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
    width:100%;
`;

const Label = styled.label`
    font-weight:'bold'
`;

const BookSlideItem = ({bookItem})=>{
    return(
        <div>
            <Image src={bookItem.imgPath}/>
            <div>
                <Label>{bookItem.label}</Label>
                <small>{bookItem.desc}</small>
            </div>
        </div>
    )
}

BookSlideItem.propTypes= {
    bookItem : PropTypes.shape({
        imgPath : PropTypes.string,
        label:PropTypes.string,
        desc:PropTypes.string,
    })
}

export default BookSlideItem;